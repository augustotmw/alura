import {ITask} from "../../pages/tasks.interface";
import styles from './tasksList.module.scss';
import TasksListItem from "../TasksListItem";
import {ITasksList} from "./tasksList.interface";

function TasksList({ tasks }: ITasksList) {
    return (
        <aside className={styles.TasksList}>
            <h2>Tarefas: </h2>
            <ul>
                {tasks.map((task:ITask, index: number) => (
                    <TasksListItem key={index} {...task} />
                ))}
            </ul>
        </aside>
    )
}

export default TasksList;
