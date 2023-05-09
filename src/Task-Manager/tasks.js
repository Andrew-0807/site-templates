import { motion } from 'framer-motion'
import Footer from '../Footer/footer'
import './tasks.scss'
import StdNavbar from '../Navbar/StdNavbar'

export const Tasks = () => {
    return (
        <div id="Tasks">
            <StdNavbar />
            <div className="start ">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="title">
                    Tasks
                </motion.h1>
                <div className="tasks.container">
                    <div className="task">
                        <ShowTasks />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

const taskList = [
    { Title: 'Hello ', Description: 'This is a task' },
    { Title: 'Bye ', Description: 'This is a task' },
]
function ShowTasks(childeren, ...props) {
    return (
        <ul className="taskList">
            {taskList.map((task, index) => (
                <li className="task" key={index}>
                    <h6 className=""> {task.Title}</h6>
                </li>
            ))}
        </ul>
    )
}
