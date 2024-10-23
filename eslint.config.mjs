// @ts-lint
import js from "@eslint/js";
import nodePlugin from "eslint-plugin-n";
import pluginPromise from "eslint-plugin-promise";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

export default [
  js.configs.recommended,
  nodePlugin.configs["flat/recommended-script"],
  pluginPromise.configs["flat/recommended"],
  stylistic.configs["recommended-flat"],

  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "@stylistic": stylistic,
    },
  },

  {
    rules: {
      ...js.configs.recommended.rules,

      "n/exports-style": ["error", "module.exports"],
      "n/no-sync": "error",
      "n/hashbang": ["error", { ignoreUnpublished: true }],

      "promise/always-return": ["error", { ignoreLastCallback: true }],

      "@stylistic/indent": ["error", 4],
      "@stylistic/no-extra-semi": ["error"],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
      "@stylistic/arrow-parens": ["warn", "as-needed"], // This rule enforces parentheses around arrow function parameters regardless of arity.
      "@stylistic/brace-style": ["error", "1tbs"], // This rule enforces consistent brace style for blocks.
      // similar to prettier's --experimental-ternaries
      "@stylistic/operator-linebreak": ["error", "before", { overrides: { "?": "after" } }],

      "no-console": "warn",
      "no-useless-return": "warn",
      "no-return-assign": "error",
      "no-implicit-coercion": "warn",
      "yoda": ["error", "never"],

      "no-shadow": "error",
      "no-undefined": "error",
      "no-use-before-define": "error",
      // "no-useless-assignment": "error",
    },
  },

  {
    files: ["*.mjs"],
    languageOptions: {
      sourceType: "module",
    },
    rules: {
      "@stylistic/indent": ["error", 2],
    },
  },

  {
    files: ["bin/**/*.js", "lib/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
];
