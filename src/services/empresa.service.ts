import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EmpresaService {
    static async listar() {
        return await prisma.empresa.findMany({
            include: { produtos: true },
        });
    }

    static async buscarPorId(id: string) {
        return await prisma.empresa.findUnique({
            where: { id },
            include: { produtos: true },
        });
    }

    static async criar(data: { nome: string; cnpj: string }) {
        return await prisma.empresa.create({ data });
    }

    static async atualizar(id: string, data: { nome?: string; cnpj?: string }) {
        return await prisma.empresa.update({
            where: { id },
            data,
        });
    }

    static async deletar(id: string) {
        return await prisma.empresa.delete({
            where: { id },
        });
    }
}
