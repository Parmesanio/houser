const initialState = {
    houseList: [],
    home_name: '',
    address: '',
    city: '',
    home_state: '',
    zipcode: 0,
    home_url: '',
    mortgage: 0,
    rent: 0
}

const GET_HOME_LIST = 'GET_HOME_LIST',
      GET_NAME      = 'GET_NAME',
      GET_ADDRESS   = 'GET_ADDRESS',
      GET_CITY      = 'GET_CITY',
      GET_STATE     = 'GET_STATE',
      GET_ZIPCODE   = 'GET_ZIPECODE',
      GET_MORTGAGE  = 'GET_MORTGAGE',
      GET_URL       = 'GET_URL',
      GET_RENT      = 'GET_RENT';

      export default function reducer(state=initialState, action) {
          switch(action.type) {
              case GET_HOME_LIST:
                return {...state, houseList: action.payload}
            case GET_NAME:
                return {...state, home_name: action.payload}
            case GET_ADDRESS:
                return {...state, address: action.payload}
            case GET_CITY:
                return {...state, city: action.payload}
            case GET_STATE:
                return {...state, home_state: action.payload}
            case GET_ZIPCODE:
                return {...state, zipcode: action.payload}
            case GET_MORTGAGE:
                return {...state, mortgage: action.payload}
            case GET_URL:
                return {...state, home_url: action.payload}
            case GET_RENT:
                return {...state, rent: action.payload}
              default:
                return {...state}
          }
      }

      export function getHomes(houseList) {
          return {
              type: GET_HOME_LIST,
              payload: houseList
          }
      }
      export function getName(home_name) {
        return {
            type: GET_NAME,
            payload: home_name
        }
      }
      export function getAddress(address) {
        return {
            type: GET_ADDRESS,
            payload: address
        }
      }
      export function getCity(city) {
        return {
            type: GET_CITY,
            payload: city
        }
      }
      export function getState(state) {
        return {
            type: GET_STATE,
            payload: state
        }
      }
      export function getZip(zip) {
        return {
            type: GET_ZIPCODE,
            payload: zip
        }
      }
      export function getUrl(home_url) {
        return {
            type: GET_URL,
            payload: home_url
        }
      }
      export function getMortgage(mortgage) {
        return {
            type: GET_MORTGAGE,
            payload: mortgage
        }
      }
      export function getRent(rent) {
        return {
            type: GET_RENT,
            payload: rent
        }
      }