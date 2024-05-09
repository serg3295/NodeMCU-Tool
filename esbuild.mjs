import * as esbuild from "esbuild";

const prod = process.argv[2] === "production";
const options = {
  entryPoints: ["./bin/nodemcu-tool.js"],
  bundle: true,
  format: "cjs",
  minify: prod ? true : false,
  sourcemap: prod ? false : true,
  platform: "node",
  target: "es2022",
  outfile: "./out/nodemcu-tool.js",
  external: ["@serialport/bindings-cpp/prebuilds"],
};

(async () => {
  if (process.argv[2] === "watch") {
    const ctx = await esbuild.context(options);
    await ctx.watch();
    // eslint-disable-next-line no-console
    console.log("ESBuild watching...");
  } else {
    await esbuild.build(options);
  }
})();
