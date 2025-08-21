function runCode() {
    let code = document.getElementById("editor").value;
    let result = marathiCompiler(code);
    document.getElementById("output").textContent = result;
}
unction runCode() {
    let code = document.getElementById("code").value;

    // compiler.js मधून मराठी -> JavaScript मध्ये रूपांतर
    let jsCode = compileToJS(code);

    try {
        let result = eval(jsCode);
        document.getElementById("output").innerText = result;
    } catch (err) {
        document.getElementById("output").innerText = "Error: " + err;
    }
}
