import { Router } from 'express';
import { EmpresaController } from '../controllers/empresa.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Empresas
 *   description: Endpoints para gerenciar empresas
 */

/**
 * @swagger
 * /empresas:
 *   get:
 *     summary: Lista todas as empresas
 *     tags: [Empresas]
 *     responses:
 *       200:
 *         description: Lista de empresas
 */
router.get('/', EmpresaController.listar);

/**
 * @swagger
 * /empresas/{id}:
 *   get:
 *     summary: Busca uma empresa por ID
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Empresa encontrada
 *       404:
 *         description: Empresa não encontrada
 */
router.get('/:id', EmpresaController.buscarPorId);

/**
 * @swagger
 * /empresas:
 *   post:
 *     summary: Cria uma nova empresa
 *     tags: [Empresas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cnpj:
 *                 type: string
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 */
router.post('/', EmpresaController.criar);

/**
 * @swagger
 * /empresas/{id}:
 *   put:
 *     summary: Atualiza uma empresa
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cnpj:
 *                 type: string
 *     responses:
 *       200:
 *         description: Empresa atualizada
 */
router.put('/:id', EmpresaController.atualizar);

/**
 * @swagger
 * /empresas/{id}:
 *   delete:
 *     summary: Remove uma empresa
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Empresa removida
 */
router.delete('/:id', EmpresaController.deletar);

export default router;
