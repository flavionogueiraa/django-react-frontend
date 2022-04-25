import React from "react";
import UserLists from "./UserLists";

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "flavio", password: "Novadata123" };

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
          this.setState({
            token: data.token,
          });
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

  logout() {
    localStorage.removeItem("token");
    this.setState({ token: null });
  }

  render() {
    const token = localStorage.getItem("token") || null;
    if (token) {
      return (
        <div>
          <UserLists />
          <button className="btn btn-primary btn-block" onClick={() => this.logout()}>Logout</button>
        </div>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <hr/>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name:"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password:"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      );
    }
  }
}
