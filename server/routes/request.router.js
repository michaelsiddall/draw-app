const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "requests" WHERE "completed"='FALSE'`; //AND "event_id"=$1
  pool
    .query(queryText, [req.body.location])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const queryText = `INSERT INTO "requests" ("table_number", "artist_count", "event_id")
    VALUES ($1, $2, $3)`;
  pool
    .query(queryText, [
      req.body.tableNumber,
      req.body.artistNumber,
      req.body.location,
    ])
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(`POST /Request Materials failed`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
