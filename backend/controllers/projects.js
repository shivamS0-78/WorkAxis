import Project from "../model/projects.js"

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({
            $or: [
                { "members.user": req.user._id },
                { createdBy: req.user._id }
            ]
        })
            .populate("tasks", "status")
            .sort({ createdAt: -1 });

        res.status(200).json({ projects });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error",
        })
    }
};


const createProjects = async (req, res) => {
    try {

        const { title, description, status, startDate, dueDate, tags, members } = req.body;

        // const isMember = projects.members.some((member) => member.user.toString() === req.user._id.toString());

        // if(!isMember){
        //     return res.status(403).json({
        //         message : "You are not a member of this project"
        //     })
        // }

        const tagsArray = tags ? tags.split(",") : [];

        const newProject = await Project.create({
            title,
            description,
            status,
            startDate,
            dueDate,
            tags: tagsArray,
            members,
            createdBy: req.user._id,
        });

        await newProject.save();

        res.status(201).json({ project: newProject, message: "Project created successfully" });

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Sever Error",
        });
    }
}

export { getProjects, createProjects };