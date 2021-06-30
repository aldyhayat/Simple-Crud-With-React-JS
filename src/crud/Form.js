import React from "react";
import { Form, Button } from "react-bootstrap";
export const FormInput = ({ nama, umur, handleChange, handleSubmit, id }) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nama">
          <Form.Label>Nama :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan Nama"
            name="nama"
            value={nama}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="umur">
          <Form.Label>Umur :</Form.Label>
          <Form.Control
            type="number"
            placeholder="Masukan Umur"
            name="umur"
            value={umur}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Form;
