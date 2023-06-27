import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies

function ProtectedRoutes(props) {
    console.log(props.children)

    //get cookie from browser if user is logged in

    const token = cookies.get("TOKEN")
    if (token) {
        return (
            <div>
                {props.children}
            </div>
        )
    } else {
        window.location.href = '/';
    }


}

export default ProtectedRoutes