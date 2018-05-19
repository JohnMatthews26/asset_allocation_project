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
    const divVar =
      <div className='user-asset-input'>
        {inputsArr.map(input => <label key={input[1].name} className='trades'>
        <span className='asset-name'>{input[1].name}</span>
        <input key={input[1].name}
        onChange={this.update(input[0])} placeholder='$'
        className='userAmount'/>
      </label>
        )}
        <button onClick={this.sumTotalHoldings('total_holdings')}
          className='show-trades-button'>Optimize My Portfolio
        </button>
      </div>
    ;

    const sellBuyCheck = (trade)=>{
      if (trade[1].amount * this.state.total_holdings * .01 - this.state[trade[0]] < 0){
        return 'neg-trades';
      } else {
        return 'pos-trades';
      }
    };

    const negPosCheck = (trade)=>{
      if (trade[1].amount * this.state.total_holdings * .01 - this.state[trade[0]] < 0){
        return 'Sell';
      } else {
        return 'Buy';
      }
    };


    const entryCheck = tradesRequired ? (
      <div className="user-portfolio-div">
      {divVar}
        <ul className='trades-ul'>
          {inputsArr.map(trade =>
            <li key={trade[1].name} className={sellBuyCheck(trade)}>
                <span className='trade-rec-span'>
                  {negPosCheck(trade)}
                </span>
                <span className='trade-assetclass'>
                  {trade[1].name}
                </span>
                <span className='dollar-amt'>
                ${trade[1].amount * this.state.total_holdings * .01
                  - this.state[trade[0]]}
                </span>
              </li>
          )}
        </ul>
      </div>
    ) : (
      <div className="user-portfolio-div">
        {divVar}
      </div>
    );


    return(

        <div className='trade-recommendations-div'>
          {entryCheck}
        </div>

    );
  }

}
export default Assets;
