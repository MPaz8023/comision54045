import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CardWidget"
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt="logo de candy" />
            <h1 className={classes.name}>Candy Shop</h1>
            <nav>
                <button className={classes.button}>Golosinas</button>
                <button className={classes.button}>Chocolates</button>
                <button className={classes.button}>Alfajores</button>
            </nav>
            <CartWidget/>
        
        </header>
    )
} 

export default Navbar