// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "typescript-eslint/semi": ["error"],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "noname",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "noname",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/prefer-standalone": ["error"],
      "unused-imports/no-unused-imports": ["error"],
      "unused-imports/no-unused-vars": ["error"],
    }
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/prefer-self-closing-tags": ["error"],
      "@angular-eslint/template/prefer-ngsrc": ["warn"],
      "@angular-eslint/template/prefer-control-flow": ["error"],
    },
  }
);
