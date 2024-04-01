import scores from '../scores'
import users from '../users'
import { ExcelRow } from '../components/excel-dropzone.jsx'

export interface User {
    _id: number
    name: string
    scores: number[]
}

export interface Score {
    name: string
    value: number
}

export function buildUserList(): User[] {
    const userList: User[] = importUsers()
    return scoreUsers(userList)
}

function importUsers() {
    const userList: User[] = []
    users.forEach((user) =>
        userList.push({ _id: user._id, name: user.name, scores: [] })
    )
    return userList
}

function scoreUsers(userList: User[]): User[] {
    scores.forEach((scoreRow) =>
        userList
            .find((user) => user._id == scoreRow.userId)
            ?.scores.push(scoreRow.score)
    )
    return sortUserList(userList)
}

function sortUserList(userList: User[]): User[] {
    userList.forEach((user) => user.scores.sort((a, b) => b - a))
    return userList.sort((a, b) => b.scores[0] - a.scores[0])
}

function addUser(userList: User[], score: Score): User[] {
    const newId = userList.sort((a, b) => b._id - a._id)[0]._id + 1
    userList.push({ _id: newId, name: score.name, scores: [score.value] })
    return userList
}

export function addScore(userList: User[], score: Score): User[] {
    pushScore(userList, score)
    return sortUserList(userList)
}

function pushScore(userList: User[], score: Score) {
    const user = userList.find((user) => user.name == score.name)
    user ? user.scores.push(score.value) : addUser(userList, score)
}

export function addScoresFromExcel(
    setUserList: (userList: User[]) => void,
    data: ExcelRow[]
) {
    setUserList((userList) => {
        const newUserList = [...userList]
        data.forEach((score) =>
            pushScore(newUserList, { name: score.name, value: score.score })
        )
        return sortUserList(newUserList)
    })
}
