unction runCode() {
  let code = document.getElementById("codeInput").value;
  let result = marathiCompiler(code);
  document.getElementById("output").innerText = result;
}
