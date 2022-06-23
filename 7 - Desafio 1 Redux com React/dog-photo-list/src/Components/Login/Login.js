import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/login';
import { Input, Label, Button } from './style';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(login({ username, password }));
      }

    return (
        <form onSubmit={handleSubmit}>
            <Label htmlFor="username">Usuário</Label>
            <Input
                id="username"
                type="text"
                value={username}
                onChange={({ target }) => setUsername(target.value)}>
            </Input>
            <Label htmlFor="password">Senha</Label>
            <Input
                id="password"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}>
            </Input>
            <Button>Enviar</Button>
        </form>
    )
}

export default Login;
