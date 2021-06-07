
export default function reducer(state = [], accions) {
  switch (accions.type) {
    case "SET_CITY":
      return { ...state, ciudadId: accions.payload }
    case "SET_CITY_NAME":
      return { ...state, ciudadName: accions.payload }
    case "SET_COUNTER":
      return { ...state, counter: accions.payload }
    case "SET_PAGE":
      return { ...state, page: accions.payload }
    default:
      return state;
  }
};

