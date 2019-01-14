import _ from 'lodash';

import sortTokens from './sort-tokens';
import { blockComment } from './license-header';

export const tokenTemplate = ({ name, value }) =>
  `export const ${_.camelCase(name)} = "${value.replace(/"/g, '\\"')}";`;

export const categoryTemplate = (
  categoryName,
  props,
) => `export const ${_.camelCase(categoryName)} = {
${_.map(props, prop => `${_.camelCase(prop.name)},`).join('\n')}
};`;

export default result => {
  const { props } = sortTokens(result.toJS());

  const categories = _(props)
    .map(prop => prop.category)
    .uniq()
    .value();

  const singleTokens = _.map(props, prop => tokenTemplate(prop)).join('\n');

  const groupedTokens = categories
    .sort()
    .map(category =>
      categoryTemplate(
        category,
        _(props)
          .filter({category})
          .value(),
      ),
    )
    .join('\n');

  return [blockComment, singleTokens, groupedTokens].join('\n');
}
