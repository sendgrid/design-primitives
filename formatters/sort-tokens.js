import sortBy from 'lodash/sortBy';

const sortObjBykey = obj =>
  Object.keys(obj)
    .sort()
    .reduce((result, key) => {
      result[key] = obj[key]
      return result;
    }, {});

export default json => {
  const aliases = sortObjBykey(json.aliases);
  const props = sortBy(json.props, 'name');

  return { aliases, props };
};
