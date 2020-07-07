import React from 'react'
import { Link } from 'gatsby';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/image-gallery">Image Gallery</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
