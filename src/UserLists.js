import React from "react";
import ListComponent from "./ListComponent";
import LoginComponent from "./LoginComponent";

export default class UserLists extends React.Component {
  state = {
    lists: [],
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

    this.setState({
      lists: data,
      loading: false,
    });
  }

  render() {
    const ListsAPI = this.state.lists;
    const token = "";

    if (token === "") {
      return <LoginComponent />;
    } else {
      return (
        <div>
          {/* <ListComponent listName="Minha lista" /> */}

          {ListsAPI.map((list) => (
            <ListComponent
              key={list.id}
              listName={list.name}
              items={list.listitem_set}
            />
          ))}
        </div>
      );
    }
  }
}
