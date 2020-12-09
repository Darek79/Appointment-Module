const { catchAsync } = require('./../utils/helperFn');
const Company = require('./../Schemas/company');

exports.createCompany = catchAsync(async (req, res, next) => {
  const created = await Company.create(req.body);

  res.status(200).json(created);
});
