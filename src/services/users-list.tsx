import scores from '../scores'
import users from '../users'

export interface User {
  _id: number
  name: string
  scores: number[]
}

export function buildUsersList() {
  const userList: User[] = importUsers();

  return scoreUsers(userList);
}

function importUsers(){
  const userList: User[] = [];

  users.forEach((user) => userList.push({_id: user._id, name: user.name, scores: [] }));

  return userList;
}

function scoreUsers(userList: User[]){
  scores.forEach(
    (scoreRow)=> userList.find((user)=> user._id == scoreRow.userId)?.scores.push(scoreRow.score)
  );

  userList.forEach((user) => user.scores.sort((a, b) => b - a));
  
  return userList.sort((a, b)=> b.scores[0]-a.scores[0]);
}