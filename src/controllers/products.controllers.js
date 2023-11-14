// const productController={}

import { validationResult } from "express-validator";
import Product from "../models/product";

// productController.showProducts=(req, res)=>{
//     res.send('Esto es una peticion de productos');
// }

// export default productController;

const showProducts = async (req, res) => {
  try {
    const productList = await Product.fing();
    res.status(200).json(productList);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Error serching product'})
  }
};

const getOne = async (req, res) => {
    const { id } = req.params
    try {
        const productFound = await Product.findById(id)
        res.status(200).json(productFound);
    } catch (error) {
      res.status(400).json({ message: 'Error creating product'+error})
    }
};

const createProduct = async (req, res) => {
  //desestructuracion
  const { productName, price, urlImg, category } = req.body;
  try {
    //validar
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.send({ errors: errors.array() });
    }
    //crear el objeto
    const newProduct = new Product({
      //   productName: req.body.productName,
      //   price: req.body.price,
      //   urlImg: req.body.urlImg,
      //   category: req.body.category,
      productName,
      price,
      urlImg,
      category,
    });

    //guardar en base
    await newProduct.save();
    res.status(201).json({ message: "Product create successfully" });

  } catch (err) {
    try {
    
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error creating product'})
  }
  }
};

const updateProduct = async (req, res) => {
    try {
        //buscar el producto en la bd por su id y actualizarlo
        await Product.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message: 'Product updated successfully'})
    } catch (error) {
      res.status(404).json({ message: 'Error seraching product'})
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        //buscar el producto por su id en la base de datos y lo borro
        console.log(id);
        await Product.findByIdAndDelete(id)
        res.status(200).json({ message: 'Product deleted successfully'})
    } catch {
      res.status(404).json({ message: 'Error deleting product'})
    }
};

export { showProducts, getOne, createProduct, deleteProduct, updateProduct };
