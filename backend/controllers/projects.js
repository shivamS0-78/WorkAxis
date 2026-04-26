import Project from "../model/projects.js"

const getProjects = async(req, res)=>{
    try{
        const projects = await Project.find({
            members : { $in: [req.user._id]}
        })
        .populate("tasks" , "status")
        .sort({createdAt : -1});

        res.status(200).json({ projects });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message : "Internal server error",
        })
    }
};

export {getProjects} ;