import React from 'react'
import { Button } from '@chakra-ui/react'
import { Form, TextField } from '@northlight/ui'
import { User, addScore } from '../services/users-list'
export interface ScoreFormProps {
    setUserList: (userList: User[]) => void
}

export function ScoreForm(props: ScoreFormProps) {
    const { setUserList } = props

    function handleScoreCreation(
        values: { userName: string; userScore: number },
        methods: any
    ) {
        setUserList((userList: User[]) => {
            const newUserList = [...userList]
            return addScore(newUserList, {
                name: values.userName,
                value: values.userScore,
            })
        })
    }

    return (
        <Form
            initialValues={{ userName: '', userScore: '' }}
            onSubmit={handleScoreCreation}
        >
            <TextField
                label="User Name"
                name="userName"
                placeholder="User Name"
            />
            <TextField
                label="User Score"
                name="userScore"
                placeholder="Score"
            />
            <br></br>
            <Button colorScheme="teal" type="submit">
                Save
            </Button>
        </Form>
    )
}
