const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated, } = require('../modules/authentication-middleware');


//get all uncompleted events
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "events" WHERE "completed"='FALSE' ORDER BY "timestamp";`;
  pool.query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

//get all completed events
router.get('/completed', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "events" WHERE "completed"='TRUE' ORDER BY "timestamp";`;
  pool.query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});


//post event
router.post('/', rejectUnauthenticated, (req, res) => {
  const e = req.body;
  const queryText = `INSERT INTO "events" ("location", "timestamp") VALUES ($1, $2);`
  console.log('EVENT POST', req.body)
  pool.query(queryText, [e.location, e.timestamp])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('Error completing EVENT POST', err);
      res.sendStatus(500);
    });
});

//delete specific event in case of making a mistake
router.delete('/', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM "events" WHERE "id" = $1`;
  pool.query(queryText, [req.body.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

//edit specific event ID in case of making a mistake
router.put('/', rejectUnauthenticated, (req, res) => {
  let e = req.body
  console.log('EDIT EVENT', req.body)
  const queryText = `UPDATE "events" SET "location"=$1, "timestamp" = $2 WHERE "id" =$3;`;
  pool.query(queryText, [e.location, e.timestamp, e.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});


//complete an event
router.put('/completed/:id', rejectUnauthenticated, (req, res) => {
  let e = req.params
  const queryText = `UPDATE "events" SET "completed"='TRUE' WHERE "id" =$1;`;
  pool.query(queryText, [e.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});
module.exports = router;