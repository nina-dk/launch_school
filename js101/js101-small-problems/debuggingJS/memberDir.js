let memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return (/^\w+ \w+$/).test(name);
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191');
addMember('Earl 5mith', '331-49191');
addMember('Beyonce_ Knowls', '331-9191');
addMember('', '331-9191');
addMember('4ntonina K', '331-49131')

console.log(memberDirectory);

/*
The input validation is not working as expected because the `\w` character class
in used to validate the users' names. However, this class matches not only
alphabetical characters, but also numbers and the underscore.
We can refactor the `isValidName` function like so:
*/

function isValidName(name) {
  return (/^[a-z]+ [a-z]+$/i).test(name);
}