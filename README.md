
# Description

Duration:  2 week sprint

Draw is a community color therapy initiative inspired by Charles Moertel, who wanted to make a children’s book, but passed away before having the opportunity to achieve his goal. Draw partners with local organizations to host coloring days where people express creativity, share stories, and grow community by adding pages to the ever-growing children’s book.

Past Draw events had participants arrive at an event, sit at a table already provided with paper and drawing materials. Participants would color and turn in their physical drawings at the end of the event. After the event, Draw would then have to manually scan in each drawing and upload it to their website and socials. This created a few problems. First, participants in the event would often never see their works again or have to wait several days or more to view it on Draw's website or social media. Two, the team at Draw would be required to perform time consuming, additional work after the event in order to make the images acessable online. Third, in the age of COVID and social distancing, finding a way to deliver sanitized drawing materials upon request & reduce the amount of unnecessary Participant and Draw Staff interaction at Draw events would not only make the event safer, but also more performent.

This mobile app was created to allow users at a Draw event to scan a QR code provided at the table which brings them to a user landing page. Thus allowing them to request drawing materials to be delivered to their table. Upon completion of drawing, participants are easilty able take a picture & submit their image via upload from their phone. Once approved by Event Admins, participants are able to view the images in real time during the event. Event Admins are abe to receive drawing material requests at each event in real time and distribute. Upon receiving drawing submissions, Event Admins are able to approve, disapprove, and delete images. All images can be instantly downloaded for use by Draw staff in other social media or promotion. Thru use of this application, we hope to make Draw's events safer, more technically interactive, and create a seamless workflow for Draw pre & post events.
 


## Prerequisites

- This version uses React, Redux, Node,  Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).


## Create database and table

Create a new database called `draw` and create a the following tables from the "database.sql" file:



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

## Usage
This app has 3 views:  Participant, Event Admin, and App Admin

Participant: 

When at a Draw event, participant scans a QR code which brings them to a landing page allowing them to request drawing materials to be delivered to their table.  The participant will select the event they are at from a drop down menu and select the table number they are at (provided at the table) and enter the number of participants at the table. Upon completion of drawing, participants are able submit their image via upload & sent to an approval queue.  Participants will select the event they are at and the will enter a name attached to the drawing.  They will have the option to include an email addresss, Instagram username, and add informaiton about their drawig.  Once images are approved by Event Admins, participants can view all the approved images along with artist info in gallery of their specific event. Participants can also click to donate to Draw and are redirected to a 3rd party donation page.

Event Admin:  

Material Requests: 
Event Admins are able to register a username and password.  Once granted authorization from App Admin, logged in Event Admins are able to create, edit and delete Draw events.  At the events, Event Admins are able to navigate to an Events Page and view drawing material requests by clicking "Queue" under Material Requests. Once in the event "Queue", Event Admins will see constantly refreshed page view of all incoming material request submissions.  Upon delivery of requested drawing materials, Event Admins can mark the request as "complete" and it will remove it from the queue.  They can also permanently delete it once the event is over. 

Submitted Drawing Approval:

Event Admins are able to view all submitted drawings.  They are able to "Approve", "Disapprove", "Delete", or "Download" each image.  Only images that have been approved will be visable in the Gallery of each event allowing Participants to view them in real time at the event.  Disapproved images will move to a separate "Disapproved" images page that will allow for "Approval" in the future.  This feature ensures that Event Admins that are uncertain about Draw's guidelines of appropriateness are not deleting images that might not have needed to be diapproved.  The "Delete" feature allows the removal of any obvious inappropriate or offensive images.  The "Download" feature allows "Draw" to download images to be used within other social apps or means for the purposes of promoting the Draw platform.  

App Admin:  

App Admin will have all the page authorization and functionality of Event Admins, in addition to the ability to create, edit, and remove Event Admin as well as additional App Admins. 

## Screen Shots


<img src="https://github.com/DrawByYou/draw-app/blob/master/public/wireframes/user_landing_page.png" height="400" width="200"/>
<img src="https://github.com/DrawByYou/draw-app/blob/master/public/wireframes/user_material_request.png?raw=true height="400" width="200"/>
<img src="https://github.com/DrawByYou/draw-app/blob/master/public/wireframes/user_drawing_submit.png?raw=true height="400" width="200"/>  
<img src="https://github.com/DrawByYou/draw-app/blob/master/public/wireframes/event_admin_event.png?raw=true height="200" width="400"/>  
<img src="https://github.com/DrawByYou/draw-app/blob/master/public/wireframes/event_admin_drawing_approval.png?raw=true height="200" width="400"/>                                                                
                                                                                                                                                              
## Deploying to Heroku & setting up AWS S3 Bucket & storing keys
For more info on deployment on Heroku, please refer to https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app
For more info on AWS S3 setup on Heroku, please refer to https://devcenter.heroku.com/articles/s3-upload-node



In terminal 
**Create App in Heroku

```$ heroku create ```

**Setting up AWS S3 Bucket and storing your AWS keys

In order for your application to access the AWS credentials for signing upload requests, they will need to be added as configuration variables in Heroku:

Use the heroku config:set to set both keys:

```$ heroku config:set AWS_ACCESS_KEY_ID=xxx AWS_SECRET_ACCESS_KEY=yyy```


In addition to the AWS access credentials, set your target S3 bucket’s name:

```$ heroku config:set S3_BUCKET=zzz```

**Postgresql in Heroku

in terminal 

```$ heroku addons:create heroku-postgresql:hobby-dev```
This will set up Postgresql on your Heroku project

```$ heroku pg:push your_database DATABASE_URL```
This will copy your database contents up to Heroku.  ```your_database``` is the actual name of your database.  ```DATABASE_URL``` is a Heroku config variable created by the ```Add on```.  Do not replace it with something else.  Just type ```DATABASE_URL```

Update or create a module for your pg-pool confirguration to the following code that will convert the Heroku ```DATABASE_URL``` into a pool config object.  The oly line you should have to change is ```database: process.env.DATABASE_NAME || ```'your_database'```.  Change ```your_database``` to the actual name of your database.  

**Update or push changes to Heroku

```git push heroku master```
                                                                             
                                                                                                                                     

## Built With

-Node -Javascript -React -React Redux -Postgres -Passport -Material UI - AWS S3 - 

## Acknowledgemet
Thanks to the Tarjan Cohort (Swing, Swing) and the Prime Instruction Team of Edan Schwartz, Dev Jana, and Casie Siekman.

