// const productController={}

// productController.showProducts=(req, res)=>{
//     res.send('Esto es una peticion de productos');
// }

// export default productController;

const showProducts=(req, res)=>{
    res.send('Listar productos');
}

const getOne = (req, res)=>{
    res.send()
}

const createProduct = (req, res)=>{
    res.send('se creo el producto')
}

const updateProduct = (req, res)=>{
    res.send('se actualizo el producto')
}

const deleteProduct = (req, res)=>{
    res.send('se elimino el producto')
}

export {showProducts, getOne, createProduct, deleteProduct, updateProduct};