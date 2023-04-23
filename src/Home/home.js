/* eslint-disable jsx-a11y/img-redundant-alt */
import Footer from '../Footer/footer'
import StdNavbar from '../Navbar/StdNavbar'
import './home.scss'
import { motion } from 'framer-motion'

import img1 from './img.jpg'

export default function Home() {
    return (
        <>
            <StdNavbar />
            <main className="container">
                <motion.h1
                    animate={{ y: 100, x: 10, rotate: 360 }}
                    whileHover={{
                        scale: 1.5,
                        transition: { y: 100, x: 10, rotate: 360 },
                    }}
                    className="container hover">
                    Product/store title
                </motion.h1>
                <motion.img drag src={img1} alt="Image" className="image" />
            </main>
            <hr className="invsBorder" />
            <content>
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
                        whileHover={{ x: -25, y: 0 }}
                        className="container-right">
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
        </>
    )
}
