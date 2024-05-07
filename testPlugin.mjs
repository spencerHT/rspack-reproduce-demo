import HtmlWebpackPlugin from 'html-webpack-plugin';

const PLUGIN_NAME = 'TEST';

export class TestPlugin {
  options = {}

  constructor(options) {
    this.options = options;
  }


  apply(compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
      HtmlWebpackPlugin
        .getHooks(compilation)
        .alterAssetTags.tapAsync(PLUGIN_NAME, (data, cb) => {

          // 只考虑一个 chunk 的情况
          const currentEntry = data.plugin.options.entryName || 'main';

          const entryChunks = compilation.entrypoints.get(currentEntry).chunks;
          entryChunks.forEach((chunk) => {
            console.log(chunk, 'chunk');
          })
            
          cb(null, data);
        });
    });
  }
}
