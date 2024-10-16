import {ITask} from "../../pages/tasks.interface";

export interface ITaskFormProps {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}
