import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { message, Button } from 'antd';
import Router from './pages/router';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState('');
  const getData = () => {
    setData('')
    // fetch('http://localhost:2019/api/first').then((aaa)=> {
    //   console.log(aaa);
    // })
    fetch(
      '/api/first'
    )
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        
        setData(data.constent);
      }).catch((err) => {
        console.log(err);
      })
  }
  const postData = () => {
    setData('');
    fetch('/api/first', {
      method: 'POST',
      body: JSON.stringify({
        // 你想要发送到后台的数据，以对象形式发送
        a: 'post成功',
    }),
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
        <Router/>
      </header>
    </div>
  );
}
export default App;
