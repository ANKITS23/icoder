
 function Data(props) {

    return (
        <div>
    <h1 className="dark:text-white">Hello, {props.name}</h1>
    <span className="dark:text-gray-500">
       ${props.value}
    </span>
    </div>
    );
    
  }
  
  function Show() {
    return (
      <div>
         <div className="main-container">
      <div className="wrapper ">
        <div className=" Show-container  ">
        <Data name="prop1" value="500"/>
        <Data name="prop2" value="800" />
        <Data name="prop3"value="400" />

        </div>
        
        </div>
        </div>
      </div>
    );
  }
  export default Show;