-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "admin_user" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Player" (
    "player_id" SERIAL NOT NULL,
    "player_first_name" TEXT NOT NULL,
    "player_last_name" TEXT NOT NULL,
    "player_ref" TEXT,
    "user_id" INTEGER,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "Season" (
    "season_id" SERIAL NOT NULL,
    "team_name" TEXT NOT NULL,
    "season_name" TEXT NOT NULL,
    "season_year" TEXT NOT NULL,
    "grade" INTEGER,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("season_id")
);

-- CreateTable
CREATE TABLE "_player_seasons" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_player_seasons_AB_unique" ON "_player_seasons"("A", "B");

-- CreateIndex
CREATE INDEX "_player_seasons_B_index" ON "_player_seasons"("B");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_player_seasons" ADD CONSTRAINT "_player_seasons_A_fkey" FOREIGN KEY ("A") REFERENCES "Player"("player_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_player_seasons" ADD CONSTRAINT "_player_seasons_B_fkey" FOREIGN KEY ("B") REFERENCES "Season"("season_id") ON DELETE CASCADE ON UPDATE CASCADE;
