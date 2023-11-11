import {useState} from 'react';
import {TextInput, Label, Button} from 'flowbite-react/lib/esm/components';
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState({username: "", password: ""});

    const handleChange = (e) => {
        setLoginState({...loginState, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/admin-page')
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
                <Label>Username</Label>
                <TextInput
                    key={'username'}
                    onChange={handleChange}
                    value={loginState.username}
                    id={'username'}
                />
                <Label>Password</Label>
                <TextInput
                    key={'password'}
                    onChange={handleChange}
                    value={loginState.password}
                    id={'password'}
                    type='password'
                />
                <Button type={'submit'} onSubmit={handleSubmit} color="dark" size="sm">
                    {'Login'}
                </Button>
            </form>
        </div>
    )
}
