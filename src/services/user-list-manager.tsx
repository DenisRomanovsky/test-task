import { ExcelRow } from '../components/excel-dropzone.js'
import { sortUserList } from './user-list-builder.js'

export interface User {
    _id: number
    name: string
    scores: number[]
}

export interface Score {
    name: string
    value: number
}

export function addScore(userList: User[], score: Score): User[] {
    pushScore(userList, score)
    return sortUserList(userList)
}

function pushScore(userList: User[], score: Score) {
    const user = userList.find((user) => user.name == score.name)
    user ? user.scores.push(score.value) : addUser(userList, score)
}

function addUser(userList: User[], score: Score) {
    const newId = userList.sort((a, b) => b._id - a._id)[0]._id + 1
    userList.push({ _id: newId, name: score.name, scores: [score.value] })
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
