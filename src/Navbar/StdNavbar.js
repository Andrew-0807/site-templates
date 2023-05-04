import { motion } from 'framer-motion'
import './navbar.css'

export default function StdNavbar() {
    return (
        <motion.div className="bg-darkish navbar">
            <motion.a
                animate={{ x: 100 }}
                whileHover={{ scale: 1.2, rotate: 100 }}
                className="brand"
                href="/site-templates/home">
                Home
            </motion.a>

            <NavLink href="/site-templates/about" className="">
                About us
            </NavLink>
        </motion.div>
    )
}
function NavLink({ href, children, ...props }) {
    return (
        <motion.a
            whileHover={{ scale: 1.2, rotate: 180 }}
            href={href}
            {...props}>
            {children}
        </motion.a>
    )
}
