import { useSelector } from "react-redux";

import { TaskItem } from "./components/TasksItem/TasksItem.jsx";

export const TasksList = () => {
    const { tasks, status } = useSelector((state) => state.tasks);

    const getRenderTasks = () => {
        if (status === "all") {
            return tasks
        } else if (status === "active") {
            return tasks.filter((t) => t.completed)
        } else if (status === "completed") {
            return tasks.filter((t) => !t.completed)
        }
    };

    const renderedTasks = getRenderTasks();

    return (
        <ul className="mt-4">
            {renderedTasks.map((task) => <TaskItem key={task.id} task={task} />)}
        </ul>
    )
};