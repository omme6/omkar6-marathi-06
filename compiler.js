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
    // "लिहा(...)" => console.log(...)
    code = code.replace(/लिहा\((.*)\)/g, "console.log($1)");
    // "सुरू_करा" -> function सुरू_करा()
    code = code.replace(/सुरू_करा/g, "function सुरू_करा()");
    code = code.replace(/समाप्त/g, "}");
    return code;
}
function marathiToJS(code) {
    // "लिहा(...)" → console.log(...)
    code = code.replace(/लिहा\((.*)\)/g, "console.log($1)");
    // "सुरू_करा" → function सुरू_करा()
    code = code.replace(/सुरू_करा/g, "function सुरू_करा()");
    code = code.replace(/समाप्त/g, "}");
    return code;
}
