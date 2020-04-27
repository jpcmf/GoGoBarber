import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ messager: 'helloW' }));

export default routes;
