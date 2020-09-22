
## babel-preset-env

Babel 的官网上在9月宣布 ES2015 / ES2016/ ES2017 等等 ES20xx 时代的 presets 通通被废弃（deprecated），取而代之的是 babel-preset-env，并且承诺它将成为“未来不会过时的（future-proof）”解决方案。

> 在过去，Babel 将 babel-preset-es2015 放在 babel/babel 的主仓库中进行维护，而 babel-preset-env 则独立为一级项目，这从某种程度上也显示出 Babel 官方对这款 preset 的重视程度和更长远的规划。

接下来将你的 .babelrc 文件中“es2015”修改“env”：

```js
{
  "presets": [ "env" ],
  ...
}
```