import React from 'react'
import propTypes from 'prop-types'

const List = (props) => {
    return (
        <div>
            {props.persons.map(el=><div>
            <h1>{el.name}</h1>
            <h3>{el.email}</h3>
            </div>)}
        </div>
    )
}

List.propTypes={
    persons: propTypes.arrayOf(
        propTypes.exact({
            name:propTypes.string,
            email:propTypes.string,
            src:propTypes.string
        })
    ) 
}

export default List
