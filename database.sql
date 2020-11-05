
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--BELOW THIS IS THE NEW SQL CODE FOR OUR DBs
CREATE TYPE auth AS ENUM ('user', 'admin', 'superAdmin');
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE "staff" (
  "id" SERIAL PRIMARY KEY,
  "email_address" varchar  NOT NULL,
  "password" varchar  NOT NULL,
  "auth_level" auth DEFAULT 'user' NOT NULL
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "place" varchar,
  "time" varchar,
  "date" date
);

CREATE TABLE "requests" (
  "id" SERIAL PRIMARY KEY,
  "table_number" varchar,
  "artist_count" numeric,
  "event_id" INT
);

CREATE TABLE "drawings" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "email_address" citext NOT NULL,
  "instagram" varchar,
  "prompt" varchar,
  "description" varchar,
  "image_url" varchar,
  "timestamp" timestamp DEFAULT Now(),
  "approved" BOOLEAN DEFAULT 'false'
);
