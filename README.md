gobble-forcecopy
================

This is a simple [Gobble](https://github.com/gobblejs/gobble) plugin to copy all files
in the output dir. Indeed Gobble is using symbolic links a lot to make builds
faster but some tools that [want to resolve require](https://github.com/nodejs/node/issues/5481)
([mocha for example](https://github.com/Victorystick/gobble-mocha/issues/1)) do not like them.

Usage
-----

```javascript
const js_sources = gobble([
  gobble('src/js'),
]).transform('babel');

const test = gobble([
  js_sources,
  gobble('test').transform('babel')
]).transform('forcecopy')
  .observe('mocha')
  .transform('devnull');
```

We use the `forcecopy` plugin just before invoking the `mocha` plugin.
