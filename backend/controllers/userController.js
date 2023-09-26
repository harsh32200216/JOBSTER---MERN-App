const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

exports.allUsers = async (req, res, next) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await User.find({}).estimatedDocumentCount();
    try {
        const users = await User.find().sort({ createdAt: -1 })
            .select('-password')
            .skip(pageSize * (page - 1))
            .limit(pageSize)
        res.status(200).json({
            success: true,
            users,
            page,
            pages: Math.ceil(count / pageSize),
            count
        })
        next();
    }
    catch (error) {
        return next(error);
    }
}

exports.singleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            user
        })
        next();
    }
    catch (error) {
        return next(error);
    }
}

exports.editUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            user
        })  
        next();
    }
    catch (error) {
        return next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            message: "User deleted"
        })
        next();
    }
    catch (error) {
        return next(error);
    }
}

exports.createUserJobsHistory = async (req, res, next) => {
    const { job_id, creater_id, title, description, salary, location } = req.body;
    try {
        const currentUser = await User.findOne({ _id: req.user._id });
        if (!currentUser) {
            return next(new ErrorResponse("You must log In", 401));
        }
        else {
            for (let i in currentUser.jobsHistory) {
                if (String(currentUser.jobsHistory[i].job_id) === String(job_id)) {
                    return next(new ErrorResponse("Already registered", 401));
                }
            }
            const addJobHistory = {
                job_id,
                creater_id,
                title,
                description,
                salary,
                location,
                user: req.user._id
            }
            currentUser.jobsHistory.push(addJobHistory);
            await currentUser.save();
        }
        res.status(200).json({
            success: true,
            currentUser
        })
        next();
    }
    catch (error) {
        return next(error);
    }
}