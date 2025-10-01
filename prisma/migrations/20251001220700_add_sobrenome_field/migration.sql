-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "sobrenome" TEXT NOT NULL DEFAULT '';

-- Update existing records to have a default sobrenome
UPDATE "usuarios" SET "sobrenome" = 'Usuário' WHERE "sobrenome" = '';

-- Remove default after updating existing records
ALTER TABLE "usuarios" ALTER COLUMN "sobrenome" DROP DEFAULT;