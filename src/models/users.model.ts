export const findUserById = (userId: string) => {
  const user = users.find((u) => u.id === userId)
  return Promise.resolve(user)
}

export const addUser = (newUser: Omit<User, 'id'>) => {
  users.push({
    ...newUser,
    id: '4'
  })
  return Promise.resolve({
    ...newUser,
    id: '4'
  })
}

export type User = {
  id: string
  firstName: string
  lastName: string
  username: string
  password: string
}

export let users = [
  {
    id: '1',
    firstName: 'Galo',
    lastName: 'Sandoval',
    username: 'demo',
    password: 'password'
  },
  {
    id: '2',
    firstName: 'Raymond',
    lastName: 'Rowe',
    username: 'rowe@gmail.com',
    password: 'password'
  },
  {
    id: '3',
    firstName: 'Kendrick',
    lastName: 'Lamar',
    username: 'kendrick@gmail.com',
    password: 'password'
  }
]
