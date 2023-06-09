import React, {useState} from "react";
import {Form,Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const UserLogin = ()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        const data = {
            email,
            password
        };
        axios
            .post("http://localhost:5000/api/v1/login", data)
            .then((res) => {
                toast.success(`${res.data.message}`);
                setTimeout(()=>{
                    navigate("/add-task",{replace:true})
                },2000)
            })
            .catch((err) => {
                toast.warning(`${err}`)
            });
    };
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                  Error :
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <ToastContainer/>
        </Form>
    )
}
export default UserLogin