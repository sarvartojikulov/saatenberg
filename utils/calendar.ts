export type Country = {
  name: string;
  month: string[];
};
export interface Item {
  id: number;
  name: string;
  origin: string;
  quality: string;
  color: string;
  countries: Country[];
}

export type Product = {
  name: string;
  id: number;
  items: Item[];
};



const keys_months = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul", "Aug","Sep","Oct", "Nov", "Dec"]


const getAllCountriesOfProduct = (product : Product) => {
  const allCountries : any = product.items.map((item : Item) => item.countries)
  return [].concat.apply([], allCountries).map((item : Country) => item.name).filter((item, index, arr) => arr.indexOf(item) === index )
}

const getCalendarData = (product : Product) => {
  const products_countries = getAllCountriesOfProduct(product)
  return products_countries.map(county => {
      let items_in_calendar = keys_months.map(key_month => {
          let temp_item : any[] = []
          product.items.forEach(item=> {
              const {countries} = item;
              if(countries.length > 0){
                  return countries.forEach(({name, month}) => {
                      if(name === county && month.includes(key_month)){
                          temp_item.push({
                              id: item.id,
                              color: item.color
                          })
                      }
                  })
              }
          })
          return { month: key_month, items : temp_item}
      })
  
      
      return {
          country : county,
          data : items_in_calendar
      }
  })
}

export {getCalendarData, keys_months}