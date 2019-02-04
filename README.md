# SendGrid Design Primitives

Global design primitives/tokens to be used across SendGrid's products, stored as json data.

## Packages

* [sg-colors](https://github.com/sendgrid/design-primitives/tree/master/src/sg-colors)
* [sg-dot-design](https://github.com/sendgrid/design-primitives/tree/master/src/sg-dot-design)
* [sg-spacing](https://github.com/sendgrid/design-primitives/tree/master/src/sg-spacing)
* [sg-style-guide](https://github.com/sendgrid/design-primitives/tree/master/src/sg-style-guide)
* [sg-typography](https://github.com/sendgrid/design-primitives/tree/master/src/sg-typography)

## Current Usage
This package is currently only being used for [SendGrid.design](https://sendgrid.design/).

### Installation
```sh
npm install @sendgrid/design-primitives --save-dev
```

## Usage

### Sass:

```scss
@import '~design-primitives/tokens/sg-styleguide/scss/base.scss';

.my-selector {
  color: $color-slate-20;
}
```

### CSS:

```css
@import '~design-primitives/tokens/sg-styleguide/css/base.css';

.my-selector {
  color: var(--color-slate-20);
}
```

### JavaScript (ES6):

```js
// Individual tokens
import { colfax } from '~design-primitives/tokens/sg-styleguide/es6/base.es6';

console.log(colfax);

// Token category
import { colors } from '~design-primitives/tokens/sg-styleguide/es6/base.es6';

console.log(colors.colorCodePurple);

// All tokens
import * as tokens from '~design-primitives/tokens/sg-styleguide/es6/base.es6';
```

### JavaScript (CommonJS):

```js
// Individual tokens
import { colfax } from '~design-primitives/tokens/sg-styleguide/common/base.common';

console.log(colfax);

// Token category
import { colors } from '~design-primitives/tokens/sg-styleguide/common/base.common';

console.log(colors.colorCodePurple);

// All tokens
import * as tokens from '~design-primitives/tokens/sg-styleguide/common/base.common';
```
