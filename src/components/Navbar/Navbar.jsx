import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CardWidget"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt="logo de candy" />
            <h1 className={classes.name}>Candy Shop!</h1>
            <nav>
                <Link to="/category/Golosinas" className={classes.button}>Golosinas</Link>
                <Link to="/category/Alfajores" className={classes.button}>Alfajores</Link>
                <Link to="/category/Chocolates" className={classes.button}>Chocolates</Link>
            </nav>
            <CartWidget/>
        
        </header>
    )
} 

export default Navbar