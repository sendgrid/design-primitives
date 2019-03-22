# SendGrid Design Primitives

Global design primitives/tokens to be used across SendGrid's products, stored as json data.

## Packages

* [design-colors](https://github.com/sendgrid/design-primitives/tree/master/packages/design-colors)
* [design-spacing](https://github.com/sendgrid/design-primitives/tree/master/packages/design-spacing)
* [design-typography](https://github.com/sendgrid/design-primitives/tree/master/packages/design-typography)

## Current Usage
This package is currently being used for [Style Guide](http://styleguide.sendgrid.com) and  [SendGrid.design](https://sendgrid.design/).

### Installation
```sh
npm install @sendgrid/design-primitives --save
```

## Usage

### Sass:

```scss
@import '@sendgrid/design-primitives/tokens/sg-style-guide/scss/base.scss';

.my-selector {
  color: $color-slate-20;
}
```

### CSS:

```css
@import '@sendgrid/design-primitives/tokens/sg-style-guide/css/base.css';

.my-selector {
  color: var(--color-slate-20);
}
```

### JavaScript (ES6):

```js
// Individual tokens
import { colfax } from '@sendgrid/design-primitives/tokens/sg-style-guide/es6/base.es6';

console.log(colfax);

// Token category
import { colors } from '@sendgrid/design-primitives/tokens/sg-style-guide/es6/base.es6';

console.log(colors.colorCodePurple);

// All tokens
import * as tokens from '@sendgrid/design-primitives/tokens/sg-style-guide/es6/base.es6';
```

### JavaScript (CommonJS):

```js
// Individual tokens
import { colfax } from '@sendgrid/design-primitives/tokens/sg-style-guide/common/base.common';

console.log(colfax);

// Token category
import { colors } from '@sendgrid/design-primitives/tokens/sg-style-guide/common/base.common';

console.log(colors.colorCodePurple);

// All tokens
import * as tokens from '@sendgrid/design-primitives/tokens/sg-style-guide/common/base.common';
```
