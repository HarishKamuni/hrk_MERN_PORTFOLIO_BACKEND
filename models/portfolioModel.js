const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieUrl: {
    type: String,
    required: true,
  },
  desc1: {
    type: String,
    required: true,
  },
  desc2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const projetsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  techStack: {
    type: Array,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  courseUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  mobile: {
    type: Array,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Intro = mongoose.model('intro', introSchema);
const About = mongoose.model('about', aboutSchema);
const Experience = mongoose.model('experince', experienceSchema);
const Project = mongoose.model('project', projetsSchema);
const Course = mongoose.model('course', coursesSchema);
const Contact = mongoose.model('contact', contactSchema);

module.exports = { Intro, About, Experience, Project, Course, Contact };
