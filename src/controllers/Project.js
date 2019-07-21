import Project from "../models/Project";

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();

    res.json({
      data: projects
    });
  } catch (e) {
    res.send(e);
  }
};

const getProjectById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const project = await Project.findByPk(id);

    res.json({
      project
    });
  } catch (error) {
    res.send(error);
  }
};

const createProject = async (req, res) => {
  const { name, priority, description, deliveryDate } = req.body;

  try {
    const newProject = await Project.create(
      {
        name,
        priority,
        description,
        deliveryDate
      },
      {
        fields: ["name", "priority", "description", "deliveryDate"]
      }
    );

    if (newProject) console.log("New Project created!");

    res.json({
      msg: "Project created",
      data: newProject
    });
  } catch (e) {
    res.status(500).json({
      msg: "Hubo algún error",
      data: {}
    });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProject = await Project.destroy({
      where: {
        id
      }
    });

    res.json({
      msg: "Project deleted succesfully",
      count: deletedProject
    });
  } catch (error) {
    res.send(error);
  }
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description, deliveryDate } = req.body;

  try {
    const project = await Project.findByPk(id);
    if (project) {
      const updatedProject = await project.update({
        name,
        priority,
        description,
        deliveryDate
      });

      res.json({
        msg: "Project updated succesfully",
        data: updatedProject
      });
    } else {
      res.status(400).json({
        msg: "Project with id not found",
        data: {}
      });
    }
  } catch (error) {
    res.send(error);
  }
};

export default {
  getProjects,
  getProjectById,
  createProject,
  deleteProject,
  updateProject
};
