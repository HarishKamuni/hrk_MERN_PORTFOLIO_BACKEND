const { Contact } = require('../models/portfolioModel');

const userCollection = async (req, res) => {
  try {
    const { name, email, age, gender, mobile, address } = req.body;
    const payload = {
      name,
      email,
      age,
      gender,
      mobile,
      address,
    };
    const user = await Contact(payload);
    const saveUser = await user.save();
    res.status(200).json({
      message: 'user created successfully',
      error: false,
      success: true,
      data: saveUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = userCollection;
