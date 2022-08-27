const Button = (props) => {
  return (
    <>
      <p className="validation">Inicio de sesión correcto</p>
      <div className="btn-box">
        <button
          onClick={() => {
            props.validationEmpty();
          }}
        >
          Ingresar
        </button>
      </div>
    </>
  );
};

export default Button;
