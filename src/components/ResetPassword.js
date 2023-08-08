import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { API } from "../global";

export default function ResetPassword() {

    const [email, setEmail] = useState({
        email: ''
    });

    const [sendAgain, setSendAgain] = useState(false);

    const handleSubmit = (data) => {
        fetch(`${API}/resetpassword`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
            .then((res) => {
                alert(res.message)
                setSendAgain(true)
            });

    }
    return (
        <div className="form">
            <h1>Send Reset Password Link</h1>
            <TextField className="Input" placeholder='Enter Email...' onChange={e => setEmail({ email: e.target.value })} />

            <Button className="Btn" variant="outlined" color="info" type="cancel" onClick={() => handleSubmit(email)}>
                {!sendAgain ? 'Send Mail' : 'Send Mail Again'}
            </Button>

        </div>
    )
}
