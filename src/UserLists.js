import React from "react";
import ListComponent from "./ListComponent";
import LoginComponent from "./LoginComponent";

export default class UserLists extends React.Component {
  state = {
    lists: [],
    loading: true,
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token}`,
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

    return (
      <div>
        <h2>Suas listas</h2>
        <hr/>
        <div className="row">
        {ListsAPI.map((list) => (
          <div className="col-md-6">
            <ListComponent
              key={list.id}
              listName={list.name}
              items={list.listitem_set}
            />
          </div>
        ))}
      </div>
      </div>
    );
  }
}
