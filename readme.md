npm init -y
type:module
npm install --save-dev jest

<!-- setup babel karena jest tidak mendukung ECMAScript Module -->

npm install --save-dev babel-jest

```json
// package.json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  }
}
```

npm install @babel/preset-env --save-dev

```json
// babel.config.json
{
  "presets": ["@babel/preset-env"]
}
```
