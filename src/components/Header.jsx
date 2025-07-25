import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-primary py-0">
            <div className="container-fluid bg-primary text-white">
                <Link className="navbar-brand fw-bold fs-2 text-white" to="/">Flipkart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to='/cart'>Cart</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to='/testing-props'>Testing</Link>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>

                    <button className="btn btn-warning mx-3">
                        <Link className="nav-link active text-white" aria-current="page" to='/login'>Login</Link>
                    </button>
                    <button className="btn btn-warning">
                        <Link className="nav-link active text-white" aria-current="page" to='/register'>Register</Link>
                    </button>

                </div>
            </div>
        </nav>
    )
}

export default Header
