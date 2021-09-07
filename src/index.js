
import { isArray, constant, flatten } from 'lodash-es'
import diacritic from 'diacritic'


export function normalizeSearch(input) {
  if (isArray(input)) {
    input = flatten(input).join(' ')
  }
  return diacritic.clean(input).toUpperCase()
}


export function prepareSearch(item, search) {
  item.$$search = normalizeSearch(search)
}


export function filterSearch(search) {
  if (!search) {
    return constant(true)
  }

  search = normalizeSearch(search)

  return function(item) {
    let text = item.$$search || ''
    return text.includes(search)
  }
}
