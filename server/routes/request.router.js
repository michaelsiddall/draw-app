const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//get ALL uncompleted requests and joined to uncompleted events table for location/timestamp
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT "table_number", "artist_count", "event_id", "location", 
    "timestamp", "requests"."completed" as "completed_request", "requests"."id" as "request_id" 
    FROM "requests" JOIN "events" ON "requests"."event_id" = "events"."id" WHERE "requests"."completed" 
    = 'FALSE' AND "events"."completed" = 'FALSE' ORDER BY "timestamp";`;
  if (req.user.auth_level === 'superAdmin' || req.user.auth_level === 'admin') {
    pool
      .query(queryText)
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.warn(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

//get uncompleted requests BY EVENT ID
router.get('/event/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "requests" WHERE "completed"='FALSE' AND "event_id"=$1`;
  if (req.user.auth_level === 'superAdmin' || req.user.auth_level === 'admin') {
    pool
      .query(queryText, [req.params.id])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.warn(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// POST route template
router.post('/', (req, res) => {
  const queryText = `INSERT INTO "requests" ("table_number", "artist_count", "event_id")
    VALUES ($1, $2, $3)`;
  pool
    .query(queryText, [
      req.body.tableNumber,
      req.body.artistNumber,
      req.body.location,
    ])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(`POST /Request Materials failed`, err);
      res.sendStatus(500);
    });
});

//complete a request
router.put('/completed/:id', rejectUnauthenticated, (req, res) => {
  let e = req.params;
  const queryText = `UPDATE "requests" SET "completed"='TRUE' WHERE "id" =$1;`;
  if (req.user.auth_level === 'superAdmin' || req.user.auth_level === 'admin') {
    pool
      .query(queryText, [e.id])
      .then((response) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.warn(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

//delete specific request in case of making a mistake
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  let e = req.params;
  const queryText = `DELETE FROM "requests" WHERE "id" = $1`;
  console.log('DELETE', e.id);
  if (req.user.auth_level === 'superAdmin' || req.user.auth_level === 'admin') {
    pool
      .query(queryText, [e.id])
      .then((response) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.warn(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
