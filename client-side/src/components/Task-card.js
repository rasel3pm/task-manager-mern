import React from "react";
import {Button, Card,ButtonGroup} from "react-bootstrap";
import axios from "axios";
import {toast,ToastContainer} from "react-toastify";
const TaskCard = ({author,title,description})=>{
    const handleSubmit = (_id) => {
        axios
            .delete(`http://localhost:5000/api/v1//delete/${_id}`)
            .then((res) => {
                toast.success(`${res.data.message}`);
            })
            .catch((err) => {
                toast.warning(`${err}`)
            });
    };
    return(
        <Card border="primary" style={{ width: 'auto', }}>
            <Card.Header>Author : {author}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">View</Button>
                    <Button variant="secondary">Edit</Button>
                    <Button variant="danger" onClick={handleSubmit}>Delete</Button>
                </ButtonGroup>
            </Card.Footer>
            <ToastContainer/>
        </Card>
    )
}
export default TaskCard