import React from 'react';
import logo from './logo.svg';
import { message, Button } from 'antd';
import './App.css';

const App: React.FC = () => {
  message.success('create-react-app + typescript + antd');
  message.success('你爱老公么?');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          前端页面
          <Button>爱?</Button>
          <Button>更爱?</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
