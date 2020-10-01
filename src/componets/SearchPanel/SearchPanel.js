import React, { Component } from 'react';
import ApiService from '../../services/services';
import SearchInput from '../SearchInput';
import DropPownMatch from '../DropPownMatch';
import InputSelect from '../InputSelect';

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
      .catch(this.onError);
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

  onError = err => {
    this.setState({
      error: true,
      load: false
    });
  }

  renderItem(arr, index, searchValue) {
    const reg = new RegExp("^[a-zA-Z]+$");    
    let items = [];
    let quantity = index > arr.length ? arr.length : index;    
    for (let i = 0; i < quantity; i++) {      
      items.push(<span className ="matchItem" key={arr[i].countryID}>{`${i + 1}. ${arr[i].countryName}`} <img className = "matchImg" src={arr[i].imgFlag} alt={arr[i].countryName} /></span>);
    }
    if (!items.length) items = 'Такого значения не существует';
    if (!reg.test(searchValue)) items = 'Только латинские символы';
    return items;      
  }

  render () {
    const { data, load, error, searchValue, selectValue } = this.state;
    const viewDropPownMatch = searchValue ? <DropPownMatch data = { data } load = { load } error = { error } renderItem = { this.renderItem } searchValue= { searchValue } selectValue = { selectValue }/> : null;
    
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