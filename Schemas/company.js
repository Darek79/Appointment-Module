const { Schema, model } = require('mongoose');
const { v4 } = require('uuid');
const companySchema = new Schema({
  id: String,
  name: {
    type: String,
  },
  branch: {
    type: String,
  },
  available: {
    type: [String],
  },
});
companySchema.pre('save', function (next) {
  this.id = this.name + v4();

  next();
});

const Company = model('Company', companySchema);

module.exports = Company;
