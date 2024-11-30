import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='p-3 border-bottom'>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <Link class="navbar-brand" to="/"><img src='media/images/logo.svg' style={{ width: "25%" }} /></Link>
                    <button class="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-label='Toggle navigation'>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collaps navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link custom-nav" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link custom-nav" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link custom-nav" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link custom-nav" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link custom-nav" to="/support">Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;