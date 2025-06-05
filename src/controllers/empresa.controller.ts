import { Request, Response } from 'express';
import { EmpresaService } from '../services/empresa.service';

export class EmpresaController {
    static listar(req: Request, res: Response): void {
        EmpresaService.listar()
            .then(empresas => res.json(empresas))
            .catch(err => res.status(500).json({ erro: err.message }));
    }

    static buscarPorId(req: Request, res: Response): void {
        const { id } = req.params;

        EmpresaService.buscarPorId(id)
            .then(empresa => {
                if (!empresa) {
                    return res.status(404).json({ erro: 'Empresa não encontrada' });
                }
                res.json(empresa);
            })
            .catch(err => res.status(500).json({ erro: err.message }));
    }

    static criar(req: Request, res: Response): void {
        const { nome, cnpj } = req.body;

        EmpresaService.criar({ nome, cnpj })
            .then(nova => res.status(201).json(nova))
            .catch(err => res.status(500).json({ erro: err.message }));
    }

    static atualizar(req: Request, res: Response): void {
        const { id } = req.params;

        EmpresaService.atualizar(id, req.body)
            .then(atualizada => res.json(atualizada))
            .catch(err => res.status(500).json({ erro: err.message }));
    }

    static deletar(req: Request, res: Response): void {
        const { id } = req.params;

        EmpresaService.deletar(id)
            .then(() => res.status(204).send())
            .catch(err => res.status(500).json({ erro: err.message }));
    }
}
