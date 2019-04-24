import React, { Component, createContext } from "react";
import axios from "axios";

const Context = createContext({}); // Context 를 만듭니다.
const { Provider, Consumer: WriteConsumer } = Context;

interface State {
  title: string;
  contents: string;
  hash: Array<string>;
}

class WriteProvider extends Component<{}, State> {
  state: State = {
    title: "",
    contents: "",
    hash: []
  };

  actions = {
    setTitle: title => {
      this.setState({ title });
    },
    setContents: contents => {
      this.setState({ contents });
    },
    setHash: hash => {
      this.setState({ hash });
    },
    onSubmitPost: () => {
      if (this.state.title === "" || this.state.contents === "") {
        alert("title 혹은 contents를 작성해주세요");
        return false;
      }

      const hash = this.state.hash.join(",");

      //post 등록
      axios
        .post("https://mad-server.herokuapp.com/api/post", {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          title: this.state.title,
          contents: this.state.contents,
          writer: localStorage.getItem("loginId"),
          hash: hash
        })
        .then(response => {
          console.log("WriteProvider", response);
        });
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

// 내보내줍니다.
export { WriteProvider, WriteConsumer };
