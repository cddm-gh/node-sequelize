import Task from "../models/Task";

const getTasks = async (req, res) => {
  try {
    const Tasks = await Task.findAll({
      order: [["id", "DESC"]]
    });

    res.json({
      data: Tasks
    });
  } catch (e) {
    res.send(e);
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const task = await Task.findByPk(id);

    res.json({
      task
    });
  } catch (error) {
    res.send(error);
  }
};

const createTask = async (req, res) => {
  const { name, done, projectid } = req.body;

  try {
    const newTask = await Task.create(
      {
        name,
        done,
        projectid
      },
      {
        fields: ["name", "done", "projectId"]
      }
    );

    if (newTask) console.log("New Task created!");

    res.json({
      msg: "Task created",
      data: newTask
    });
  } catch (e) {
    res.status(500).json({
      msg: "Hubo algún error",
      data: {}
    });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.destroy({
      where: {
        id
      }
    });

    res.json({
      msg: "Task deleted succesfully",
      count: deletedTask
    });
  } catch (error) {
    res.send(error);
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, done, projectid } = req.body;

  try {
    const task = await Task.findByPk(id);
    if (task) {
      const updatedTask = await Task.update({
        name,
        done,
        projectid
      });

      res.json({
        msg: "Task updated succesfully",
        data: updatedTask
      });
    } else {
      res.status(400).json({
        msg: "Task with id not found",
        data: {}
      });
    }
  } catch (error) {
    res.send(error);
  }
};

const getTasksByProject = async (req, res) => {
  const { projectid } = req.params;
  const tasks = await Task.findAll({
    where: { projectid }
  });

  res.json({
    data: tasks
  });
};

export default {
  getTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
  getTasksByProject
};
