import { Link } from "react-router-dom"

const Item = ({ id, name, category, price, img }) => {
    return (
        <article>
            <h4>Categoria: {category}</h4>
            <h3>{name}</h3>
            <img src={img} style={{ width: 200}}/>
            <h4>${price}</h4>
            <Link to={`/item/${id}`}>Ver Detalle</Link>  
        </article>
    )
}

export default Item