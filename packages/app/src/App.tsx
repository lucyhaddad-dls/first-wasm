import { Stack } from "@mui/material";
import { testJs, wasm_hello, alert_fn } from "@workspace/library";

function App() {

    const jsResult:string = testJs();
    const wasmResult:string = wasm_hello()

    return (
        <Stack>
            Hi this is a test web app for using wasm!
        <Stack>
            Test Js: {jsResult}
        </Stack>
        <Stack>
            Test wasm: {wasmResult}
        </Stack>
        <Stack>
            {alert_fn()}
        </Stack>
        </Stack>

    );
}

export default App