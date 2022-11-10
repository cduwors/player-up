export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function pluralize(name, count) {
  if (count === 1) {
    return `${count} ${name}`;
  }
  return `${count} ${name}s`;
}

export function formatDate(date) {
  const original = date.split("-")
  const updatedDate = `${original[1]}/${original[2]}/${original[0]}`
  return updatedDate
}

export function formatTime(time) {
const original = time.split(":")
const timeInt = JSON.parse(original[0])
function subtract(timeInt) {if (timeInt > 12) { return (timeInt - 12)}} 
function update() {
  if(timeInt > 12) { 
    return `${subtract(timeInt)}:${original[1]} PM`
  } else {
    return `${time} AM`
  }
}
const updatedTime = update();
return updatedTime
}