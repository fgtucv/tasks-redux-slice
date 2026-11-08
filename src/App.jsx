import { HeaderTask } from "./components/HeaderTask/HeaderTask.jsx";
import { AddTask } from "./components/AddTask/AddTask.jsx";
import { TasksList } from "./components/TasksList/TasksList.jsx";

function App() {
  return (
    <>
      <HeaderTask/>
      <AddTask/>
      <TasksList/>
    </>
  )
}

export default App