use wasm_bindgen::prelude::*;

// extern says use external function (alert from js!)
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn say_hello(name: &str) {
    alert(&format!("Hi {} !!", name));
}

#[wasm_bindgen]
pub fn say_hello_again() -> String {
    "Hi from wasm!".to_string()
}