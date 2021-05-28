
import test from 'ava'

import { normalizeSearch, prepareSearch, filterSearch } from './index.js'


test('normalize characters', t => {
  t.is(normalizeSearch('text áéíóú AE ÁÉ foo--bar foo1'), 'TEXT AEIOU AE AE FOO--BAR FOO1')
})

test('normalize arrays', t => {
  t.is(normalizeSearch(['fóo', `bár`, `báz`]), 'FOO BAR BAZ')
})

test('prepare items and filter them', t => {
  let items = [
    { name: 'foo', lastName: 'bar' },
    { name: 'baz', lastName: 'qux' },
  ]
  items.forEach(item => {
    prepareSearch(item, [
      item.lastName,
    ])
  })

  let results = items.filter(filterSearch('qu'))
  t.is(results.length, 1)
  t.is(results[0].name, 'baz')
})
