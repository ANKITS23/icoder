import React, { Component } from 'react';



class Api2 extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log("Error come");
    }
}

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}



export default Api2;
