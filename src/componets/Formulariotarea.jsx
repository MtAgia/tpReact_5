import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
const Formulariotarea = () => {
  let recuperarTareas = JSON.parse(localStorage.getItem("listaTarea")) || []
  const [tarea, setTarea] = useState("");
  const [arrayTarea, setArrayTarea] = useState(recuperarTareas)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setArrayTarea([...arrayTarea, tarea]);
    e.target.reset()
  }
  useEffect(()=>{
    localStorage.setItem("listaTarea", JSON.stringify(arrayTarea));
  },[arrayTarea])
  
  const borrarTarea = (nombreTarea) =>{
    let copiaTareas = arrayTarea.filter((itemTarea)=>itemTarea !== nombreTarea);
    setArrayTarea(copiaTareas)
  }
    return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Ingrese Tarea</Form.Label>
        <Form.Group className="mb-3 d-flex" controlId="tareas">
          <Form.Control type="text" placeholder="Ej: hacer la comida" onChange={(e) => setTarea(e.target.value)} />
          <Button variant="primary" type="submit">
            +
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas borrarTarea= {borrarTarea} arrayTareas = {arrayTarea}></ListaTareas>
    </>
  );
};

export default Formulariotarea;
