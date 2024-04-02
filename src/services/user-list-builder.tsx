import scores from '../scores'
import users from '../users'
import { User } from './user-list-manager'

export function buildUserList(): User[] {
    const userList: User[] = importUsers()
    return sortUserList(scoreUsers(userList))
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
    return userList
}

export function sortUserList(userList: User[]): User[] {
    userList.forEach((user) => user.scores.sort((a, b) => b - a))
    return userList.sort((a, b) => b.scores[0] - a.scores[0])
}
