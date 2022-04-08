import React from 'react'
import Header from './Header';
import Content from './Content';



const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout
