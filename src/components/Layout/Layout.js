import React from 'react';
import Navbar from './Navigation/Navigation';
import Footer from './Footer/Footer';
import "./Layout.css";

const Layout = props => {
    const layoutClasses = ["layout-main", props.mainClassName].join(' ')
    return (
        <div className="layout-container">
            <Navbar />
            <main className={layoutClasses}>
                {props.children}
            </main>

            <Footer className="layout-footer" />
        </div>

    )
}

export default Layout
