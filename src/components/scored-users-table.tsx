import React from 'react'
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'
import { User } from '../services/user-list-manager'
import { ScoredUser } from './scored-user'

export interface ScoredUsersProps {
    userList: User[]
}

export function ScoredUsersList(props: ScoredUsersProps) {
    const { userList } = props

    return (
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Score</Th>
                        <Th>Action</Th>
                        <Th>Scores History</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {userList.map((user) => {
                        return (
                            <ScoredUser key={user._id} user={user}></ScoredUser>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
