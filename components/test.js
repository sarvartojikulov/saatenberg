const { element } = require("prop-types")

const a = {"conv_products": [
  {
    "name": "Dried Vegetables",
    "id": 1,
    "items" : [
      {
          "id": 8412,
          "name": "Red bell pepper",
          "origin": "",
          "quality": "99% up",
          "color": "#68b76f",
          "countries": [
              {
                  "name": "UZB",
                  "month": [
                      "Jul",
                      "Aug",
                      "Sep"
                  ]
              },
              {
                  "name": "CHI",
                  "month": [
                      "Aug",
                      "Sep",
                      "Oct"
                  ]
              },
              {
                  "name": "UKR",
                  "month": [
                      "Jul",
                      "Aug"
                  ]
              }
          ]
      },
      {
          "id": 9342,
          "name": "Green bell pepper",
          "origin": "",
          "quality": "99% up",
          "color": "#11c6b",
          "countries": [
              {
                  "name": "UZB",
                  "month": [
                      "Jul",
                      "Aug",
                      "Sep"
                  ]
              },
              {
                  "name": "CHI",
                  "month": [
                      "Aug",
                      "Sep"
                  ]
              },
              {
                  "name": "UKR",
                  "month": [
                      "Jul",
                      "Aug"
                  ]
              }
          ]
      },
      {
          "id": 233,
          "name": "Red Beetroot",
          "origin": "",
          "quality": "99% up",
          "color": "#7cec6c",
          "countries": [
              {
                  "name": "UZB",
                  "month": [
                      "Feb",
                      "Nov",
                      "Dec"
                  ]
              },
              {
                  "name": "POL",
                  "month": [
                      "Oct",
                      "Nov"
                  ]
              },
              {
                  "name": "CHI",
                  "month": [
                      "Oct",
                      "Nov",
                      "Dec"
                  ]
              }
          ]
      },
      {
          "id": 5856,
          "name": "Carrot",
          "origin": "",
          "quality": "99% up",
          "color": "#862350",
          "countries": [
              {
                  "name": "UZB",
                  "month": [
                      "Feb",
                      "Nov",
                      "Dec"
                  ]
              },
              {
                  "name": "POL",
                  "month": [
                      "Oct",
                      "Nov"
                  ]
              },
              {
                  "name": "CHI",
                  "month": [
                      "Oct",
                      "Nov",
                      "Dec"
                  ]
              }
          ]
      },
      {
          "id": 5587,
          "name": "Parsnip",
          "origin": "",
          "quality": "99% up",
          "color": "#a04836",
          "countries": [
              {
                  "name": "UZB",
                  "month": [
                      "Feb",
                      "Nov",
                      "Dec"
                  ]
              },
              {
                  "name": "POL",
                  "month": [
                      "Oct",
                      "Nov"
                  ]
              },
              {
                  "name": "CHI",
                  "month": [
                      "Oct",
                      "Nov",
                      "Dec"
                  ]
              }
          ]
      },
      {
          "id": 484,
          "name": "Topinambur",
          "origin": "",
          "quality": "99% up",
          "color": "#8d3c25",
          "countries": []
      },
      {
          "id": 5753,
          "name": "Onion",
          "origin": "",
          "quality": "99% up",
          "color": "#f9e6f8",
          "countries": [
              {
                  "name": "UZB",
                  "month": [
                      "May",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec"
                  ]
              },
              {
                  "name": "CHI",
                  "month": [
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec"
                  ]
              },
              {
                  "name": "IND",
                  "month": [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun"
                  ]
              },
              {
                  "name": "EGY",
                  "month": [
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep"
                  ]
              }
          ]
      },
      {
          "id": 592,
          "name": "Leek",
          "origin": "",
          "quality": "99% up",
          "color": "#f4406b",
          "countries": []
      }
  ]
  }

]}




const productitem1 = a.conv_products[0]
const data = a.conv_products

console.log(productitem1)

const getAllCountriesOfProduct = (product) => {
  const allCountries = product.items.map((item) => item.countries)
  return [].concat.apply([],allCountries).map(item => item.name).filter((item, index, arr) => arr.indexOf(item) === index )
}

const products_countries = getAllCountriesOfProduct(productitem1)
console.log(products_countries)
const keys_months = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul", "Aug","Sep","Oct", "Nov", "Dec"]





const final1 = products_countries.map(county => {
    let items_in_calendar = keys_months.map(key_month => {
        let temp_item = []
        productitem1.items.forEach(item=> {
            const {id, name, color, countries} = item;
            if(countries.length > 0){
                return countries.forEach(({name, month}) => {
                    if(name === county && month.includes(key_month)){
                        temp_item.push({
                            name: item.name,
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


const getCalendarData = (product) => {
    const products_countries = getAllCountriesOfProduct(product)
    return products_countries.map(county => {
        let items_in_calendar = keys_months.map(key_month => {
            let temp_item = []
            product.items.forEach(item=> {
                const {countries} = item;
                if(countries.length > 0){
                    return countries.forEach(({name, month}) => {
                        if(name === county && month.includes(key_month)){
                            temp_item.push({
                                name: item.name,
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

console.log(getCalendarData(productitem1))



console.log(data.find(item => item.id == "1"))