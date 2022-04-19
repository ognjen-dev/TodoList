import React from 'react'
import { useState, useReducer, useEffect } from 'react'

export const InputContext = React.createContext({})

const InputProvider = ({ children }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [items, setItems] = useState([]) 
    return (
        <InputContext.Provider value={{ firstName, setFirstName, lastName, setLastName, city, setCity, street, setStreet, items, setItems }}>
            {children}
        </InputContext.Provider>
    )
}

export default InputProvider
