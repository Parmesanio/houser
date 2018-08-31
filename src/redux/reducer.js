const initialState = {
    houseList: [],
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0
}

const GET_HOME_LIST = 'GET_HOME_LIST',
      GET_NAME      = 'GET_NAME',
      GET_ADDRESS   = 'GET_ADDRESS',
      GET_CITY      = 'GET_CITY',
      GET_STATE     = 'GET_STATE',
      GET_ZIPCODE   = 'GET_ZIPECODE';

      export default function reducer(state=initialState, action) {
          switch(action.type) {
              case GET_HOME_LIST:
                return {...state, houseList: action.payload}
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