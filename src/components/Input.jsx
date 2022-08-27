const Formulary = (props) => {
  return (
    <>
      <div className="box">
        <label>Usser</label>
        <input
          value={props.name}
          type="text"
          placeholder="Ingrese Usuario"
          onChange={(e) => props.setName(e.target.value)}
        />
      </div>
      <div className="box">
        <label>Password</label>
        <input
          value={props.password}
          type="password"
          placeholder="Ingrese Contraseña"
          onChange={(e) => props.setPassword(e.target.value)}
        />
      </div>
    </>
  );
};

export default Formulary;
