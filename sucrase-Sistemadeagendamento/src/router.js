import { Router } from 'express';

const routes = new Router();

// todas vez que acessa a rota principal, esse sera o retorno
routes.get('/', (req, res) => {
  return res.json({ message: 'Okay' });
});

export default routes;
