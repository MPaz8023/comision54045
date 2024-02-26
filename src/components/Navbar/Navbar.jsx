import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CardWidget"

const Navbar = () => {
    return (
        <header className={classes.header}>
            <nav>
                <button>Golosinas</button>
                <button>Chocolates</button>
                <button>Alfajores</button>
            </nav>
            <CartWidget/>
        
        </header>
    )
} 

export default Navbar