module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!(@react-spring)\/).*/, // Transpile @react-spring
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/plugin-proposal-optional-chaining"
              ]
            }
          }
        }
      ]
    }
  };
  