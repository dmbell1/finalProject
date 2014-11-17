var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
   // _id:    {type:UserSchema, default: function () { return new UserSchema()} },
    userType: String,
    fName: String,
    lName: String,
    email: String,
    phoneNumber: String,
    classification: String,
    portfolioUrl: String,
    color: String,
    hashed_password: String
});
mongoose.model('User', UserSchema);