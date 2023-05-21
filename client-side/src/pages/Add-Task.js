import {Button, Container, Form} from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        const data = {
            title,
            author,
            description,
        };
        axios
            .post("http://localhost:5000/api/v1/create-task", data)
            .then((res) => {
                toast.success(`${res.data.message}`);
                setTimeout(()=>{
                    navigate("/",{replace:true})
                },3000)
            })
            .catch((err) => {
                toast.warning(`${err.data.err}`);
            });
    };

    return (
        <Container>
            <h1>Create Post</h1>
            <Form onSubmit={handleSubmit}>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                 </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" value={description} rows={3} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Button className="btn btn-success" type="submit">Create Post</Button>
            </Form>
            <ToastContainer/>
        </Container>
    );
};

export default AddTask;
