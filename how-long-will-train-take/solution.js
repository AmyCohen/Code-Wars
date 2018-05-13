function reachDestination(distance, speed) {
  let arrival = distance/speed;
  console.log(`${distance} divided by ${speed} equals ${arrival}`);

  if (arrival < 1) {
    if (arrival > 0.5 && arrival < 1) {
      return `The train will be there in ${Math.round(arrival)} hour.`;
    } else if (arrival <= 0.5) {
      return 'The train will be there in 0.5 hours.';
    }
  }
  if (arrival === 1) {
    return `The train will be there in ${arrival} hour.`;
  }
  if (!Number.isInteger(arrival)) {
    if (arrival < 1.25) {
      return `The train will be there in ${Math.floor(arrival)} hour.`;
    }
    if (arrival >= Math.floor(arrival)+.25 && arrival <= Math.floor(arrival)+.74) {
      return `The train will be there in ${Math.floor(arrival)+.5} hours.`;
    }
    if (arrival <= Math.floor(arrival)+.24) {
      return `The train will be there in ${Math.floor(arrival)} hours.`;
    } else {
      return `The train will be there in ${Math.round(arrival)} hours.`;
    }
  }

  if (Number.isInteger(arrival)) {
    return `The train will be there in ${arrival} hours.`;
  }
}