const router = require('express').Router();
const { escapeRegExpChars } = require('ejs/lib/utils');
const { append } = require('express/lib/response');
const Combo = require('../models/combo.js');
 
//index
router.get('/', (req, res) => {
    Combo.find({}, (err, foundCombos) => {
        res.render('combos/index.ejs', {
            combos: foundCombos
        });
    });
});

//new
router.get('/new', (req, res) => {
    res.render('combos/new.ejs');
});

//destroy
router.delete('/:id', (req, res) => {
    Combo.findByIdAndRemove(req.params.id, ( )=> {
        res.redirect('/combos');
    });
});

//update
router.put('/:id', (req, res) => {
    Combo.findByIdAndUpdate(req.params.id, req.body, (err, updateCombo) => {
        res.redirect(`/combos/${updateCombo._id}`);
    })
})

//create
router.post('/', (req, res) => {
    Combo.create(req.body, (err, createdCombo) => {
        // console.log(err, createdCombo);
        res.redirect('/');
    })
})

//edit
router.get('/:id/edit', (req, res) => {
    Combo.findById(req.params.id, (err, foundCombo) => {
        res.render('combos/edit.ejs', {
            combo: foundCombo,
        })
    })
})
//show
router.get('/:id', (req, res) => {
    Combo.findById(req.params.id, (err, foundCombo) => {
        res.render('combos/show.ejs', {
            combo: foundCombo,
        });
    });  
}); 


module.exports = router;