const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false, // This will prevent the password from being returned in query results
    },
    mobile_number: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dateOfBirth:{
        type: Date,
        required: true,
    },
})

// Hash and salt the password before saving the document
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

mongoose.model("User", userSchema);