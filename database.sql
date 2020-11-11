
CREATE TYPE auth AS ENUM
('user', 'admin', 'superAdmin');
CREATE EXTENSION
IF NOT EXISTS citext;

CREATE TABLE "user"
(
  "id" SERIAL PRIMARY KEY,
  "username" citext UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "auth_level" auth DEFAULT 'user' NOT NULL
);

CREATE TABLE "events"
(
  "id" SERIAL PRIMARY KEY,
  "location" VARCHAR (500),
  "timestamp" TIMESTAMP,
  "completed" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "requests"
(
  "id" SERIAL PRIMARY KEY,
  "table_number" varchar,
  "artist_count" numeric,
  "event_id" INT REFERENCES "events",
  "completed" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "drawings"
(
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "email_address" citext,
  "instagram" varchar,
  "description" varchar,
  "image_url" varchar,
  "timestamp" timestamp DEFAULT Now(),
  "approved" BOOLEAN DEFAULT NULL
);

--Sample Data inserts 
INSERT INTO "events"
  ("location", "timestamp")
VALUES
  ('Surly Brewing', '1970-01-01 19:00:00');
INSERT INTO "requests"
  ("table_number", "artist_count", "event_id")
VALUES
  ('1', '4', '1');
INSERT INTO "drawings"
  ("name", "email_address", "instagram", "description", "image_url")
VALUES
  ('John', 'john@drunkdrawing.com', 'myinstagram', 'This is a picture of this thing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJEIMIbQgXJfvdXkcm8YzC8sbgizJf74_VGg&usqp=CAU' );
