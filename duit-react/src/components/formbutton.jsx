import "../sass/formbutton.sass";

function FormButton(props) {
    return (
        <button
            className={`formbutton ${props.iconButton ? props.iconButton : ""}`}
            onClick={props.onClickHandler}
        >
            {props.name}
        </button>
    );
}

export default FormButton;
