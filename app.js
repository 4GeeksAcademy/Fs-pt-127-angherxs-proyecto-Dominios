const pronouns = ['Morderno', 'Antiguo'];
const carBrands = ['toyota', 'bmw', 'ford', 'tesla'];
const nouns = ['SUV', 'Berlina'];
const domains = [];

pronouns.forEach((pronoun) => {
  carBrands.forEach((brand) => {
    nouns.forEach((noun) => {
      domains.push(`${pronoun}${brand}${noun}.com`);
    });
  });
});

console.log(domains);
