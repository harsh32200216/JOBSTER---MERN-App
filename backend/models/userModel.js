const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = mongoose.Schema;

const jobsHistorySchema = new mongoose.Schema({
    job_id: {
        type: ObjectId,
        ref: "Job",
        unique: true
    },
    creater_id: {
        type: ObjectId,
        ref: "Creater"
    },
    title: {
        type: String,
        trim: true,
        maxlength: 70,
    },
    description: {
        type: String,
        trim: true
    },
    salary: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
    },
    interviewDate: {
        type: Date,
    },
    applicationStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
}, { timestamps: true })

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, "First name is required"],
        maxlength: 32,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last name is required"],
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        required: [true, "E-mail is required"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email"
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is required"],
        minlength: [6, "Password must have at least (6) caracters"],
    },
    jobsHistory: [jobsHistorySchema],
    role: {
        type: Number,
        default: 0
    },
    fatherName: {
        type: String,
        trim: true,
        maxlength: 32,
    },
    motherName: {
        type: String,
        trim: true,
        maxlength: 32,
    },
    address: {
        type: String,
        trim: true,
        maxlength: 200,
    },
    education10:
    {
        institute: {
            type: String,
            trim: true,
            maxlength: 100,
        },
        passingYear: {
            type: Number,
            trim: true,
            maxlength: 4,
        },
        marks: {
            type: String,
            trim: true,
            maxlength: 5,
        }
    },
    education12:
    {
        institute: {
            type: String,
            trim: true,
            maxlength: 100,
        },
        passingYear: {
            type: Number,
            trim: true,
            maxlength: 4,
        },
        marks: {
            type: String,
            trim: true,
            maxlength: 5,
        }
    },
    educationBachelor:
    {
        institute: {
            type: String,
            trim: true,
            maxlength: 100,
        },
        passingYear: {
            type: Number,
            trim: true,
            maxlength: 4,
        },
        marks: {
            type: String,
            trim: true,
            maxlength: 5,
        }
    },
    skills: {
        type: String,
        trim: true
    },
    convenientLocations: {
        type: String,
        trim: true
    },
    resumeLink: {
        type: String,
    }
}, { timestamps: true })

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}

module.exports = mongoose.model("User", userSchema);