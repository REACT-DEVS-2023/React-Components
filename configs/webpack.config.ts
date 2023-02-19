import path from "path";
import fs from "fs";

module.exports = () => {
  let entry = {};
  const files = fs.readdirSync(path.join(process.cwd(), "/src/components"));
  files.forEach((file: any) => {
    entry = {
      ...entry,
      [file]: path.join(process.cwd(), `/src/components/${file}/${file}.tsx`),
    };
  });

  return {
    mode: "production",
    entry,
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
  };
};
