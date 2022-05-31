const router = require('express').Router();
const Lesson = require('../models/lesson.js');
// const Combo = require('../models/combo.js') 

//index
router.get('/', (req, res) => {
    Lesson.find({}, (err, foundLessons) => {
        res.render('lessons/index.ejs', {
            lessons: foundLessons
        });
    });
});

//index 2
// router.get('/:id/combos', (req, res) => {
//     Combo.find({}, (err, foundCombos) => {
//         res.render('classes/combos.ejs', {
//             combos: foundCombos
//         });
//     });
// });
// router.get('/:id/combos', (req, res) => {
//         Lesson.find({}, (err, foundLessons) => {
//             res.render('lessons/combos.ejs', {
//                 lessons: foundLessons
//             });
//         });
//     });

//new
router.get('/new', (req, res) => {
    res.render('lessons/new.ejs');
});

//new 2
// router.get('/new2', (req, res) => {
//     res.render('lessons/new2.ejs');
// });

//destroy
router.delete('/:id', (req, res) => {
    Lesson.findByIdAndRemove(req.params.id, () => {
        res.redirect('/lessons');
    });
});

//update
router.put('/:id', (req, res) => {
    Lesson.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/lessons');
    })
})

//create
router.post('/', (req, res) => {
    Lesson.create(req.body, (err, createdLessons) => {
        // console.log(err, createdCombo);
        res.redirect('/lessons');
    })
})

//create 2
// router.post('/', (req, res) => {
//     Combo.create(req.body, (err, createdCombos) => {
//         // console.log(err, createdCombo);
//         res.redirect('/combos');
//     })
// })
 

//edit
router.get('/:id/edit', (req, res) => {
    Lesson.findById(req.params.id, (err, foundLesson) => {
        res.render('lessons/edit.ejs', {
            lesson: foundLesson,
        })
    })
})

//show
router.get('/:id', (req, res) => {
    Lesson.findById(req.params.id, (err, foundLesson) => {
        res.render('lessons/show.ejs', {
            lesson: foundLesson,
        });
    });  
}); 


module.exports = router;