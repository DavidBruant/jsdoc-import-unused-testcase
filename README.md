# Test case for a (maybe) Typescript bug

```sh
git clone https://github.com/DavidBruant/jsdoc-import-unused-testcase
cd jsdoc-import-unused-testcase
npm install
npx tsc
```

This results in 

```
code.js:1:5 - error TS6133: 'ImportedType' is declared but its value is never read.

1 /** @import {ImportedType} from './types.d.ts' */
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(another unrelated error)

Found 2 errors in the same file, starting at: code.js:1

```

It says the type is never read, but it is
