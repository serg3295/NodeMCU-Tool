import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

export default [
  js.configs.recommended,
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

      "@stylistic/indent": ["error", 4],
      "@stylistic/no-extra-semi": ["error"],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/quotes": ["error", "single", { avoidEscape: true }],
      "@stylistic/arrow-parens": ["warn", "as-needed"], // This rule enforces parentheses around arrow function parameters regardless of arity.
      "@stylistic/brace-style": ["error", "1tbs"], // This rule enforces consistent brace style for blocks.
      "@stylistic/operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before" } }],
      "@stylistic/indent-binary-ops": "off",

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
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
    },
  },

  {
    files: ["bin/**/*.js", "lib/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
];
