import React, { useState } from 'react'
import { ContactsCollection } from '../api/ContactsCollection'
import { useTracker } from 'meteor/react-meteor-data'

export const App = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const fetchContacts = useTracker(() => {
        return ContactsCollection.find().fetch()
    })

    const saveContact = () => {
        console.log({
            email,
            name,
        })
        ContactsCollection.insert({ name, email })
    }
    return (
        <div>
            <h1>Save Contact</h1>
            <form>
                <p>Name</p>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <br />
                <p>Email</p>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
            <br />
            <button onClick={saveContact}>Save</button>

            <h2>Conatact list</h2>
            {fetchContacts.map((contact) => (
                <h1>{contact.name}</h1>
            ))}
        </div>
    )
}
