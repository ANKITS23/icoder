import { useState, useEffect } from "react";
import Api2 from "./fetch.js"

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div className="main-container">
              <div className="wrapper ">
                <div className=" data-container dark:bg-black">
                  <u>
                    <li>
                      <p className="bg-red-100 my-2 ml-5" key={item.id}>
                        {item.title}
                      </p>
                    </li>
                  </u>
                  <Api2/>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};






export default Fetch;
