let mockDirectionDb: Direction[] = [
  {
    description: 'Do this',
    id: '1',
    recipeId: '1',
  },
  {
    description: 'Do that',
    id: '2',
    recipeId: '1',
  },
  {
    description: 'Add some of this',
    id: '3',
    recipeId: '2',
  },
  {
    description: 'Wait a bit',
    id: '4',
    recipeId: '2',
  },
  {
    description: 'Make sure to do this',
    id: '5',
    recipeId: '3',
  },
  {
    description: 'Some text to display',
    id: '6',
    recipeId: '3',
  },
  {
    description: 'Gotta make sure to do this. Here is more text',
    id: '7',
    recipeId: '4',
  },
  {
    description: 'This that and the other',
    id: '8',
    recipeId: '4',
  },
]

export type Direction = {
  id: string
  recipeId: string
  description: string
}

export const getByRecipeId = (recipeId: string) => {
  const foundDirections = mockDirectionDb.filter((d) => d.recipeId === recipeId)
  return Promise.resolve(foundDirections)
}

export const add = (
  directions: Pick<Direction, 'description' | 'recipeId'>[]
) => {
  const directionsToAdd = directions.map((d, idx) => ({
    ...d,
    id: (9 + idx).toString(),
  }))
  mockDirectionDb = mockDirectionDb.concat(directionsToAdd)
  return Promise.resolve(directionsToAdd)
}

export const remove = (recipeId: string) => {
  mockDirectionDb = mockDirectionDb.filter((m) => m.recipeId !== recipeId)
  return Promise.resolve(recipeId)
}

// TODO: update

// const findInstructions = () => db(recipeInstructions)

// const findInstructionsByRecipeId = (recipeId) =>
//   db(recipeInstructions).where('recipe-id', recipeId).orderBy('step')

// const findInstructionById = (id) => db(recipeInstructions).where({ id })

// const addInstructions = (body) => {
//   return db(recipeInstructions).insert(body)
// }

// const deleteInstructionsByRecipeid = (id) => {
//   let instructionsToBeDeleted
//   findInstructionsByRecipeId(id).then((instructions) => {
//     instructionsToBeDeleted = instructions
//   })

//   return db(recipeInstructions)
//     .where('recipe-id', id)
//     .del()
//     .then(() => instructionsToBeDeleted)
// }

// const updateInstructions = (id, changes) => {
//   changes.forEach((change) => {
//     db(recipeInstructions)
//       .where('id', change.id)
//       .update(change)
//       .then((updated) => {
//         console.log(updated)
//       })
//       .catch((error) => console.log(error.message))
//   })
//   return findInstructionsByRecipeId(id)
// }

// const deleteInstructionById = (id) => {
//   let instructionToDelete
//   findInstructionById(id).then(
//     (instruction) => (instructionToDelete = instruction)
//   )
//   return db(recipeInstructions)
//     .where({ id })
//     .del()
//     .then(() => instructionToDelete)
// }
