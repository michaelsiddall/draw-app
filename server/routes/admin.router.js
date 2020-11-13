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
  let queryString = ` SELECT "id","username","auth_level" from "user"
   ORDER BY "id" ASC
   `;
  pool.query(queryString).then((result) => {
    console.log('results from get', result.rows);

    res.send(result.rows);
  });
});
//Get data from a specific ID for editing permissions
router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('making a specific auth ID GET request');

  let queryString = ` SELECT "id","username","auth_level" from "user"
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
router.put('/', rejectUnauthenticated, (req, res) => {
  console.log('making a admin.user.auth PUT request', req.body);

  let queryString = ` UPDATE "user"
  SET "username" = $1,
  "auth_level" = $2
WHERE "id" = $3;
   `;
  pool
    .query(queryString, [req.body.username, req.body.auth_level, req.body.id])
    .then((result) => {
      console.log('results from  auth admin PUT', result);

      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('We have an error in events PUT', error);
      res.sendStatus(500);
    });
});

module.exports = router;
