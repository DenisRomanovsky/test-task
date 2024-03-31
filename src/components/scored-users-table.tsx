import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react'
import { buildUsersList } from '../services/users-list'
import { ScoredUser } from './scored-user';

export function ScoredUsersList () {
    const usersList = buildUsersList();

    return (
    <TableContainer>
    <Table variant='simple'>
    <Thead>
        <Tr>
            <Th>Name</Th>
            <Th>Score</Th>
            <Th>Action</Th>
        </Tr>
    </Thead>
    <Tbody>
        {usersList.map((user) => {      
        return (
            <ScoredUser key={user._id} user={user}></ScoredUser>
            ) 
        })}
    </Tbody>
    </Table>
</TableContainer>
    )
}