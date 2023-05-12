export default function accessImmutableObject(object, array) {
  return array.reduce((result, key) => (result ? result.get(key) : undefined), object);
}
