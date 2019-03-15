//1
const delayedPromise = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 500)
    })
}
delayedPromise(5).then(result => console.log(result))

//2
const asyncPromise = async (num) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 500)
    })
}
asyncPromise(6).then(result => console.log(result))