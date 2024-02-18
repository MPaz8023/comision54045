import classes from "./Navbar.module.css"


const Navbar = () => {
    return (
        <header className={classes.header}>
            <h4>Candy Shop</h4>
            <nav>
                <a>Golosinas</a>
                <a>Chocolates</a>
                <a>Alfajores</a>
            </nav>
        
        </header>
    )
} 

export default Navbar