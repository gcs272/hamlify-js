# hamlify-js - Browserify plugin for haml

A quick and easy transform for [Browserify](https://github.com/substack/node-browserify) to make use of Haml with straight javascript.

## For use in Grunt
**Gruntfile.js**
```
  grunt.initConfig({
    ...
    watchify: {
        options: {
            callback: function(b) {
                b.transform('hamlify-js');
                return b;
            }
        }
    }
    ...
```

## Allows use of templates like:
**example.haml**

```
%span=user.name
```

**example.js**

```
template = require('example.haml')
contents = template({user: {name: 'Someone'}})
```
