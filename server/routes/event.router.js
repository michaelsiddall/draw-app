const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated,} = require('../modules/authentication-middleware');


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

//get specific event 
router.get('/:id', rejectUnauthenticated, (req, res) => {
      console.log('EVENT ID', req.params.id);
      const queryText = `SELECT * FROM "events" WHERE "id" = $1`;
      pool.query(queryText, [req.params.id])
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
      const e= req.body;
      console.log('EVENT POST', req.body)
      const queryText = `INSERT INTO "events" ("location", "timestamp") VALUES ($1, $2);`

      pool.query(queryText, [e.location, e.timestamp])
        .then((result) => { 
          res.send(result.rows); })
        .catch((err) => {
          console.error('Error completing EVENT POST', err);
          res.sendStatus(500);
        });
});

//delete specific event in case of making a mistake
router.delete('/:id', rejectUnauthenticated, (req, res) => {
      console.log('EVENT DELETE', req.body);
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
router.put('/edit/:id', rejectUnauthenticated, (req, res) => {
      let e=req.body
      console.log('EDIT EVENT', req.body);
      const queryText = `UPDATE "events" SET "location"=$1, timestamp"=$2 WHERE "id"=$3`;
      pool.query(queryText, [e.location, e.timestamp, e.id])
        .then((response) => {
          res.send(response.rows);
        })
        .catch((err) => {
          console.warn(err);
          res.sendStatus(500);
        });
});

module.exports = router;
