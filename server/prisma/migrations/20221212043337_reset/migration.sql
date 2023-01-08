/*
  Warnings:

  - You are about to drop the `Trip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Trip";

-- CreateTable
CREATE TABLE "Route" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "epicRating" INTEGER,
    "distanceHours" DECIMAL(65,30),
    "lengthMiles" DECIMAL(65,30),
    "permitRequired" BOOLEAN,
    "dirtRoadMiles" DECIMAL(65,30),
    "elevationGain" INTEGER,
    "percentageBurn" INTEGER,
    "overnight" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
