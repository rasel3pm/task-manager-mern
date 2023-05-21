import React from "react";
import {Card} from "react-bootstrap";
const TaskCard = ({title,description,author,createdAt})=>{
    return(
        <Card border="primary" style={{ width: 'auto', }}>
            <Card.Header>Author : {author}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default TaskCard
