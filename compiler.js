function marathiCompiler(code) {
  let lines = code.split("\n");
  let output = "";

  for (let line of lines) {
    line = line.trim();

    if (line.startsWith("दाखवा")) {
      // Example: दाखवा "Hello"
      let text = line.replace("दाखवा", "").trim();
      output += eval(text) + "\n";
    }
    else if (line.startsWith("जोडा")) {
      // Example: जोडा 5 आणि 10
      let nums = line.match(/\d+/g);
      if (nums && nums.length === 2) {
        output += (parseInt(nums[0]) + parseInt(nums[1])) + "\n";
      }
    }
    else if (line.startsWith("वजा")) {
      // Example: वजा 20 आणि 5
      let nums = line.match(/\d+/g);
      if (nums && nums.length === 2) {
        output += (parseInt(nums[0]) - parseInt(nums[1])) + "\n";
      }
    }
    else if (line.startsWith("गुणाकार")) {
      // Example: गुणाकार 4 आणि 6
      let nums = line.match(/\d+/g);
      if (nums && nums.length === 2) {
        output += (parseInt(nums[0]) * parseInt(nums[1])) + "\n";
      }
    }
    else if (line.startsWith("भागाकार")) {
      // Example: भागाकार 20 आणि 4
      let nums = line.match(/\d+/g);
      if (nums && nums.length === 2) {
        output += (parseInt(nums[0]) / parseInt(nums[1])) + "\n";
      }
    }
    else if (line === "") {
      continue;
    }
    else {
      output += "❌ ओळखलं नाही: " + line + "\n";
    }
  }

  return output;
}
