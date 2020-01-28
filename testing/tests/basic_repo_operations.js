const assert = require('assert');
const eoslime = require('./../eoslime').init();

const TOKEN_WASM_PATH = '../../naive_rust_eos_dev_env/example_gc_opt.wasm';
const TOKEN_ABI_PATH =  '../../naive_rust_eos_dev_env/example.abi.json';

describe('A failing test', function () {
    it("The test should fail", async () => {
        assert.equal(true, false, "Didn't pass the test.");
    });
});
