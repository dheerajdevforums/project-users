const express = require('express');
const router = express.Router();
const { User } = require('shared-orm-library');

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({attributes: ['id', 'firstName', 'lastName', 'email']});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;