import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/styles.scss";
import 'normalize.css/normalize.css';


class Title extends React.Component {
    render() {
      return <div className="title">Haha</div>;
    }
  }

ReactDOM.render(
    <Title></Title>,
    document.getElementById('root')
);

