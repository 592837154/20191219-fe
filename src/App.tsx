import React from 'react';
import logo from './logo.svg';
import { message } from 'antd';
import './App.css';

const App: React.FC = () => {
  message.success('朱凯fe');
  message.success('create-react-app + typescript + antd');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          前端页面
        </p>
      </header>
    </div>
  );
}

export default App;
