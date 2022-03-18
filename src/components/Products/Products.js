import React, {Fragment} from 'react'

const Products = ({products, isLoading, onDelete}) => {
    if(isLoading) return <h1>LOADING...</h1>
    return (
        <div>
            {products?.map(todo => (
                <Fragment key={todo.id}>
                    <div>{todo?.productName}</div>
                    <div>{todo?.description}</div>
                    <div>{todo?.weight}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                    <hr/>
                </Fragment>
            ))}
        </div>
    );
}

export default Products;
