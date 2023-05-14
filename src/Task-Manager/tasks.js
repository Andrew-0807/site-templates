/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import { motion } from 'framer-motion'
import Footer from '../Footer/footer'
import './tasks.scss'
import StdNavbar from '../Navbar/StdNavbar'
import { useState } from 'react'
import { taskList } from './Tasklist'
import { categories } from './category'

export const Tasks = () => {
    const [index, setIndex] = useState(0)
    const [value, setValue] = useState(false)
    const task = taskList[index]

    function nextTask() {
        if (index + 1 > taskList.length - 1) setIndex(0)
        else setIndex(index + 1)
    }
    function categoryText() {
        return categories.map((name, index) => (
            <li className="media" key={index}>
                {name}
            </li>
        ))
    }

    function showCategories() {
        if (value) categoryText()
        else setValue(!value)
    }

    function ShowTaskList() {
        return (
            <div id="Tasks">
                <div className=" ">
                    <div className="">
                        <div className="">
                            <motion.div></motion.div>
                            <h6
                                initial={{ x: -100, y: +20 }}
                                animate={{ x: 0, y: 0 }}>
                                {task.Title}
                            </h6>
                            <p onClick={showCategories}>
                                {value ? categoryText() : 'Show'}
                            </p>
                            <motion.button
                                id="btn-next"
                                whileTap={{ scale: 1.3, color: '#a6e3a1' }}
                                onClick={nextTask}>
                                Next
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <StdNavbar />
            <div id="Tasks">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="title">
                    Tasks
                </motion.h1>
            </div>
            <ShowTaskList />
            <Footer />
        </>
    )
}
