// Run बटणावर क्लिक झाले की कोड चालवणे
document.getElementById("runButton").addEventListener("click", runCode);

// runCode ही function
function runCode() {
    // textarea मधून user ने लिहिलेला Marathi code घेणे
    let marathiCode = document.getElementById("editor").value;

    try {
        // Marathi code → JavaScript मध्ये convert करणे (compiler.js मध्ये असलेले function)
        let jsCode = compileToJS(marathiCode);

        // JS code चालवणे
        let output = eval(jsCode);

        // Output दाखवणे
        document.getElementById("output").innerText = output !== undefined ? output : "";
    } catch (error) {
        // Error आल्यास दाखवणे
        document.getElementById("output").innerText = "त्रुटी: " + error.message;
    }
}
