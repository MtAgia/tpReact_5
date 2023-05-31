import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemsDeTareas from "./ItemsDeTareas";
const ListaTareas = (props) => {
  return (
    <>
      <ListGroup>
        {
          props.arrayTareas.map((tarea, i) => <ItemsDeTareas borrarTarea ={props.borrarTarea} tarea ={tarea} key={i}></ItemsDeTareas>)
        }
      </ListGroup>
    </>
  );
};

export default ListaTareas;
