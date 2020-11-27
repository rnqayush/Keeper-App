import React from "react"
function Footer(){
    var date=new Date().getFullYear();

    return (<div >
        <span>&copy;copyright {date} </span>
    </div>)
}
export default Footer