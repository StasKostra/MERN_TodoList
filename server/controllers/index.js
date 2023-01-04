import ToDo from "../model/Todo.js"

export const getTodo = async (req, res) => {
    try {
        const todos = await ToDo.find()
        res.status(200).json({ todos })
    } catch (err) {
        throw err
    }
};

export const addTodo = async (req, res) => {
    try {
        const { text,_id } = req.body;
        const todo = new ToDo({ text,_id })
        const newTodos = await todo.save()
        const AllTodos = await ToDo.find()
        return res.status(201).json({ todo: newTodos, todos: AllTodos })
    } catch (err) {
        throw err
    }
}

export const removeTodo = async (req, res) => {
    try {
        const { _id } = req.body
        const deleteTodo = await ToDo.findByIdAndDelete(_id)
        const AllTodos = await ToDo.find()
        return res.status(200).json({ todo: deleteTodo, todos: AllTodos })
    } catch (err) {
        throw err
    }
}

