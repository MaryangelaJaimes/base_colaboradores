import "./Formulario.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ colaboradores, setColaboradores, setAlert }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const validate = (e) => {
    e.preventDefault();
    const colaboradorId = { ...nuevoColaborador, id: Date.now() };
    setColaboradores([...colaboradores, colaboradorId]);

    setNuevoColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });

    if (
      colaboradorId.nombre === "" ||
      colaboradorId.correo === "" ||
      colaboradorId.edad === "" ||
      colaboradorId.cargo === "" ||
      colaboradorId.telefono === ""
    ) {
      setAlert({
        message: "Por favor, llenar todos los campos",
        color: "danger",
      });
    } else {
      setAlert({ message: "Colaborador agregado", color: "success" });
    }
  };

  const addNuevoColaborador = (e) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h4 className="sub-titulo  d-flex justify-content-center">
        Agregar colaborador
      </h4>
      <Form onSubmit={validate}>
        <Form.Group className="types mb-1" controlId="formBasicNombre">
          <Form.Label className="text">Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del colaborador"
            name="nombre"
            onChange={addNuevoColaborador}
            value={nuevoColaborador.nombre}
          />
        </Form.Group>
        <Form.Group className="types  mb-3" controlId="formBasicEmail">
          <Form.Label className="text">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email del colaborador"
            name="correo"
            onChange={addNuevoColaborador}
            value={nuevoColaborador.correo}
          />
        </Form.Group>
        <Form.Group className="types  mb-3" controlId="formBasicEdad">
          <Form.Label className="text">Edad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Edad del colaborador"
            name="edad"
            onChange={addNuevoColaborador}
            value={nuevoColaborador.edad}
          />
        </Form.Group>
        <Form.Group className="types  mb-3" controlId="formBasicCargo">
          <Form.Label className="text">Cargo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cargo del colaborador"
            name="cargo"
            onChange={addNuevoColaborador}
            value={nuevoColaborador.cargo}
          />
        </Form.Group>
        <Form.Group className="types  mb-3" controlId="formBasicTelefono">
          <Form.Label className="text">Numero de contacto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su Numero"
            name="telefono"
            onChange={addNuevoColaborador}
            value={nuevoColaborador.telefono}
          />
        </Form.Group>
        <Button
          className="button"
          variant="outline-dark"
          size="md"
          type="submit"
        >
          Agregar colaborador{" "}
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
