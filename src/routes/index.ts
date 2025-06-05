import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ mensagem: 'Servidor funcionando!' });
});

export default router;
