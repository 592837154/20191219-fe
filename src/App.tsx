import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { message, Button } from 'antd';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState('');
  const getData = () => {
    console.log(fetch);
    setData('')
    fetch(
      '/first'
    )
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
      }).catch((err) => {
        console.log(err);
      })
  }
  const postData = () => {
    setData('');
    fetch('/first', {
      method: 'POST',
      body: 'a=post请求!&b=asd',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(((res) => {
      console.log(res);
      setData(res.a);
    })).catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    if (data.length) {
      message.success(data);
    }
  }, [data])
  useEffect(() => {
    message.success('create-react-app + typescript + antd');
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          前端页面
        </p>
        <div className="buttons">
          <Button onClick={getData}>get</Button>
          <Button onClick={postData}>post</Button>
        </div>
      </header>
    </div>
  );
}
export default App;
