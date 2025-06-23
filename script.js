const inputs = document.querySelectorAll(".code");

// Auto focus first input
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].value = "";
          inputs[index - 1].focus();
        }
      } else {
        input.value = "";
      }
    }
  });

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, '').slice(0, 6);
    pasteData.split('').forEach((char, i) => {
      if (inputs[i]) {
        inputs[i].value = char;
      }
    });
    if (inputs[pasteData.length - 1]) {
      inputs[pasteData.length - 1].focus();
    }
  });
});
