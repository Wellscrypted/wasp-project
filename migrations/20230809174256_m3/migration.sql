-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "player_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "player_first_name" TEXT NOT NULL,
    "player_last_name" TEXT NOT NULL,
    "player_ref" TEXT,
    "user_id" INTEGER,
    CONSTRAINT "Player_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Player" ("player_first_name", "player_id", "player_last_name", "player_ref", "user_id") SELECT "player_first_name", "player_id", "player_last_name", "player_ref", "user_id" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
