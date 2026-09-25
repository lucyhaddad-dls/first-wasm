use wasm_bindgen::prelude::*;

// extern says use external function (alert from js!)
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn sayHello(name: &str) {
    alert(&format!("Hi {} !!", name));
}

#[wasm_bindgen]
pub fn sayHelloAgain() -> String {
    "Hi from wasm!".to_string()
}