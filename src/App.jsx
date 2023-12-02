import "./App.css";
import Form from "./components/Form.jsx";
import OtherSocialSignUp from "./components/OtherSocialSignUp.jsx";

function App() {
  return (
<>  
      <div className="app">
        <div className="body-form">
        <p>Tem uma conta? <a href="#">Entrar</a></p>
          <h1>Criar conta</h1>
          <Form />
          <OtherSocialSignUp />
        </div>
      </div>

</>
  );
}

export default App;
