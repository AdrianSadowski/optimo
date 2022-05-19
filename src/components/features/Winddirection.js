function getWindDirection(d) {
  if (d === 0) {
    return 'N';
  } else if (d === 360) {
    return 'N';
  } else if (d === 90) {
    return 'E';
  } else if (d === 180) {
    return 'S';
  } else if (d === 270) {
    return 'W';
  } else if (d > 0 && d < 90) {
    return 'NE';
  } else if (d > 90 && d < 180) {
    return 'SE';
  } else if (d > 180 && d < 270) {
    return 'SW';
  } else if (d > 270 && d < 360) {
    return 'NW';
  } else {
    return '-';
  }
}

export default getWindDirection;
