import { Request, Response } from 'express';
import { ProdutoService } from '../services/produto.service';

export class ProdutoController {
    static listar(req: Request, res: Response): void {
        ProdutoService.listar()
            .then(produtos => res.json(produtos))
            .catch(err => res.status(500).json({ erro: err.message }));
    }

    static buscarPorId(req: Request, res: Response): void {
        const { id } = req.params;
        ProdutoService.buscarPorId(id)
            .then(produto => {
                if (!produto) {
                    return res.status(404).json({ erro: 'Produto não encontrado' });
                }
                res.json(produto);
            })
            .catch(err => res.status(500).json({ erro: err.message }));
    }

    static criar(req: Request, res: Response): void {
        const { nome, preco, empresaId } = req.body;
        ProdutoService.criar({ nome, preco, empresaId })
            .then(novo => res.status(201).json(novo))
            .catch(err => res.status(500).json({ erro: err.message }));
    }

    static atualizar(req: Request, res: Response): void {
        const { id } = req.params;
        ProdutoService.atualizar(id, req.body)
            .then(atualizado => res.json(atualizado))
            .catch(err => res.status(500).json({ erro: err.message }));
    }

    static deletar(req: Request, res: Response): void {
        const { id } = req.params;
        ProdutoService.deletar(id)
            .then(() => res.status(204).send())
            .catch(err => res.status(500).json({ erro: err.message }));
    }
}
