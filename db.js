const {connect} = require("mongoose");

exports.dbConnect = async () => {
  try {
    connect(process.env.DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTED");
  } catch (error) {
    if (e) {
      console.log(e.message);
    }
  }
};
