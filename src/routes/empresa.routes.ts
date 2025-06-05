import { Router } from 'express';
import { EmpresaController } from '../controllers/empresa.controller';

const router = Router();

router.get('/', EmpresaController.listar);
router.get('/:id', EmpresaController.buscarPorId);
router.post('/', EmpresaController.criar);
router.put('/:id', EmpresaController.atualizar);
router.delete('/:id', EmpresaController.deletar);

export default router;
