module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["tsconfig.json"],
    "createDefaultProgram": true,
    "tsconfigRootDir": __dirname,
  },
  "ignorePatterns": ["dist/", "node_modules/"],
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "import/no-extraneous-dependencies": "off",
    "consistent-return": "off",
    "react/require-default-props": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react-hooks/exhaustive-deps": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/prop-types": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/jsx-no-constructed-context-values": "off",
    "@typescript-eslint/naming-convention": "off",
    "arrow-body-style": "off",
    "@typescript-eslint/ban-types": "off"
  }
}