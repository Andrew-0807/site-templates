/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import { motion } from 'framer-motion'
import Footer from '../Footer/footer'
import './tasks.scss'
import StdNavbar from '../Navbar/StdNavbar'
import { useState } from 'react'
import { taskList } from './Tasklist'
import { categories } from './category'

let selectedCategory = 'Select category'
export const Tasks = () => {
    const [index, setIndex] = useState(0)
    const [value, setValue] = useState(false)
    const task = taskList[index]

    function nextTask() {
        if (index + 1 > taskList.length - 1) setIndex(0)
        else setIndex(index + 1)
        task.category = selectedCategory
        selectedCategory = 'Select category'
    }
    function categoryText() {
        return categories.map((name, index) => (
            <motion.li
                style={{
                    display: 'inline-flex  ',
                    flexDirection: 'column',
                }}
                initial={{ scale: 0.9, x: 1, y: 10 }}
                animate={{ rotate: 0, scale: 1, x: 0, y: 0 }}
                transition={{
                    x: '0%',
                    delay: 0.1,
                    opacity: 0,
                    transition: { duration: 1 },
                    transitionEnd: { display: 'none' },
                }}
                className="media"
                key={index}
                id="selectable"
                onClick={() => handleCategorySelect(name)}>
                {name}
            </motion.li>
        ))
    }

    function showCategories() {
        if (value) categoryText()
        else setValue(!value)
    }
    function handleCategorySelect(namea) {
        selectedCategory = namea
        task.category = selectedCategory
        console.log(selectedCategory)
        setValue(!value)
    }
    function hasCategory() {
        if (task.hasOwnProperty('category')) {
            return task.category
        }
        return selectedCategory
    }
    function ShowTaskList() {
        return (
            <motion.div id="Tasks">
                <h6 initial={{ x: -100, y: +20 }} animate={{ x: 0, y: 0 }}>
                    {task.Title}
                </h6>

                <p
                    style={value ? { background: '#1e1e2e' } : {}}
                    id="dropDown"
                    onClick={showCategories}>
                    {value ? categoryText() : hasCategory()}
                </p>

                <motion.button
                    id="btn-next"
                    whileTap={{ scale: 1.3, color: '#a6e3a1' }}
                    onClick={nextTask}>
                    Next
                </motion.button>
            </motion.div>
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
