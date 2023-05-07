import { motion } from 'framer-motion'
import './navbar.scss'

export default function StdNavbar() {
    return (
        <motion.div className=" navbar gadient">
            <a
                animate={{ x: 100 }}
                whileHover={{ scale: 1.2, rotate: 100 }}
                className="brand "
                style={{ background: 'none' }}
                href="/home">
                Home
            </a>

            <NavLink href="/about" className="">
                About us
            </NavLink>
            <NavLink href="/" className="end">
                Root
            </NavLink>
        </motion.div>
    )
}
function NavLink({ href, children, ...props }) {
    return (
        <a
            style={{ background: 'none' }}
            whileHover={{ scale: 1.2 }}
            href={href}
            {...props}>
            {children}
        </a>
    )
}
