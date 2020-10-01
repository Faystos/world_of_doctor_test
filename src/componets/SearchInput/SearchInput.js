import React, { Component } from 'react';

export default class SearchInput extends Component {
  state = {
    value: '',
  }

  changeSearchInt = ({ target }) => {
    let value = target.value;  
    this.setState({ value });
    this.props.onValueSerh(value);
  }

  render() {
    const { value } = this.state;
    
    return(
      <div className = "blockSearchInput">
        <input className = "searchInput" id = "search"  type= "text" placeholder = "input country" value = { value } onChange = { this.changeSearchInt }/>
        <label htmlFor  ="name" className = "searchLabel">Country</label>
      </div>
    );
  }  
}