import React from 'react';
import { useDispatch } from 'react-redux'
import Header from './Components/Header/Header';
import { autoLogin } from './store/login';
import './App.css';
import Content from './Components/Content/Content';

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  )

}

export default App;
