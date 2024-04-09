import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "production",
  devtool: false,
  entry: {
    main: "./src/index",
  },
  plugins: [new HtmlWebpackPlugin(), 
  {
    apply(compiler) {
      compiler.hooks.thisCompilation.tap(
        'PluginA',
        (compilation) => {
          compilation.hooks.processAssets.tap(
            {
              name: 'PluginA',
              stage:
                compiler.webpack.Compilation
                  .PROCESS_ASSETS_STAGE_ADDITIONS,
            },
            function (assets) {
              Object.entries(assets).forEach((asset) => {
                const [filename, source] = asset;
                if (filename.endsWith('.js')) {
                  let content = source.source();
                  content = `${content}\n window.t = 'add test content'`;
                  compilation.updateAsset(
                    filename,
                    new compiler.webpack.sources.RawSource(content)
                  );
                }
              });
            }
          );
        }
      );
    },
  }],
  optimization: {
    minimize:false,
  },
  output: {
  
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: "[name].[contenthash:8].js",
  },
  experiments: {
    css: true,
  },
};

export default config;
