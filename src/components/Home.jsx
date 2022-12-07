
import React from "react";
import { Input, Box, Button, Heading} from '@chakra-ui/react'

export function Home (props){


    return(<div>

        <Heading m={5}>Lista de tarefas</Heading>
            <Box w={'30%'} m={5} >
            <Input placeholder='Qual sua próxima tarefa?'  />
                <Button colorScheme='teal' size='sm' mt='2' w='30%'>
                Enviar
            </Button>
            </Box>
 
    </div>)

}