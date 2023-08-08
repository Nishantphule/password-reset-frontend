import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material";
import { API } from "../global";

export default function Register() {
    const navigate = useNavigate();

    const [addUser, setAddUser] = useState({
        username: '', email: '', password: ''
    });


    const handleSubmit = (data) => {
        fetch(`${API}/register`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
            .then((res) => {
                if (res.message === 'Enter all details!') {
                    alert(res.message)
                }
                else if (res.message === 'Internal server Error') {
                    alert(res.message)
                }
                else {
                    navigate("/login")
                    alert("Succesfull Registration")
                }

            });

    }
    return (
        <div className="form">
            <h1>Register</h1>
            <TextField className="Input" placeholder='Enter username...' onChange={e => setAddUser({ ...addUser, username: e.target.value })} />

            <TextField className="Input" placeholder='Enter Email...' onChange={e => setAddUser({ ...addUser, email: e.target.value })} />

            <TextField className="Input" placeholder='Enter Password...' onChange={e => setAddUser({ ...addUser, password: e.target.value })} />

            <Button className="Btn" variant="outlined" color="error" type="cancel" onClick={() => handleSubmit(addUser)}>
                Sign Up
            </Button>

            <p>If already have an account
                <Button className="Btn" variant="outlined" color="info" type="submit" onClick={() => navigate('/login')}>
                    Login In
                </Button></p>

        </div>
    )
}
