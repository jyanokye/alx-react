import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1.concat(page2));
}

export function mergeElements(page1, page2) {
  const merged = { ...page1, ...page2 };
  return List(Map(merged).values());
}
