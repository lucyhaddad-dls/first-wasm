import { wasm_hello } from "../wasm/index"

const testJs = (): string => {
    return "Hi from js!"
}

export {
  testJs, wasm_hello
}