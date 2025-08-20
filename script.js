function runCode() {
  let input = document.getElementById("code").value;
  let jsCode = marathiToJs(input);

  try {
    let result = eval(jsCode);
    document.getElementById("output").textContent = result !== undefined ? result : "✅ यशस्वी चाललं!";
  } catch (err) {
    document.getElementById("output").textContent = "❌ त्रुटी: " + err.message;
  }
}
function runCode() {
    let code = document.getElementById("code").value;
    let jsCode = marathiToJS(code);

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // clear old output

    try {
        // console.log capture करतो
        let oldLog = console.log;
        console.log = function(msg) {
            outputDiv.innerHTML += msg + "<br>";
            oldLog.apply(console, arguments);
        }

        eval(jsCode); // JS code run

        console.log = oldLog; // restore
    } catch (err) {
        outputDiv.innerHTML = "त्रुटी: " + err.message;
    }
}
function runCode() {
    let code = document.getElementById("code").value;
    let jsCode = marathiToJS(code);

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // clear previous output

    try {
        // console.log override फक्त एकदाच
        const oldLog = console.log;
        console.log = function(msg) {
            outputDiv.innerHTML += msg + "<br>";
        }

        eval(jsCode);

        console.log = oldLog; // restore native console.log
    } catch (err) {
        outputDiv.innerHTML = "त्रुटी: " + err.message;
    }
}
