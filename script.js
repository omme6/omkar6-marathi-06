function runCode() {
    let code = document.getElementById("editor").value;
    let result = marathiCompiler(code);
    document.getElementById("output").textContent = result;
}
