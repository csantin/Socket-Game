const capitalize = ([fLetter, ...str]) => {
    fUpper = fLetter.toUpperCase();
    var res = [fUpper, ...str].join('');
    return res;
}

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(x => capitalize(x));
console.log(capitalizedColors);