-- CreateTable
CREATE TABLE "trabalhos" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "data_vencimento" TIMESTAMP(3),
    "prioridade" "Prioridade" NOT NULL DEFAULT 'MEDIA',
    "status" "Status" NOT NULL DEFAULT 'PENDENTE',
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "materia_id" TEXT,

    CONSTRAINT "trabalhos_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "perfis" DROP COLUMN "tema";

-- AlterTable
ALTER TABLE "atividades" DROP COLUMN "peso";

-- AddForeignKey
ALTER TABLE "trabalhos" ADD CONSTRAINT "trabalhos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trabalhos" ADD CONSTRAINT "trabalhos_materia_id_fkey" FOREIGN KEY ("materia_id") REFERENCES "materias"("id") ON DELETE SET NULL ON UPDATE CASCADE;