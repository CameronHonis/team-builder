import React from 'react'

const User = props => {
    const { user } = props
    return (
        <div class='user'>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p><b>{user.role}</b></p>
        </div>
    )
}
export default User