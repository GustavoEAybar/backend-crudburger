import { Router } from 'express';
import productController, { showProducts } from '../controllers/products.controllers';

//crear la instancia del router

const router = Router();

//crear mis rutas

router
.route('/products')
// .get(productController);
.get(showProducts);

router
.route('/products/:id')
.get()
.put()
.delete()

export default router;