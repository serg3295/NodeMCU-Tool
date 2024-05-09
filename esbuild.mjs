import * as esbuild from "esbuild"

const prod = process.argv[2] === "production"
const options = {
  entryPoints: ["./bin/nodemcu-tool.js"],
  bundle: true,
  format: "cjs",
  minify: prod ? true : false,
  sourcemap: prod ? false : true,
  platform: "node",
  target: "es2022",
  outfile: "./out/nodemcu-tool.js",
  external: [
    "@serialport/bindings-cpp/prebuilds",
  ],
}

if (process.argv[2] === "watch") {
  let ctx = await esbuild.context(options)
  console.log("watching...")
  ctx.watch
} else {
  await esbuild.build(options)
}
