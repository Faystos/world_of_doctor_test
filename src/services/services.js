export default class ApiService {
  _apiUrl = 'https://restcountries.eu/rest/v2/all';  

  async getResource() {
    try {
      const res = await fetch(this._apiUrl);
      return await res.json();
    } catch (error) {
      throw new Error(`Ошибка загрузки ${error}.`);
    }
  }

  async getAllCountries() {
    const res = await this.getResource();
    return res.map(this._transformCountries);
  }

  async sortCountries(value) {
    const res = await this.getAllCountries();
    const sortRes = this.filterData(res, value);
    return sortRes;
  }

  filterData = (arr, seachValue) => {    
    let newArr = [];
    let valuelLength = seachValue.length;   

    if (valuelLength > 0) {
      for(let i = 0; i < arr.length; i++) {
        let example = arr[i].countryName.split('').slice(0,valuelLength).join('');
          if(example.toLowerCase() === seachValue.toLowerCase()) {
            newArr.push(arr[i]);
          }
      }
    } else { newArr = null }
    return newArr;
  }

  _transformCountries = country => {
    return {
      countryID: `${country.cioc}${country.numericCode}`,
      countryName: `${country.name}`,
      imgFlag: `${country.flag}`
    }
  }
}