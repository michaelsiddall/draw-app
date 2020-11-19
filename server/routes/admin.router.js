const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//Router to get all users
router.get('/', (req, res) => {
  // GET route code here

  let queryString = ` SELECT "id","username","auth_level" from "user"
   ORDER BY "id" ASC
   `;
  if (req.user.auth_level === 'superAdmin') {
    pool.query(queryString).then((result) => {
      console.log('results from get', result.rows);

      res.send(result.rows);
    });
  } else {
    res.sendStatus(403);
  }
});
//Delete user at a  specific ID
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // console.log('making a event DELETE request', req.params);
  if (req.user.auth_level === 'superAdmin') {
    let queryString = `  DELETE FROM "user" WHERE "id" = $1;
   `;
    pool
      .query(queryString, [req.params.id])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log('We have an error in Auth delete route', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});
//Router to change auth levels for users
router.put('/', rejectUnauthenticated, (req, res) => {
  // console.log('making a admin.user.auth PUT request', req.body);
  if (req.user.auth_level === 'superAdmin') {
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
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
