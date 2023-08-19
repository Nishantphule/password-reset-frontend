import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { API } from "../global";

export default function ResetPassword() {

    const [email, setEmail] = useState({
        email: ''
    });

    const [sendAgain, setSendAgain] = useState(false);

    const handleSubmit = (data) => {
        alert(`
        Data Processing... 
        Please wait for a moment.`)
        fetch(`${API}/resetpassword`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
            .then((res) => {
                if (res.message === 'Invalid Email') {
                    alert(res.message)
                }
                else if (res.message === 'Internal Server Error') {
                    alert(res.message)
                }
                else {
                    alert(res.message)
                    setSendAgain(true)
                }
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
