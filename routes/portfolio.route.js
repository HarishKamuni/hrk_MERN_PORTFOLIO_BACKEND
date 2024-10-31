const express = require('express');
const {
  portfolioCollection,
  updateIntro,
  updateAbout,
  updateProject,
  updateCourse,
  updateContact,
} = require('../collections/portfolio.collection');

const router = express.Router();

router.get('/portfolio/get-all-data', portfolioCollection);

//update portfolio
router.put('/portfolio/update-intro', updateIntro);
router.put('/portfolio/update-about', updateAbout);
router.put('/portfolio/update-project', updateProject);
router.put('/portfolio/update-course', updateCourse);
router.put('/portfolio/update-contact', updateContact);

module.exports = router;
