
const testJs = (): string => {
    return "Hi from js!"
}

export {
  testJs
}
export {
  wasm_hello, alert_fn
} from "../wasm/index"