
 function Data(props) {

    return (
        <div>
    <h1>Hello, {props.name}</h1>
    <span>
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
        <Data name="abc" value="500"/>
        <Data name="def" value="800" />
        <Data name="ghj"value="400" />

        </div>
        
        </div>
        </div>
      </div>
    );
  }
  export default Show;