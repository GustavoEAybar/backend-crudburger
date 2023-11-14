import { Router } from 'express';
import productController, { showProducts } from '../controllers/products.controllers';
import { check } from 'express-validator';
import productValidate from '../middlewares/productValidations';

//crear la instancia del router

const router = Router();

//crear mis rutas

router
.route('/products')
// .get(productController);
.get(showProducts)
.post([productValidate],createPoducts);

router
.route('/products/:id')
.get()
.put()
.delete()

export default router;