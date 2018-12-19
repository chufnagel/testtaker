module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
  ],
  "plugins": [
    "react",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": "error",
    "no-undef": "warn",
    "no-unused-vars": "warn",
  }
}
