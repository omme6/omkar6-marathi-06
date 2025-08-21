function compileToJS(code) {
    // साधं उदाहरण: "छाप" → console.log
    code = code.replace(/छाप\s+(.*)/g, "console.log($1)");

    return code;
}

// पुढे इथे बाकी कोड (जसे runCode function इ.) टाक// सोपा Marathi Compiler - Version 1

function marathiCompiler(code) {
    let lines = code.split("\n");
    let output = "";

    for (let line of lines) {
        line = line.trim();

        // "छापा" = console.log
        if (line.startsWith("छापा")) {
            let text = line.replace("छापा", "").trim();
            output += text + "\n";
        }

        // भविष्यात अजून keywords add करू
    }

    return output || "⚠️ काहीही output नाही!";
}
