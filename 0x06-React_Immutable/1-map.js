const { Map } = require('immutable');

function getImmutableObject(object) {
  return new Map(object);
}
