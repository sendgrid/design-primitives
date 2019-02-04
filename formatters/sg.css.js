import _ from 'lodash';
import sortTokens from './sort-tokens';
import { blockComment } from './license-header';

export const nameTemplate = ({ name }) => `--${_.kebabCase(name)}`;

export const valueTemplate = ({ value, type }) =>
  type === 'media-query' ? `"${value}"` : value;

export const variableTemplate = ({ name, value, type }) =>
  `${nameTemplate({ name })}: ${valueTemplate({ value, type })};`;

export const template = ({ name, value, type }) =>
  `${variableTemplate({
    name,
    value,
    type,
  })}`

export default result => {
  const { props } = sortTokens(result.toJS());
  return [blockComment, ':root {', _.map(props, prop => template(prop)).join('\n'), '}'].join(
    '\n',
  );
};
