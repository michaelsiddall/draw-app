
# Description

Duration:  2 week sprint

Draw is a community color therapy initiative inspired by Charles Moertel, who wanted to make a children’s book, but passed away before having the opportunity to achieve his goal.Draw partners with local organizations to host coloring days where people express creativity, share stories, and grow community by adding pages to the ever-growing children’s book.

This mobile app was created to allow users at a Draw event to scan a QR code which brings them to a landing page allowing them to request drawing materials to be delivered to their table. Upon completion of drawing, user are able submit their image via upload & sent to an approval queue.  Once images arevapproved by Event Admins, users can view all the approved images along with artist info in gallery of their specific event.  Event Admins are able to log in and view material requests for each table.  Once request fulfilled, Event Admins can mark requests as complete or delete them.  As user submit uploaded images, Event Admins can approve, disapprove, or delete images.  Approved images will then be availabel for all users to view.  Event Admins are able to create new events & delete past events.  App Admins have the ability to perform all functions of Event Admins in addition to be able to create, authorize, and remove Event Admins.  


## Prerequisites

- This version uses React, Redux, Node,  Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).


## Create database and table

Create a new database called `draw` and create a the following tables:

```CREATE TYPE auth AS ENUM
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
  "name" varchar,
  "email_address" citext,
  "instagram" varchar,
  "location" varchar,
  "description" varchar,
  "image_url" varchar,
  "timestamp" timestamp DEFAULT Now(),
  "approved" BOOLEAN DEFAULT NULL
);

```

If you would like to name your database something else, you will need to change `draw` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
