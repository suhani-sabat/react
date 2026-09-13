import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    persons: [
        {
            id: 1,
            name: "Suhani"
        }
    ]
}

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            const person= {
                id: nanoid(),
                name: action.payload
            }
            state.persons.push(person)
        },

        removePerson: (state, action) => {
            state.persons = state.persons.filter((person) => person.id != action.payload)
        }
    }
})

export const {addPerson, removePerson} = personSlice.actions

export default personSlice.reducer