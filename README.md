# backstage-text-input

Backstage React text field component

[![Build Status](https://travis-ci.org/backstage-ui/backstage-text-field.png?branch=master)](https://travis-ci.org/backstage-ui/backstage-text-field)

## Installing

```bash
$ npm install backstage-text-field --save
```

## Development/Contributing

Clone the project to your local machine, go to the root dir and run:

```bash
$ npm i
$ npm run demo
```

You should see `Listening at localhost:8080` in your terminal. Open a browser
window and check `http://localhost:8080/demo`.

## Examples

```js
import React from 'react';
import { render } from 'react-dom';
import TextField from 'backstage-text-field';

render(<TextField label='Input some data' />, document.getElementById('container'));
```
