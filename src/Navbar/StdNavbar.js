import { motion } from 'framer-motion'
import './navbar.scss'

export default function StdNavbar() {
    return (
        <motion.div className=" navbar gadient">
            <motion.a
                animate={{ x: 100 }}
                whileHover={{ scale: 1.2, rotate: 100 }}
                className="brand "
                href="/home"
                style={{ background: 'none' }}>
                Home
            </motion.a>

            <NavLink href="/about" className="" style={{ background: 'none' }}>
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
