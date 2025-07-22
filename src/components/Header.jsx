import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>

            <ul className='d-flex gap-5'>

                <li>

                    <Link to='/'>
                        home page
                    </Link>
                </li>

                <li>

                    <Link to='/login'>

                        login page

                    </Link>
                </li>

            </ul>

        </header>
    )
}

export default Header
