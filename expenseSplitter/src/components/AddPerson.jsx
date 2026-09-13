import { useState } from "react"
import { useDispatch} from "react-redux"
import { addPerson } from "../features/personSlice"


export default function AddPerson(){
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addPersonHandler = (e) => {
        e.preventDefault()
        dispatch(addPerson(input))
        setInput("")
    }

    return(
        <form onSubmit={addPersonHandler}>
            <input 
            type="text" 
            placeholder="Enter the person's name..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />

            <button
            type="submit"
            >
                Add Person
            </button>
        </form>
    )
}
