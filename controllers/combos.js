const router = require('express').Router();
const Combo = require('../models/combo.js');

router.get('/', (req, res) => {
    Combo.find({}, (err, foundCombos) => {
        res.render('/combos/index.ejs', {
            combos: foundCombos
        });
    });
});



router.get('/:id', (req,res) => {
    Combo.findById(req.params.id, (err, foundCombo) => {
        res.render('combos/show.ejs', {
            combo: foundCombo
        });
    });  
}); 


module.exports = router;