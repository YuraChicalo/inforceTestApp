import {useState} from "react";
import styles from "./CreateProductForm.module.css"

const CreateProductForm = ({onSubmit}) => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!productName || !description || !weight) return;
        try {
            setIsLoading(true)
            await onSubmit(productName, description, weight);
            setProductName('')
            setDescription('')
            setWeight('')
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={productName} onChange={({target: {value}}) => setProductName(value)}
                       placeholder="product name"/>
                <br/>
                <br/>
                <input type="text" value={description} onChange={({target: {value}}) => setDescription(value)}
                       placeholder="description"/>
                <br/>
                <br/>
                <input type="text" value={weight} onChange={({target: {value}}) => setWeight(value)} placeholder="weight"/>
                <br/>
                <br/>
                <button type="submit" disabled={!productName || !description || !weight || isLoading}>create product
                </button>
            </form>
        </div>
    );
}

export default CreateProductForm;
