import React from "react";

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleSubmit(event) {
    const url = "http://localhost:8000/api-token-auth/";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.reload();
        } else {
          alert("Credenciais inválidas");
        }
      });

    event.preventDefault();
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
