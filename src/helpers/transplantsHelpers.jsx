function transplants(elem) {
  switch (elem.stops.length) {
  case 0:
    return <p>БЕЗ ПЕРЕСАДОК</p>
  case 1:
    return <p>1 ПЕРЕСАДКА</p>
  case 2:
    return <p>2 ПЕРЕСАДКИ</p>
  default:
    return <p>3 ПЕРЕСАДКИ</p>
  }
}

export default transplants
