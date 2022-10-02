// Voorbeeld Object.entries()

const zoo = {
    birds: 20,
    monkeys: 40,
    snakes: 4,
    visitors:  200
};

const entries = Object.entries(zoo);

console.log(entries);
// output = [ [ 'birds', 20 ], [ 'monkeys', 40 ], [ 'snakes', 4 ], [ 'visitors', 200 ] ]