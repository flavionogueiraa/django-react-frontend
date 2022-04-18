import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component {
  state = {
    lists: null,
    loading: true,
  };

  async componentDidMount() {
    const url = "http://localhost:8000/core/list/";
    const response = await fetch(url);
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
