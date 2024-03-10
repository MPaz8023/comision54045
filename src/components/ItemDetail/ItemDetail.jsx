import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"

const ItemDetail = ({ name, category, price, img, description, stock}) => {
    return (
        <article className={classes.articulo}>
            <img src={img} style={{ width: 300}}/>
            <h3 className={classes.nombre}>{name}</h3>
            <h4>Categoria: {category}</h4>
            <h4>${price}</h4>
            <h4>Descripcion: {description}</h4>
            <ItemCount stock={stock}/>
        </article>
    )
}

export default ItemDetail