/* eslint-disable jsx-a11y/img-redundant-alt */
import Footer from '../Footer/footer'
import StdNavbar from '../Navbar/StdNavbar'
import './home.scss'
import { motion } from 'framer-motion'

import img1 from './img.jpg'

export default function Home() {
    return (
        <div id="home">
            <StdNavbar />
            <main className="">
                <motion.h1
                    animate={{}}
                    whileHover={{
                        scale: 1.5,
                        transition: {},
                    }}
                    className=""
                    id="Title-middle">
                    Product/store title
                </motion.h1>
                <motion.img drag src={img1} alt="Image" className="image" />
            </main>
            <hr className="invsBorder" />
            <content>
                <h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.2 }}
                    className=""
                    id="Title-middle">
                    Description
                </h1>
                <hr className="invsBorder" />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0, delay: 10.5 }}
                    className="storage">
                    <motion.div
                        whileHover={{}}
                        initial={{ x: 25 }}
                        className="block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </motion.div>
                    <motion.hr
                        whileHover={{
                            opacity: 0.1,
                            scale: 4,
                        }}
                        className="divider"
                    />
                    <motion.div
                        whileHover={{}}
                        initial={{ x: -25 }}
                        className="block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Viverra justo nec ultrices dui sapien.
                        Fringilla urna porttitor rhoncus dolor. Sem integer
                        vitae justo eget magna fermentum iaculis eu non. Felis
                        bibendum ut tristique et egestas quis ipsum.
                    </motion.div>
                </motion.div>
            </content>
            <Footer />
        </div>
    )
}
