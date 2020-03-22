## 概要

TypeScriptの勉強。ReactのTutorialをTypeScriptで実装する。

React + TypeScirpt + Webpackの構成。
CSSはCSS-modulesで管理。

### React

[チュートリアル：React の導入 – React](https://ja.reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial)

[reactjs/react-tutorial: Code from the React tutorial.](https://github.com/reactjs/react-tutorial)

### TypeScript

[React & Webpack · TypeScript](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

[Introduction - TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/)

### その他

[webpackのcss-loaderでCSS Modulesをやる - Qiita](https://qiita.com/_likr/items/c335dec5221024ad56bc)

## To Run

webpack-dev-serverを使用。8080番ポートを使用。

```
npm run dev
```

`dist/main.js` にコンパイル後のコードが吐き出される ( see `tsconfig.json outDir` .)
