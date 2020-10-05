module.exports = {
  env: {
    browser: true,
    node: false,
    amd: true,
  },
  extends: ["plugin:react/recommended", "plugin:css-modules/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "css-modules"],
};
