import React from 'react'
import Footer from './footer/Footer';
import Header from './header/Header';

const AuthLayout = ({ children, ...props }: any) => {


    return (
        <div>
            <Header /> 
            <div {...props}>{children}</div>
            <Footer/>
        </div>
    )
}

export default AuthLayout