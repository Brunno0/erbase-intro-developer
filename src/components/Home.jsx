
import React from "react";
import { Input, Box, Button, Heading} from '@chakra-ui/react'
import {useState} from 'react'
import Task from "./Task";

export function Home (props){


    const [task, setTask] = useState("");

    const [arrayTask, setArrayTask] = useState([])

    
    const handleTask = (event) => {
        event.preventDefault()
        setTask(event.target.value)
        console.log(event.target.value)
      }
       
    
    
    const createTask = () => {
    const idTask = Date.now();

        const newTask = {
            tarefa: task,
            idTask
        } 
        const arrayToSpread = [...arrayTask, newTask]
        setArrayTask(arrayToSpread)
        setTask("")
        console.table(arrayTask)
    }

    function deleteTask (id){
        const filterToDelete = arrayTask.filter((task)=>{
           if(id!== task.idTask){
               return(task)
           }      
    })
    setArrayTask(filterToDelete)
    }
    

    const taskMapeado = arrayTask.map((task) => {
        return (
            <Task key={task.idTask} tarefa={task} deleteTask={deleteTask} ></Task>
        )
    })

    
    return(<div>

        <Heading m={5}>Lista de tarefas</Heading>
            <Box w={'30%'} m={5} >
            <Input placeholder='Qual sua próxima tarefa?' onChange={handleTask} value={task} />
                <Button colorScheme='teal' size='sm' mt='2' w='100%' onClick={createTask}>
                Enviar
            </Button>
            {taskMapeado}
            </Box>
 
    </div>)

}