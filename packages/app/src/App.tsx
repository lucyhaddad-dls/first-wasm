import { Stack } from "@mui/material";
import { testJs, wasm_hello} from "@workspace/library";

function App() {

    const jsResult:string = testJs();
    const wasmResult:string = wasm_hello()
    // alert_fn()

    return (
        <Stack spacing={2}>
            Hi this is a test web app for using wasm! <br>
            </br> 
        
        <Stack>
            Test Js: {jsResult}
        </Stack>
        <Stack>
            Test wasm: {wasmResult}
        </Stack>
        </Stack>

    );
}

export default App