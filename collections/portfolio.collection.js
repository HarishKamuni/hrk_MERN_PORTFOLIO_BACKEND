const {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
} = require('../models/portfolioModel');

const portfolioCollection = async (req, res) => {
  try {
    const intro = await Intro.find();
    const about = await About.find();
    const experience = await Experience.find();
    const project = await Project.find();
    const course = await Course.find();
    const contact = await Contact.find();
    const payload = {
      Intros: intro[0],
      Abouts: about[0],
      Experiences: experience,
      Projects: project,
      Courses: course,
      Contacts: contact[0],
    };
    res.status(200).json({
      message: 'Successfully get all data',
      error: false,
      success: true,
      data: payload,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
const updateIntro = async (req, res) => {
  try {
    const intros = await Intro.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: 'intro updated successfully!!',
      error: false,
      success: true,
      data: intros,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const updateAbout = async (req, res) => {
  try {
    const abouts = await About.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: 'about updated successfully!!',
      error: false,
      success: true,
      data: abouts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const abouts = await Project.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: 'project updated successfully!!',
      error: false,
      success: true,
      data: abouts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const updateCourse = async (req, res) => {
  try {
    const abouts = await Course.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: 'course updated successfully!!',
      error: false,
      success: true,
      data: abouts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const updateContact = async (req, res) => {
  try {
    const abouts = await Contact.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: 'contact updated successfully!!',
      error: false,
      success: true,
      data: abouts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = {
  portfolioCollection,
  updateIntro,
  updateAbout,
  updateProject,
  updateCourse,
  updateContact,
};
