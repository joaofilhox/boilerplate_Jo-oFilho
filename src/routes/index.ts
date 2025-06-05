// src/routes/index.ts
import { Router } from 'express';
import empresaRoutes from './empresa.routes';
import produtoRoutes from './produto.routes';

const router = Router();

router.get('/', (_req, res) => { res.json({ mensagem: 'Servidor funcionando!' }) });
router.use('/empresas', empresaRoutes);
router.use('/produtos', produtoRoutes);

export default router;
