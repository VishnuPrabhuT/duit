import "../sass/formfield.sass";

function FormField(props) {
    return (
        <div className={`formfield ${props.size ? props.size : ""}`}>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                id={props.name}
                type={props.type}
                onChange={(e) => props.onValueChange(e.target.value)}
            />
        </div>
    );
}

export default FormField;
