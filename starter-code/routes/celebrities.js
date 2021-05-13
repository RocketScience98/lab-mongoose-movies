const express = require('express');
const Celebrity = require("../models/Celebrity.model")
// require the Drone model here

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  const user = req.session.currentUser
  if (!user) {
    return res.redirect("/login");
}
  Celebrity.find()
    .then(celebsFromDb => {
      console.log('celebrities:', celebsFromDb)
      res.render('celebrities/index',{celebrities: celebsFromDb})
    }).catch(e => {
      console.log('Error while getting celebs from Db')
      next(e)
    })
});

//Celebrities:ID
router.get('/celebrities/:id', (req, res, next) => {
  // ... your code here
  const user = req.session.currentUser
  if (!user) {
    return res.redirect("/login");
}
  const {id} =req.params;
  Celebrity.findById(id)
    .then(celebsFromid => {
      console.log('drones:', celebsFromid)
      res.render('celebrities/show',{celebrity: celebsFromid})
    }).catch(e => {
      console.log('Error while getting celebs from Db')
      next(e)
    })
});

//Celebrities Create

router.get('/celebrities/new', (req, res, next) => {
  // ... your code here
  const user = req.session.currentUser
  if (!user) {
    return res.redirect("/login");
}
  res.render("celebrities/new")
  
});

router.post('/celebrities/new', (req, res, next) => {
  // ... your code here 
    // console.log(req.body);
    const { name, occupation , catchPhrase, image } = req.body;
   
    Celebrity.create({ name, occupation , catchPhrase, image })
      .then(CBFromDB =>{ 
        console.log(`New drone created: ${CBFromDB.title}.`)
        res.redirect("/celebrities")
      })
      .catch(error => {
        console.log(`Error while creating a new Celeb:`, error)
        res.render("celebrites/new")
      });
  });
 
//Celebrities delete 


router.post('/celebrities/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const user = req.session.currentUser
  if (!user) {
    return res.redirect("/login");
}
  const { id } = req.params
  Celebrity.findByIdAndDelete(id)
    .then(deletedCB => {
      res.redirect(`/celebrities`)
      console.log('deleted:', deletedCB)
    })
    .catch(e => console.log('There was an error while deleting'))
});
//Celebrities edit

router.get('/celebrities/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const user = req.session.currentUser
  if (!user) {
    return res.redirect("/login");
}

  const { id } = req.params
  Celebrity.findById(id)
    .then((ToEdit => {
      console.log('edited', ToEdit)
      res.render('celebrities/update-form', { Celebrity: ToEdit })
    }))
    .catch(e => next(e))
});

router.post('/celebrities/:id/edit', (req, res, next) => {
// Iteration #4: Update the drone
// ... your code here
const { id } = req.params
const { name, occupation, catchPhrase, image } = req.body
Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase, image },{new: true})
  .then(updated => {
    res.redirect(`/celebrities`)
    console.log('update:', updated)
  })
  .catch(e => console.log('There was an error while updating'))
});


module.exports=router;