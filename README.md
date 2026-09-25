## Rust/wasm/react (vite)

### Rust:
`cargo new --lib lib-name`, write some functions then edit the Cargo.toml file to have fields: <par>
<ul>
[lib]<br>
crate-type: ["cdylib"] <br>
[dependencies]<br>
wasm-bindgen = "0.2"
</ul>


### wasm-pack:
Run `wasm-pack build --target web` <br>
This compiles the code to webassembly, generates js files and a pkg directory. <br>

### vite:
Run: `wasm-pack build --out-dir packages/library/wasm --out-name index`, <br>
add package.json files to library, app and root then run `pnpm install`. <br>

Create vite.config.ts file in library + app ( had to run `pnpm -i --save-dev @types/node` and `pnpm approve-builds` to get `path` import working).