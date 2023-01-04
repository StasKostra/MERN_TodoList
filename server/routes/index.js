import { Router } from "express";
import { addTodo, getTodo, removeTodo } from "../controllers/index.js";

const router = Router()

router.get('/todos', getTodo)
router.post('/add-todo', addTodo)
router.post('/remove-todo', removeTodo)

export default router