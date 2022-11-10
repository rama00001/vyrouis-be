const router = require("express").Router();

const data  = require("../controllers/task_controller");
const auth  = require("../controllers/auth_controller");


router.post("/api/auth/signup", auth.register);
router.post("/api/auth/signin", auth.login);
router.put("/api/tasks/:id", data.updateTask);
router.get("/api/tasks/:id", data.getTask);
router.delete("/api/tasks/:id", data.deleteTask);
router.get("/api/tasks", data.getTaskList);
router.post("/api/task/create", data.createTask);


module.exports = router;