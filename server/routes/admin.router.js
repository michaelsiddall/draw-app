const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let queryString = ` SELECT "id","username","auth_level" from "staff"
   `;
  pool.query(queryString).then((result) => {
    console.log('results from get', result.rows);

    res.send(result.rows);
  });
});
//Get data from a specific ID for editing permissions
router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('making a specific auth ID GET request');

  let queryString = ` SELECT "id","username","auth_level" from "staff"
    WHERE "id"  = $1;
   `;
  pool
    .query(queryString, [req.params.id])
    .then((result) => {
      console.log('results from get', result.rows[0]);

      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log('We have an error in auth ID GET', error);
      res.sendStatus(500);
    });
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
