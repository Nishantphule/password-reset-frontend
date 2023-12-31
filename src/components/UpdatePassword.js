import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Button, TextField } from "@mui/material";
import { API } from "../global";

export default function UpdatePassword() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [newPass, setNewPass] = useState({
        password: '',
        confirmPassword: ''
    });


    const handleSubmit = (data) => {
        if (data.password === data.confirmPassword) {
            alert(`
        Data Processing... 
        Please wait for a moment.`)
            fetch(`${API}/updatepassword/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((data) => data.json())
                .then((res) => {
                    if (res.message === 'Internal Server Error') {
                        alert(res.message)
                    }
                    else {
                        navigate("/login")
                        alert(res.message)
                    }
                });
        }
        else {
            alert("Both Password Does Not match!!")
        }

    }
    return (
        <div className="form">
            <h1>Create New Password</h1>
            <TextField className="Input" placeholder='Enter New Password...' onChange={e => setNewPass({ ...newPass, password: e.target.value })} />

            <TextField className="Input" placeholder='Confirm New Password...' onChange={e => setNewPass({ ...newPass, confirmPassword: e.target.value })} />

            <Button className="Btn" variant="outlined" color="error" type="cancel" onClick={() => handleSubmit(newPass)}>
                Change Password
            </Button>

        </div>
    )
}
