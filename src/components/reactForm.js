

function reactForm() {
     return (
          <div>
               <form method="post" action="/addname">
                    <label>Enter Your Names</label>
                    <input type="text" name="firstName" placeholder="Enter first name..." required="true"></input>
                    <input type="text" name="lastName" placeholder="Enter last name..." required="true"></input>
                    <input type="submit" value="Add Name"></input>
               </form>
          </div>
     );
}


export default reactForm;