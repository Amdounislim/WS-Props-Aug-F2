import React from 'react'
import UserCard from './UserCard'

const Users = ({persons}) => {
    return (
        <div style={{display:"flex"}}>
            {persons.map((el, i)=>(<UserCard key={i} person={el}/>))}
        </div>
    )
}

export default Users
