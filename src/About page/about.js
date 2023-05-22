import './About.scss'
import '../Navbar/navbar.scss'
import StdNavbar from '../Navbar/StdNavbar'
import { motion } from 'framer-motion'
export default function About() {
    return (
        <div id="About">
            <StdNavbar />
            <br className="phone" />
            <motion.h1
                initial={{ opacity: 0, x: 100 }}
                transition={{ type: 'spring', stiffness: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="center">
                About us
            </motion.h1>
            <br className="phone x2" />

            <motion.h1
                initial={{ scale: 0.1 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="center">
                Description
            </motion.h1>

            <br className="phone" />

            <motion.div className="storage">
                <motion.div
                    className="block"
                    whileHover={{ scale: 1.3, x: 200 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </motion.div>

                <motion.div
                    className="block"
                    whileHover={{ scale: 1.3, x: -200 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Viverra justo nec ultrices dui sapien. Fringilla
                    urna porttitor rhoncus dolor. Sem integer vitae justo eget
                    magna fermentum iaculis eu non. Felis bibendum ut tristique
                    et egestas quis ipsum.
                </motion.div>
            </motion.div>
            <div className="">
                <br className="" />
                <motion.h1
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    className="center">
                    Contact us
                </motion.h1>
                <br className="" />
                <div className="">
                    <Socials />
                </div>
            </div>
        </div>
    )
}

const chanels = ['Email : ', 'Phone : ', 'Facebook : ', 'Instagram : ']
function Socials() {
    return (
        <ul className="media">
            {chanels.map((name, index) => (
                <li className="media" key={index}>
                    {name}
                </li>
            ))}
        </ul>
    )
}
