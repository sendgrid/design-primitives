# SendGrid Design Primitives

Global design primitives/tokens to be used across SendGrid's products, stored as json data.

* Colors
* Sizes/Scale
* Typography

## Current Usage
This package is currently only being used for [SendGrid.design](https://sendgrid.design/).

### Installation
```sh
npm install sendgrid-tokens --save-dev
```

## Usage

### Sass:

```scss
@import '~sendgrid-tokens/tokens/styleguide/scss/base.scss';

.my-selector {
  color: $sg-color-slate-20;
}
```

### CSS:

```css
@import '~sendgrid-tokens/tokens/styleguide/css/base.css';

.my-selector {
  color: var(--sg-color-slate-20);
}
```

### JavaScript (ES6):

```js
// Individual tokens
import { colfax } from '~sendgrid-tokens/tokens/styleguide/es6/base.es6';

console.log(colfax);

// Token category
import { colors } from '~sendgrid-tokens/tokens/styleguide/es6/base.es6';

console.log(colors.colorCodePurple);

// All tokens
import * as tokens from '~sendgrid-tokens/tokens/styleguide/es6/base.es6';
```

### JavaScript (CommonJS):

```js
// Individual tokens
import { colfax } from '~sendgrid-tokens/tokens/styleguide/common/base.common';

console.log(colfax);

// Token category
import { colors } from '~sendgrid-tokens/tokens/styleguide/common/base.common';

console.log(colors.colorCodePurple);

// All tokens
import * as tokens from '~sendgrid-tokens/tokens/styleguide/common/base.common';
```
