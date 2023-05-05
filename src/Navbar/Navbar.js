/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.scss'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Zoom from '@mui/material/Zoom'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

function Navbar() {
    const [isShown, setIsShown] = useState(false)

    return (
        <div className="">
            <div className="inline">
                <p className="title">Example of a navbar</p>
                <FormControlLabel
                    control={
                        <Checkbox
                            variant="Outlined"
                            onChange={() => setIsShown((current) => !current)}
                            className="btn"
                        />
                    }
                />
            </div>
            <hr className="divider"></hr>

            <Box className="">
                <Zoom in={isShown} className="bg-darkish navbar">
                    <div className="" id="">
                        <a className="brand" href="">
                            Navbar
                        </a>
                        <NavLink href="/home" className=" ">
                            Home
                        </NavLink>
                        <NavLink href="/about" className="">
                            About us
                        </NavLink>
                    </div>
                </Zoom>
            </Box>
        </div>
    )
}

export default Navbar

function NavLink({ href, children, ...props }) {
    return (
        <a href={href} {...props}>
            {children}
        </a>
    )
}
