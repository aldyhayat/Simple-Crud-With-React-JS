import React, { Component } from "react";
import NavbarComponent from "./Navbar";
import Tabel from "./Tabel";
import { FormInput } from "./Form";
import { Container } from "react-bootstrap";
export default class SimpleCrud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      nama: "",
      umur: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        datas: [
          ...this.state.datas,
          {
            id: this.state.datas.length + 1,
            nama: this.state.nama,
            umur: this.state.umur,
          },
        ],
      });
    } else {
      const dataLain = this.state.datas
        .filter((data) => data.id !== this.state.id)
        .map((filterData) => {
          return filterData;
        });

      this.setState({
        datas: [
          ...dataLain,
          {
            id: this.state.datas.length + 1,
            nama: this.state.nama,
            umur: this.state.umur,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      umur: 0,
      id: "",
    });
  };

  editData = (id) => {
    const dataLain = this.state.datas
      .filter((data) => data.id === id)
      .map((filterData) => {
        return filterData;
      });

    this.setState({
      nama: dataLain[0].nama,
      umur: dataLain[0].umur,
      id: dataLain[0].id,
    });
  };

  hapusData = (id) => {
    const dataBaru = this.state.datas
      .filter((data) => data.id !== id)
      .map((filterData) => {
        return filterData;
      });
    this.setState({
      datas: dataBaru,
    });
  };
  render() {
    console.info(this.handleSubmit);
    return (
      <div>
        <Container>
          <NavbarComponent />
          <h1>Tabel</h1>
          <Tabel
            datas={this.state.datas}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <FormInput
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Container>
      </div>
    );
  }
}
