let addElement = () => {
    let inputType = (prompt("enter the element type for input")).toLowerCase();
    let label = prompt("enter the label name")
    let num = prompt("number for add element")
    let form1 = document.querySelector(".form");
    let validInputTypes = ["button", "checkbox", "color", "date", "email", "file", "month", "number", "password", "radio", "range", "search", "submit", "tel", "text", "time", "url", "week"]
    let checkInputType = (validInputTypes.includes((inputType))) ? true : false;
    if (checkInputType && num && label) {
        if (inputType == "checkbox" || inputType == "radio") {
            let createLabel = document.createElement("label")
            createLabel.textContent = label;
            form1.append(createLabel);
            let boxValues = [];
            if (num => 1) {
                for (let i = 1; i <= num; i++) {
                    let val = prompt(`Enter the value for element ${i}`);
                    boxValues.push(val);
                    let createInput = document.createElement("input")
                    createInput.type = inputType;
                    createInput.value = boxValues[i - 1];
                    createInput.id = createLabel;
                    createInput.className = "form-check-input"
                    let span = document.createElement("span");
                    span.textContent = boxValues[i - 1];
                    form1.append(createInput, span);
                }
            }
            let br = document.createElement("br")
            form1.append(br);
        }
        else if (inputType == "submit" || inputType == "button") {
            let createInput = document.createElement("input")
            createInput.type = inputType;
            createInput.value = label;
            createInput.className = "btn btn-danger"
            form1.append(createInput);
            let br = document.createElement("br")
            form1.append(br);
        }
        else {
            if (num => 1) {
                for (let i = 1; i <= num; i++) {
                    let createLabel = document.createElement("label")
                    createLabel.textContent = label;
                    let createInput = document.createElement("input")
                    createInput.type = inputType;
                    if (inputType == "range") {
                        createInput.min = 0;
                        createInput.max = 60;
                    }
                    else {

                        createInput.className = "form-control"
                    }
                    form1.append(createLabel, createInput);
                }
            }
        }
    }
    else {
        alert("Please enter the valid input, label and number")
    }
}

