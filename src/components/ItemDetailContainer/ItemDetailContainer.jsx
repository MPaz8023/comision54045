import classes from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId} = useParams()

useEffect(() => {
    getProductsById(itemId)
        .then(result => {
            setProduct(result)
        })
}, [itemId])

    return (
        <main>
            <h1 className={classes.detalle}>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer