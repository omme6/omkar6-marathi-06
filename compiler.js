function compileToJS(code) {
    // मराठी keywords -> JavaScript मध्ये बदल
    code = code.replace(/छापा\s+(.+);/g, 'console.log($1);');
    return code;
}

function runMarathiCode() {
    let code = document.getElementById("editor").value;
    let jsCode = compileToJS(code);
    try {
        eval(jsCode);
    } catch (err) {
        console.error("Error:", err);
        alert("कोडमध्ये त्रुटी आहे: " + err.message);
    }
}
