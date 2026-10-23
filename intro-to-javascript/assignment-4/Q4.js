// Q4: Custom Form Builder (Forms + Classes)
class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
    }
    createForm() {
        const form = document.createElement("form");
        form.id = "dynamicForm";
        // Build the form dynamically using innerHTML as required.
        form.innerHTML = this.fields.map((field, index) =>
            `<label for="field-${index}">${field.label}</label>
             <input id="field-${index}" name="${field.name}" type="${field.type}" required>`
        ).join("") + '<button type="submit">Submit</button>';
        this.container.replaceChildren(form);
        form.addEventListener("submit", event => {
            event.preventDefault();
            document.getElementById("output").textContent = JSON.stringify(this.getFormData(), null, 2);
        });
    }
    getFormData() {
        const data = {};
        this.fields.forEach((field, index) => {
            data[field.name] = document.getElementById(`field-${index}`).value.trim();
        });
        return data;
    }
}
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "number", label: "Age", name: "age" }
];
new FormBuilder(fields, document.getElementById("formContainer")).createForm();
