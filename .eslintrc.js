module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": 0,
    "comma-dangle": ["error", "always-multiline"],
    "no-extra-semi": "off",
    "vue/html-indent": ["error", 2],
  },
}
