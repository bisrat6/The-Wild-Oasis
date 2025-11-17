module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "plugin:import/recommended",
    "plugin:import/react",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react-refresh", "jsx-a11y", "import"],
  rules: {
    // Existing rule
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // Prevent common JS issues
    "no-unused-vars": "warn",
    "no-console": "off", // Change to "warn" if you want stricter
    "no-debugger": "warn",

    // Import organization
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/no-unresolved": "error",

    // React specific
    "react/prop-types": "off", // You can enable if using PropTypes
    "react/no-unknown-property": "warn",
    "react/self-closing-comp": "warn",

    // Hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // JSX formatting
    "react/jsx-no-target-blank": "warn",
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
  },
};
