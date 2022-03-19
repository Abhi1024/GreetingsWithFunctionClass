import React from "react";

var d = new Date();
d = d.getHours();
let greeting = '';

if (d>=13 && d< 17) 
{
    greeting = 'Good After';
}
else if (d>=17 && d<20)
{
    greeting = "Good Evening";
} 
else if (d<=20) {
    greeting = "Good Night";
}
else{
    greeting = "Error !"
}

const Greeting=()=>{
    return(
        <>
            <h1 className="greeting">Greeting {greeting}</h1>
        </>
    );
}

export default Greeting;