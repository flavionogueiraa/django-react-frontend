import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component {
  state = {
    lists: null,
    loading: true,
  };

  async componentDidMount() {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Token 955b30a7bd5ed85a7c067e33c5ed12e99d24e1f5",
      },
    };

    const url = "http://localhost:8000/core/list/";
    const response = await fetch(url, config);
    const data = await response.json();

    console.log(data);
    this.setState({
      list: data,
      loading: false,
    });
  }

  render() {
    return (
      <div>
        <ListComponent listName="Minha lista" />
        <ListComponent listName="Minha lista 2" />
      </div>
    );
  }
}
