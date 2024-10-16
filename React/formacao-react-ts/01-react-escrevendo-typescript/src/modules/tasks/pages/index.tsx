import {TasksForm} from "../components/TasksForm";
import TasksList from "../components/TasksList";
import styles from './tasks.module.scss';
import TasksChrono from "../components/TasksChrono";
import {useState} from "react";
import {ITask} from "./tasks.interface";

function Tasks() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    return (
        <section className={styles.TasksStyle}>
            <TasksForm { ...{setTasks} } />
            <TasksList { ...{tasks} } />
            <TasksChrono />
        </section>
    )
}

export default Tasks;
