import "../sass/formbutton.sass";

function FormButton(props) {
    return (
        <button className={`formbutton`} onClick={props.onClickHandler}>
            {props.name}
        </button>
    );
}

export default FormButton;
