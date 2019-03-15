const makeUpperCase = (sarr) => {
    return new Promise((resolve, reject) => {
        let tempArr = sarr.map(word => {
            if(typeof word === "string"){
                return word.toUpperCase();
            }
            else{
                reject("Error: Not all items in the array are strings!");
            }
        });
        return resolve(tempArr);
    });
}

const sortWords = (sarr) => {
    return new Promise((resolve, reject) => {
        resolve(sarr.sort());
    });
}

const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy', 99, true]

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeUpperCase(mixedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))