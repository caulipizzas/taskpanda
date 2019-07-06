const Sequelize = require('sequelize')
const db = require('../db')

const Worker = db.define('worker', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mailingAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  skills: {
    type: Sequelize.ARRAY(Sequelize.STRING)
    // allowNull: false
  }
})

module.exports = Worker
