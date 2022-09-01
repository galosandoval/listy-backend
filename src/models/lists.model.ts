export type List = {
  id: string
  name: string
  userId: string
  completed: boolean
}

export const findLists = async () => {
  return Promise.resolve(lists)
}

export const findList = async (id: string) => {
  const list = lists.find((l) => l.id === id)
  if (list) return Promise.resolve(list)
  else throw Error(`Did not find list in database with id: ${id}`)
}

export const findListsByUserId = async (userId: string) => {
  const filteredLists = lists.filter((list) => list.userId === userId)
  if (filteredLists.length) return Promise.resolve(filteredLists)
  else throw Error(`Did not find lists in database with userId: ${userId}`)
}

export type AddListParams = Pick<List, 'name' | 'userId'>

export const addList = async (newList: AddListParams) => {
  lists.push({
    completed: false,
    id: '5',
    name: newList.name,
    userId: newList.userId
  })

  return Promise.resolve(lists)
}

export const updateList = async (updates: Partial<List>) => {
  const listIndex = lists.findIndex((list) => list.id === updates.id)

  if (listIndex !== -1) {
    lists[listIndex] = { ...lists[listIndex], ...updates }
  }

  return Promise.resolve(lists)
}

export const removeList = async (listId: string) => {
  lists = lists.filter((list) => list.id !== listId)

  return Promise.resolve(listId)
}

export let lists: List[] = [
  { id: '1', name: 'sweet treats', userId: '1', completed: false },
  { id: '2', name: 'savory supper', userId: '1', completed: false },
  { id: '3', name: "friday's meals", userId: '1', completed: false },
  { id: '4', name: 'WEEKEND TREAT YO SELF', userId: '1', completed: false }
]
