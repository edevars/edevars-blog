import React from "react"

const Category = ({ pageContext }) => {
    const { category } = pageContext
    return <h1>{category}</h1>
}

export default Category
