import { useSelector } from "react-redux";

import { TaskItem } from "./components/TasksItem/TasksItem.jsx";

export const TasksList = () => {
    const { tasks } = useSelector((state) => state.tasks);

    return (
        <ul className="mt-4">
            {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        </ul>
    )
};