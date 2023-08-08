import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material";
import { API } from "../global";

export default function Login() {
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        username: '', password: ''
    });


    const handleSubmit = (data) => {
        fetch(`${API}/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json())
            .then((data) => {
                navigate("/")
                alert("Login Successful!")
            }
            )
    }
    return (
        <div className="form">
            <h1>Login</h1>
            <TextField
                className="Input"
                placeholder='Enter Username...'
                onChange={e => setLogin({ ...login, username: e.target.value })} />

            <TextField
                className="Input"
                placeholder='Enter Password...'
                onChange={e => setLogin({ ...login, password: e.target.value })} />

            <Button
                className="Btn1"
                variant="outlined"
                color="info"
                type="submit"
                onClick={() => navigate('/resetpassword')}>
                Forgot Password
            </Button>

            <Button
                className="Btn"
                variant="outlined"
                color="error"
                type="cancel"
                onClick={() => handleSubmit(login)}>
                Sign In
            </Button>

            <p>If dont have an account!
                <Button
                    className="Btn1"
                    variant="outlined"
                    color="info"
                    type="submit"
                    onClick={() => navigate('/register')}>
                    Register
                </Button>
            </p>

        </div>
    )
}
