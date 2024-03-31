import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
import { buildUsersList } from '../services/users-list'

export function ScoreList () {
    const usersList = buildUsersList();

    return (
    <TableContainer>
    <Table variant='simple'>
    <Thead>
        <Tr>
        <Th>Name</Th>
        <Th>Score</Th>
        </Tr>
    </Thead>
    <Tbody>
        {usersList.map((user) => {      
        return (
            <Tr>
                <Td> {user.name}</Td>
                <Td> {user.scores[0]}</Td>
            </Tr>) 
        })}
    </Tbody>
    </Table>
</TableContainer>
    )
}