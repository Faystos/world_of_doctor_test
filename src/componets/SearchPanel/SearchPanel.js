import React, { Component } from 'react';
import ApiService from '../../services/services';
import Loader from '../Loader';

export default class SearchPanel extends Component {
  apiService = new ApiService();

  state = {
    data: null,    
    load: true,
    error: false,
    searchValue: '',
    selectValue: 10,
  } 

  onLoadData = (value) => {
    this.apiService.sortCountries(value)
      .then(data => this.setState({ data, load: false}))
      .catch(err => console.log(err));
  }

  onValueSerh = value => {
    this.setState(({searchValue}) => {
      return {searchValue: value};
    }); 
    this.onLoadData(value);       
  }

  onValueSelect = ({target}) => {
    let value = target.value;
    this.setState(({selectValue}) => {
      return { selectValue: value }
    });
  }

  renderItem(arr, index, searchValue) {
    const reg = new RegExp("^[a-zA-Z]+$");    
    let items = [];
    let quantity = index > arr.length ? arr.length : index;    
    for (let i = 0; i < quantity; i++) {      
      items.push(<span className ="matchItem" key={arr[i].countryID}>{`${arr[i].countryName}`} <img className = "matchImg" src={arr[i].imgFlag} alt={arr[i].countryName} /></span>);
    }
    if (!items.length) items = 'Такого значения не существует';
    if (!reg.test(searchValue)) items = 'Только латинские символы';
    return items;      
  }

  render () {
    const { data, load, searchValue, selectValue } = this.state;
    const viewDropPownMatch = searchValue ? <DropPownMatch data = { data } load = { load } renderItem = { this.renderItem } searchValue= { searchValue } selectValue = { selectValue }/> : null;
    
     
    
    return(
      <section className="searchPanel">
        <div className = "blockInp">
          <SearchInput onValueSerh = { this.onValueSerh }/>
          <InputSelect onValueSelect = { this.onValueSelect }/>          
        </div>        
        { viewDropPownMatch }        
      </section>      
    );
  }
}

// ********************************************************************

class SearchInput extends Component {
  state = {
    value: '',
  }

  changeSearchInt = ({target}) => {
    let value = target.value;  
    this.setState({ value });
    this.props.onValueSerh(value);
  }

  render() {
    const { value } = this.state;
    
    return(
      <div className="blockSearchInput">
        <input className = "searchInput" id="search"  type= "text" placeholder="input country" value = {value} onChange = {this.changeSearchInt}/>
        <label for="name" class="searchLabel">Country</label>
      </div>
    );
  }  
}

// ************************************************************************

const DropPownMatch = ({ data, load, renderItem, searchValue, selectValue }) => {    
  const hasData = (data && !load);
  let viewLoader = load ? < Loader /> : null;
  let viewItem = hasData ? renderItem(data, selectValue, searchValue) : null;      
  return(
    <div className="blockMatch">
      { viewLoader }
      { viewItem }
    </div>
  );  
}

const InputSelect = ({onValueSelect}) => {

  return(
    <React.Fragment>
      <select className="inpSelect" onChange = { onValueSelect }>
        <option value='10' selected>10</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
    </React.Fragment>
  );
}