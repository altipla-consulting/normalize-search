
import { isArray, constant } from 'lodash-es'
import diacritic from 'diacritic'


let cache = new WeakMap();


export function normalize(input) {
  if (isArray(input)) {
    input = input.join(' ')
  }
  return diacritic.clean(input).toUpperCase()
}


export function prepareSearch(item, search) {
  cache.set(item, normalize(search))
}


export function filterSearch(search) {
  if (!search) {
    return constant(true)
  }

  search = normalize(search)

  return function(item) {
    let text = cache.get(item) || ''
    return text.includes(search)
  }
}
