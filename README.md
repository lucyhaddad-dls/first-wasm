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
This compiles the code to webassembly, generates js files and a pkg directory.


### vite:
