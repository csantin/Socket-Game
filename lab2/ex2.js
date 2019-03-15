const capitalize = ([fLetter, ...str]) => {
    fUpper = fLetter.toUpperCase();
    var res = [fUpper, ...str].join('');
    return res;
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));