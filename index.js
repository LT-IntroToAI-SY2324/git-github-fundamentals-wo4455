const numW = (string) => {
    let letters = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i).toLowerCase() === "w") {
            letters++;
        }
    }
    return letters;
};

const numletters = (string) => {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === " ") continue;
        counter++;
    }
    return counter;
};

console.log(numletters("Will Otwell"));
console.log(numW("Will Otwell"));