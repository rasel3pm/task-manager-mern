import React, {useEffect, useState} from "react";
import { Container } from 'react-bootstrap';
import TaskCard from "../components/Task-card";
import axios from "axios";
const ShowTask = ()=>{
    const [task, setTask] = useState([]);
    const dataFetch = () => {
        axios
            .get("http://localhost:5000/api/v1/get-task")
            .then((res) => {
                setTask(res.data.task);
            })
            .catch((err) => console.log("not found", err));
    };
    useEffect(() => dataFetch(), []);
    console.log(task)
    return(
        <Container >
            <div className="content">
                {
                    task.map((item)=>(
                            <TaskCard key={item.id} title={item.title} description={item.description} author={item.author} createdAt={item.createdAt}/>
                        )
                    )
                }
            </div>
        </Container>
    )
}
export default ShowTask
