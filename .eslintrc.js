{
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:next/core-web-vitals"
  ],
  plugins: ["formatjs"],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/no-inferrable-types": [2, { ignoreParameters: true }],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "object-shorthand": "error",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
