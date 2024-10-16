import styles from './tasksListItem.module.scss';
import {ITasksListItem} from "./tasksListItem.interfaces";

export default function TasksListItem({ name, time}: ITasksListItem) {
    return (
        <li className={styles.TasksListItem}>
            <h3>{ name }</h3>
            <span>{ time }</span>
        </li>
    );
}
