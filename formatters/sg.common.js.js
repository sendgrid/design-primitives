import _ from 'lodash';

import sortTokens from './sort-tokens';
import { blockComment } from './license-header';

export const tokenTemplate = ({ name, value }) =>
  `${_.camelCase(name)}: "${value.replace(/"/g, '\\"')}"`;

export default result => {
  const { props } = sortTokens(result.toJS());

  const source = `
module.exports = {
  ${_.map(props, prop => tokenTemplate(prop)).join(',\n  ')}
};`;

  return [blockComment, source].join('\n');
};
