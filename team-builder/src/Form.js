import React,{ useState } from 'react'

const initialUserForm = {
    name: '',
    email: '',
    role: '',
}
const Form = props => {
    const { team, setTeam } = props
    const [user, setUser] = useState(initialUserForm)

    const HandleSubmit = evt => {
        evt.preventDefault()
        setTeam([...team, user])
    }
    const HandleChange = evt => {
        setUser({...user, [evt.target.name]: evt.target.value})
    }
    return(
        <form onSubmit={HandleSubmit}>
            <label htmlFor='NameInput'>
                Name:
                <input
                    id='NameInput'
                    type='text'
                    name='name'
                    value={user.name}
                    onChange={HandleChange}
                />
            </label>
            <label htmlFor='EmailInput'>
                Email: 
                <input
                    id='EmailInput'
                    type='email'
                    name='email'
                    value={user.email}
                    onChange={HandleChange}
                />
            </label>
            <label htmlFor='RoleInput'>
                Role: 
                <select name='role' id='RoleInput' onChange={HandleChange}>
                    <option value=''>Choose a Role</option>
                    <option value='tl'>Team Lead</option>
                    <option value='student'>Student</option>
                    <option value='instructor'>Instructor</option>
                </select>
            </label>
            <button disabled={!user.name || !user.email || !user.role}>Submit</button>
        </form>
    )
}
export default Form