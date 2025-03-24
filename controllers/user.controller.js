require('dotenv').config();
const { ObjectId } = require('mongodb');
// Load Models.
const User = require('../models/user.model');

////////////////////////////////////////////////////////////////////
///////////////////////// Get User By Id ///////////////////////////
////////////////////////////////////////////////////////////////////
async function getUserById(req, res) {
  const { id } = req.params;

  // Validate user_id format
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ 
      result: false,
      error: 'Invalid ID format'
    });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });
    if (!user) {
      return res.status(404).json({
          result: false,
          error: 'User not found or underage' 
        });
    }
    res.json({
      result: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      error: 'Server error' 
    });
  }
}

module.exports = {
  getUserById,
}