import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Helper/Loading/Loading';
import Login from '../Login/Login'
import Photos from '../Photos/Photos'

function Content() {

  const { user, token } = useSelector((state) => state.login);

  if (user.loading || token.loading) return <Loading />;
  if (user.data) return <Photos />;
  else return <Login />;

}

export default Content;