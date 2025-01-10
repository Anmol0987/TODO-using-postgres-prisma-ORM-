-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "Id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "Done" BOOLEAN NOT NULL,
    "User_Id" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
