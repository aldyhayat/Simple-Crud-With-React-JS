import React from "react";
import { Table, Button } from "react-bootstrap";
export const Tabel = ({ datas, editData, hapusData }) => {
  return (
    <Table striped bordered hover className="mb-5">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.nama}</td>
              <td>{data.umur}</td>
              <td>
                <Button variant="primary" onClick={() => editData(data.id)}>
                  Update
                </Button>{" "}
                <Button variant="danger" onClick={() => hapusData(data.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
