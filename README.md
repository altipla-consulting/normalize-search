
# normalize-search

Normalize strings to search them client side.


## Install

```sh
npm i @altipla/normalize-search
```


## Usage

### Basic usage

Import the package to have the pair of functions in scope:

```js
import { prepareSearch, filterSearch } from '@altipla/normalize-search'
```

To filter a list of items you have first to prepare them:

```js
// From the server or any other data source
let items = [
  {name: 'foo', lastName: 'bar'},
  {name: 'baz', lastName: 'qux'},
]

items.forEach(item => {
  prepareSearch(item, [
    item.name,
    item.lastName,
    // ... any other thing you want to link to the item
  ])
})
```

Then you can generate a new function to filter the items with the user input:

```js
let userInput = 'qu' // obtained from your user interface
let filteredItems = items.filter(filterSearch(userInput))
```


### Custom normalization

If you want to prepare a custom search of any kind where you need the normalized text call `normalizeSearch`:

```js
import { normalizeSearch } from '@altipla/normalize-search'


let result1 = normalizeSearch('your text here')
let result2 = normalizeSearch([
  item.name,
  item.lastName,
])
```
