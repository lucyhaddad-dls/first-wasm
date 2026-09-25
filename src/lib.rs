use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn wasm_hello() -> String {
    "Hello from wasm!".to_string()
}