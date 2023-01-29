import path from "path";
module.exports = (options) => ({
  mode: "production",
  entry: {
    // TODO: find a way to add every component automatically
    Button: "./src/components/Button/Button.tsx",
    CheckBox: "./src/components/Checkbox/Checkbox.tsx",
    InputHelper: "./src/components/InputHelper/InputHelper.tsx",
  },

  output: {
    path: path.resolve(__dirname, "reko"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
});
