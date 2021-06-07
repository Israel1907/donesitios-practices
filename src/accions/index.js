
export function setCity(payload = "") {
  return { type: "SET_CITY", payload }
}

export function setCityName(payload = "") {
  return { type: "SET_CITY_NAME", payload }
}

export function setCounter(payload = 0) {
  return { type: "SET_COUNTER", payload }
}

export function setPage(payload = "") {
  return { type: "SET_PAGE", payload }
}