// Marathi Compiler core - Omkar6
function marathiToJs(code) {
  // साधं उदाहरण: मराठी शब्द → JavaScript मध्ये बदल
  return code
    .replace(/छापा/g, "console.log")   // छापा = console.log
    .replace(/जर/g, "if")              // जर = if
    .replace(/नाहीतर/g, "else")        // नाहीतर = else
    .replace(/पर्यंत/g, "while");      // पर्यंत = while
}
// Marathi → JavaScript translator

function marathiToJS(code) {
    // "लिहा(...)" → console.log(...)
    code = code.replace(/लिहा\((.*)\)/g, "console.log($1)");
    // "सुरू_करा" → function सुरू_करा()
    code = code.replace(/सुरू_करा/g, "function सुरू_करा()");
    code = code.replace(/समाप्त/g, "}");
    return code;
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
// Marathi code → JS code मध्ये convert करणारी function
function compileToJS(code) {
    // साधा replace: "छाप" → "console.log"
    code = code.replace(/छाप/g, "console.log");

    // अजून rules इथे add करू शकतोस
    return code;
}
