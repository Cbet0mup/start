module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
        createDefaultProgram: true,
      },
      extends: ["plugin:@angular-eslint/recommended"],
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", { "code": 6000 }]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    }
  ]
}
