module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "react",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0,
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "warn",
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }],
    "react/prop-types": "warn",
  }
}
