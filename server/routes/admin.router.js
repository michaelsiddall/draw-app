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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
