# fyndiq-styles-fonts [![npm](https://img.shields.io/npm/v/fyndiq-styles-fonts.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-styles-fonts)

Font helpers for Fyndiq

# Installation

The styles can be installed through NPM:

``` bash
npm i -S fyndiq-styles-fonts
```

# Usage

This package exposes 2 main modules: `bootstrap.less` and `fonts.less`.

### `bootstrap.less`

This script bootstraps the usage of the fonts, declaring the main font on the `html` tag.

``` js
// In Javascript
import `fyndiq-styles-fonts/bootstrap.less`
```

### `fonts.less`

This file exposes 2 variables: the `@font-standard` which corresponds to font supposed to be in the body of your webpage, and `@font-headline` which corresponds to the headlines font.

``` less
@import "~fyndiq-styles-fonts/fonts.less";

h3.mySpecialHeadline {
  font-family: @font-headline;
}
```


## Where are the fonts?

Because of legal reasons, the font files cannot be committed to this repository. Here is a LESS helper that downloads the font files from a local files:

``` less
@font-face {
  font-family: 'MuseoSans';
  font-style: normal;
  font-weight: 500;
  src: url('\./fonts/MuseoSans-500.eot') format('embedded-opentype'), url('\./fonts/MuseoSans-500.woff') format('woff');
}

@font-face {
  font-family: 'MuseoSans';
  font-style: normal;
  font-weight: 900;
  src: url('\./fonts/MuseoSans-900.eot') format('embedded-opentype'), url('\./fonts/MuseoSans-900.woff') format('woff');
}

@font-face {
  font-family: 'Cubano';
  font-style: normal;
  font-weight: normal;
  src: url('\./fonts/cubano-regular-webfont.eot') format('embedded-opentype'), url('\./fonts/cubano-regular-webfont.woff') format('woff');
}
```

In order for it to work properly, a custom loader for the WOFF and EOT files need to be implemented in your webpack config

``` sh
npm i -D file-loader
```

``` js
// In your webpack config
{
  module: {
    loaders: [{
      test: /\.(eot|woff)$/,
      loader: 'file-loader',
    }],
  },
}
```
