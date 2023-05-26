import React from "react";
import {Button, Card,ButtonGroup} from "react-bootstrap";
const TaskCard = ({title,description,author})=>{
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
                    <Button variant="danger">Delete</Button>
                </ButtonGroup>
            </Card.Footer>
        </Card>
    )
}
export default TaskCard