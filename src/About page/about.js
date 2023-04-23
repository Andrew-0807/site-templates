import './About.scss'
import 'E:/Programming/Javascript/Learning/Site/site-templates/src/Navbar/navbar.css'
import StdNavbar from '../Navbar/StdNavbar'
import { motion } from 'framer-motion'
export default function About() {
    return (
        <div>
            <StdNavbar />
            <hr className="invsBorder" />
            <h1 className="center">About us</h1>
            <hr className="invsBorder" />
            <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.2 }}
                className="center">
                Description
            </motion.h1>

            <hr className="invsBorder-small" />

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, delay: 10.5 }}
                className="container">
                <motion.div
                    whileHover={{ x: 25, y: 0 }}
                    className="container-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </motion.div>
                <motion.hr
                    whileHover={{
                        opacity: 0.1,
                        scale: 4,
                    }}
                    className="divider"
                />
                <motion.div
                    whileHover={{ x: -25, y: 0 }}
                    className="container-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Viverra justo nec ultrices dui sapien. Fringilla
                    urna porttitor rhoncus dolor. Sem integer vitae justo eget
                    magna fermentum iaculis eu non. Felis bibendum ut tristique
                    et egestas quis ipsum.
                </motion.div>
            </motion.div>
            <div className="">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.2 }}
                    className="center">
                    Contact us
                </motion.h1>
                <div className="center">
                    <ul className="center">
                        <Socials></Socials>
                    </ul>
                </div>
            </div>
        </div>
    )
}
function Chanel(children, ...props) {
    return (
        <motion.li whileHover={{ scale: 1 }} {...props}>
            {children}
        </motion.li>
    )
}

const chanels = ['Email : ', 'Phone : ', 'Facebook : ', 'Instagram : ']
function Socials() {
    chanels.map((name, index) => {
        return (
            <div key={index}>
                <li>{name}</li>
            </div>
        )
    })
}