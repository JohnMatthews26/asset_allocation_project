import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Assets extends Component {
  constructor(props){
    super(props);
    this.state = {
      total_holdings: 0,
      asset1: 0,
      asset2: 0,
      asset3: 0,
      asset4: 0,
      asset5: 0,
    };
    this.update = this.update.bind(this);
    this.sumTotalHoldings = this.sumTotalHoldings.bind(this);


  }

  update(e){
    return event => this.setState({[e]: event.target.value});
  }

  sumTotalHoldings(e){
    return event => this.setState({[e]:
      parseInt(this.state.asset1) +
      parseInt(this.state.asset2) +
      parseInt(this.state.asset3) +
      parseInt(this.state.asset4) +
      parseInt(this.state.asset5)
    });
  }





  render() {
    const tradesRequired = parseInt(this.state.total_holdings) !== 0;
    const inputsArr = Object.entries(this.props.assets);

    const entryCheck = tradesRequired ? (
      <div className="user-portfolio-div">
        <div className='user-asset-input'>
          {inputsArr.map(input => <label>{input[1].name}
            <input
            onChange={this.update(input[0])} placeholder='$' />
        </label>
          )}
          <button onClick={this.sumTotalHoldings('total_holdings')}></button>
        </div>
        <ul>
          {inputsArr.map(input =>
            <li>
              {input[1].amount * this.state.total_holdings * .01
                - this.state[input[0]]}
            </li>
          )}

        </ul>
      </div>
    ) : (
      <div className="user-portfolio-div">
        <div className='user-asset-input'>
          {inputsArr.map(input => <label>{input[1].name}
            <input
            onChange={this.update(input[0])} placeholder='$' />
        </label>
          )}
          <button onClick={this.sumTotalHoldings('total_holdings')}></button>
        </div>
      </div>
    );


    return(

        <div>
          {entryCheck}
        </div>

    );
  }

}
export default Assets;
