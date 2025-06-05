import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProdutoService {
    static async listar() {
        return await prisma.produto.findMany({
            include: { empresa: true },
        });
    }

    static async buscarPorId(id: string) {
        return await prisma.produto.findUnique({
            where: { id },
            include: { empresa: true },
        });
    }

    static async criar(data: { nome: string; preco: number; empresaId: string }) {
        return await prisma.produto.create({ data });
    }

    static async atualizar(id: string, data: { nome?: string; preco?: number }) {
        return await prisma.produto.update({
            where: { id },
            data,
        });
    }

    static async deletar(id: string) {
        return await prisma.produto.delete({
            where: { id },
        });
    }
}
