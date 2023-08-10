import React, {useState} from "react";

const App1 = () =>{

    const [fullName, setFullName] = useState({
        fname : "",
        lname : "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue) => {
            console.log(preValue);
        });
    };

    const onSubmits = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                <h1>hello {fullName.fname} {fullName.lname}</h1>
                <input type="text" 
                    placeholder="Enter your Name" 
                    onChange={inputEvent} 
                    name='fname'
                    //value={fullName.fname} 
                    />
                <br />
                <br />
                <input type="text" 
                    placeholder="Enter your Last Name" 
                    onChange={inputEvent} 
                    name='lname'
                    //value={fullName.lname} 
                    />
                <button type="submit">Click me </button>
                </form>
            </div>
        </>
    )
}


export default App1;
