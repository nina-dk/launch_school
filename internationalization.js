function greet(locale) {
  const extractlanguage = locale.slice(0,2);
  const extractRegion = locale.slice(3,5);
  switch (extractlanguage) {
    case 'en': 
      switch (extractRegion) {
        case 'US': return 'Hi!';
        case 'GB': return 'Hello!';
        case 'AU': return 'Howdy!';
      }
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

console.log(greet('en_US.UTF-8'));  // 'en'
console.log(greet('en_GB.UTF-8'));  // 'en'
console.log(greet('ko_KR.UTF-16')); // 'ko'
console.log(greet('en_AU.UTF-8')); // 'Howdy!'
console.log(greet('fr_FR.UTF-8')); // 'Salut!'
console.log(greet('fr_MA.UTF-8')); // 'Salut!'