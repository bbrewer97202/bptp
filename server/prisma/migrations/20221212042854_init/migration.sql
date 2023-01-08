-- CreateTable
CREATE TABLE "Trip" (
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

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);
