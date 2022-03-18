import './App.css';
import {useEffect} from "react";
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";
import {addProducts, deleteTodo, pushProducts, setLoadingFalse, setLoadingTrue} from "./redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import Products from "./components/Products/Products";


function App() {
    const { products, productsLoading } = useSelector(store => store.productsReducer);
    const dispatch = useDispatch();

    const fetchTodos = async () => {
        try {
            dispatch(setLoadingTrue())
            const resp = await fetch('http://localhost:8888/get-todos');
            const data = await resp.json();

            dispatch(addProducts(data))
        } catch(e) {
            console.log(e)
        } finally {
            dispatch(setLoadingFalse())
        }
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    const onCreateProduct = async (productName,description,weight) => {
        if(!productName || !description || !weight) return;

        const resp = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({productName, description, weight}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json();

        dispatch(pushProducts(data))
    }

    const onDeleteProduct = async (id) => {
        const resp = await fetch('http://localhost:8888/delete-todo/' + id, {
            method: 'DELETE',
        })

        await resp.json();
        dispatch(deleteTodo(id))
    }

    return (
    <div className="App">
     <CreateProductForm onSubmit={onCreateProduct} />
        <br/>
        <Products products={products} isLoading={productsLoading} onDelete={onDeleteProduct} />
    </div>
  );
}

export default App;
