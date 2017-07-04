const isAdult = people.some(person => {
    const currentYear = (new date()).getFullYear();
    return currentYear - person.year >= 19;

});
console.log({isAdult});
