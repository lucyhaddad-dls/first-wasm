use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn wasm_hello() -> String {
    "Hello from wasm!".to_string()
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn alert_fn() {
    alert("hi (alert extern worked)")
}