import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./componets/footer";
import Formulariotarea from "./componets/Formulariotarea";

function App() {
  return (
    <>
      <Container className="main">
        <h1 className="text-center py-4">Lista De Tareas!</h1>
        <h3>Con LocalStorage.</h3>
        <hr />
        <Formulariotarea></Formulariotarea>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
