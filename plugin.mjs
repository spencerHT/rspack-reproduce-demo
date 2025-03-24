import path from 'node:path';
import webpack from 'webpack';
const PLUGIN_NAME = "TestPlugin";
export class TestPlugin {
    apply(compiler) {
      this._isProdBuild = compiler.options.mode === "production";
      compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
        compilation.hooks.processAssets.tap({
          name: PLUGIN_NAME,
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
        }, () => this.emitKeys(compilation));
      });
        compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
          compilation.hooks.processAssets.tap({
            name: PLUGIN_NAME,
            stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS
          }, () => this.getKeys(compilation));
        });
    }
    emitKeys(compilation) {
        compilation.emitAsset(path.join(this._dist, `test.json`), new compilation.compiler.webpack.sources.RawSource(""), {
            keys: ['1', '2', '3']
        });
    }
    getKeys(compilation) {
        const asset = compilation.getAsset(path.join(this._dist, `test.json`));
        const additionalKeys = asset?.info.keys ?? [];
        console.log(`additionalKeys: `, additionalKeys);
    }
    constructor(opts) {
      this._isProdBuild = false;
      this._dist = 'dist';
    }
  }