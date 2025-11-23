class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.formContainer = document.getElementById("formContainer");
    }

    renderForm() {
        let html = "<form id='dynamicForm'>";
        this.fields.forEach(f => {
            html += `<label>${f.label}</label>
                     <input type="${f.type}" id="${f.label.toLowerCase()}" /> <br>`;
        });
        html += "<button type='submit'>Submit</button></form>";
        this.formContainer.innerHTML = html;

        document.getElementById("dynamicForm").addEventListener("submit", e => {
            e.preventDefault();
            document.getElementById("output").innerHTML = JSON.stringify(this.getFormData());
        });
    }

    getFormData() {
        let data = {};
        this.fields.forEach(f => {
            const key = f.label.toLowerCase();
            data[key] = document.getElementById(key).value;
        });
        return data;
    }
}

const fields = [
    {type: "text", label: "Username"},
    {type: "email", label: "Email"},
    {type: "password", label: "Password"}
];

const form = new FormBuilder(fields);
form.renderForm();