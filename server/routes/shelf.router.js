const express = require('express');
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const query = 'SELECT * FROM "item" WHERE "user_id"=$1';
    console.log(req.user);
    pool.query(query, [req.user.id])
        .then(result => {
            res.send(result.rows);
        }).catch(error=>{
            res.sendStatus(500);
            console.log(error);
    });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    let id = [req.body.description, req.body.image_url, req.user.id];
    let SQLquery = `INSERT INTO item (description, image_url, user_id)
                    VALUES($1, $2, $3);`;
    pool.query(SQLquery, id)
    .then(result=>{
        res.sendStatus(201);
        })
    .catch(error=>{
        console.log('ERROR IN / POST ---------------------------------------->', error);
        res.sendStatus(500);
    });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    let id = [req.params.id, req.user.id];
    let SQLquery = `DELETE FROM item 
                    WHERE id = $1 AND user_id = $2;`;
    pool.query(SQLquery, id)
    .then(result=>{
        res.sendStatus(201);
        })
    .catch(error=>{
        console.log('ERROR IN / DELETE ---------------------------------------->', error);
        res.sendStatus(500);
    });             
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;