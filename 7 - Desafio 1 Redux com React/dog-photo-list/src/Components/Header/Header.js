import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../store/login';
import { StyleHeader, Title, ButtonLogin } from './style';

const Header = () => {

  const { user, token } = useSelector(state => state.login);
  const loading = token.loading || user.loading;
  const dispatch = useDispatch();

  const stateButtonLogin = () => {
    if (loading)
      return 'orange';
    else if (user.data)
      return 'greenyellow';
  }

  return (
    <StyleHeader>
      <Title>Mini Dogs</Title>
      <ButtonLogin
        aria-label='Logout'
        onClick={() => dispatch(userLogout())}
        background={() => stateButtonLogin}
      />
    </StyleHeader>
  )
}

export default Header;