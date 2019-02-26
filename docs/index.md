# SendGrid Design Primitives Documentation

The design primitives serves as global design primitives/tokens to be used across SendGrid's products, stored as JSON data.
The JSON is meant to be used as a source of truth for basic styles used to compose components within the various products.
The JSON data can be consumed in a number of different methods. Tokens are generated using [Theo](https://github.com/salesforce-ux/theo).

### Sections
* [Project Structure](#project-structure)
* [Adding New Primitives](#adding-new-primitives)
* [Generating Tokens](#generating-tokens)
* [Depoying](#deploying)
* [Using Tokens](#using-tokens)
  * [CSS](#css)
  * [SCSS](#scss)
  * [JavaScript (ES6)](#javascript-es6)
  * [JavaScript (CommonJS)](#javascript-commonjs)

## Project Structure

### Packages

The project is broken down into three base packages and additional product packages. The three base packages are:

* sg-colors
* sg-spacing
* sg-typography

Colors, spacing, and typography are versioned separately of the main package, and can also be used individually as stand alone JSON.

Each of the base packages contain just a single JSON file containing the primitives. The JSON data contained in an `aliases` JSON object.

Along with the base packages, additional product packages are also avaliable. These are versioned as part of the main primitive package. Currently the additional packages include:

* sg-style-guide
* sg-dot-design

These two packages use the base packages to build primitives for their respective web products.

### Formatters

The formatters reformat the JSON data when the tokens are being generated. They control the order as well as any custom formatting.

### Tokens

The tokens are generated from the JSON data. Tokens are created in the following formats:

* CSS Custom Properties
* SCSS Variables
* ES6 Modules
* JS Modules

Tokens are only created for sg-style-guide and sg-dot-design packages. Fresh token file are generated at each deploy.

## Adding New Primitives

Adding a new primitive is a fairly simple process. The basic flow:

* Add new primitive to respective package
* Generate new tokens.
* Deploy

The base packages are set up in a simple JSON object format. New primitives shoudl follow the following format

```JSON
"sg-blue": "#1a82e2"
```

The product packages are a littl more complex. These include a `base.json` file which imports additional JSON files. These additional JSON files contain the primitive that packages as well as import the base primitive packages.

**Example:**

```JSON
{
  "imports": [
    "../../sg-colors/colors.json",
    "../../sg-typography/typography.json"
  ],
  "aliases": {
    "base-font-size": "20px",
    "base-line-height": "35px"
  }
}
```

Primitives are defined a little differenly in the product packages. Each primitive fit inside a primitive category. Each primitive can also be given a `type` to account for the token generation.

**Example:**

```JSON
{
  "imports": [
    "./aliases.json"
  ],
  "global": {
    "type": "color/hex",
    "category": "colors"
  },
  "props": {
    "color-slate": {
      "value": "{!slate}"
    },
    "color-slate-80": {
      "value": "{!slate-80}"
    }
  }
}
```

## Generating Tokens

Tokens are generated via the default Gulp task: `gulp`

Tokens are only generated for the sg-dot-design and sg-style-guide packages. They are generated in the following formats:

* CSS Custom Properties
* SCSS Variables
* ES6 Modules
* JS Modules

Tokens can also be generated using the following Node script: `yarn tokens`.

Fresh tokens are also generated on each deploy.

## Deploying

Deploying and versioning is handled through NPM and Lerna with the following Node script: `yarn deploy`.

The following packages will deployed using that script:

* @sendgrid/design-primitives
* @sendgrid/sg-colors
* @sendgrid/sg-spacing
* @sendgrid/sg-typography

## Using Tokens

### Sass:

```scss
@import '@sendgrid/design-primitives/tokens/sg-styleguide/scss/base.scss';

.my-selector {
  color: $color-slate-20;
}
```

### CSS:

```css
@import '@sendgrid/design-primitives/tokens/sg-styleguide/css/base.css';

.my-selector {
  color: var(--color-slate-20);
}
```

### JavaScript (ES6):

```js
// Individual tokens
import { colfax } from '@sendgrid/design-primitives/tokens/sg-styleguide/es6/base.es6';

console.log(colfax);

// Token category
import { colors } from '@sendgrid/design-primitives/tokens/sg-styleguide/es6/base.es6';

console.log(colors.colorCodePurple);

// All tokens
import * as tokens from '@sendgrid/design-primitives/tokens/sg-styleguide/es6/base.es6';
```

### JavaScript (CommonJS):

```js
// Individual tokens
import { colfax } from '@sendgrid/design-primitives/tokens/sg-styleguide/common/base.common';

console.log(colfax);

// Token category
import { colors } from '@sendgrid/design-primitives/tokens/sg-styleguide/common/base.common';

console.log(colors.colorCodePurple);

// All tokens
import * as tokens from '@sendgrid/design-primitives/tokens/sg-styleguide/common/base.common';
```
