//커스텀 에러 처리
import React from "react";

interface Props {
  statusCode: Number;
}

export default class Error extends React.Component<Props> {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : jsonPageRes
      ? jsonPageRes.status
      : null;
    return { statusCode };
  }

  render() {
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h2>
            {this.props.statusCode
              ? `An error ${this.props.statusCode} occurred on server`
              : "An error occurred on client"}
          </h2>
          <a href="/">Go To Homepage</a>
        </div>
      </div>
    );
  }
}
