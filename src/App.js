import { useState } from "react";
import "./index.css";
import Button from "./components/Button";
import Formulary from "./components/Input";

function App() {
  const validationEmpty = () => {
    setName("");
    setPassword("");
    if (name === "") {
      alert("Debes ingresar tu nombre de usuario");
    }
  };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dataValidation = (e) => {
    e.preventDefault();
    return;
  };
  return (
    <>
      <div className="img-box">
        <div className="login-box">
          <h1 className="title">TRABAJO DOS REACT</h1>
          <form className="form" onSubmit={dataValidation}>
            <Formulary
              setName={setName}
              setPassword={setPassword}
              name={name}
              password={password}
            />
            <div>
              {password === "252525" && (
                <Button validationEmpty={validationEmpty} />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
