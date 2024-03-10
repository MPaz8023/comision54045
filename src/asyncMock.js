const products = [
    {
        id: "1",
        name: "Gomitas",
        price: 1000,
        category: "Golosinas",
        img: "https://arcorencasa.com/wp-content/uploads/2023/06/20230615-1999.jpg",
        stock: 60,
        description: "Descripcion de Gomitas"
    },
    { id: "2", name: "Alfajor Guaymallen", price: 1000, category: "Alfajores", img: "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/guaymallen-triple-x-3-614e08a31ad45.png?t=1632503971", stock: 100, description: "Descripcion Alfajor Guaymallen"},
    { id: "3", name: "Chocolate Milka", price: 2000, category: "Chocolates", img: "https://masonlineprod.vtexassets.com/arquivos/ids/316936-800-auto?v=638451741886200000&width=800&height=auto&aspect=true", stock: 110, description: "Descripcion Chocolate Milka"},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}