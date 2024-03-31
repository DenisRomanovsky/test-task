import React from 'react'
import {
    Tr,
    Td,
    Button
  } from '@chakra-ui/react'
import { User } from '../services/users-list'
import {useState} from 'react';

export interface ScoredUserProps {
    user: User
}

export function ScoredUser(props: ScoredUserProps) {
    const { user } = props; 
    
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    return(
        <>
        <Tr >
                    <Td> {user.name} </Td>
                    <Td> {user.scores[0]} </Td>
                    <Td> 
                        <Button colorScheme='blue' onClick={toggle}>All Scores</Button>
                    </Td>
                </Tr>
                {
                    isOpen && user.scores.slice(1).map((score)=> {
                        return(
                            <Tr>
                                <Td></Td>
                                <Td>{score}</Td>
                                <Td></Td>
                            </Tr>
                        )
                    })
                }
                </>
    )
}






