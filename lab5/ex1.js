let FS = require("fs")
let P = require("path")

let folder = process.cwd()
let ext = '.' + process.argv[2]

console.log(`current working directory: ${folder}`)
console.log(`command arg - extension : ${ext}`);

let allFiles = FS.readdir(folder, (err, files) => {
  if (err) throw err

files.filter(f => P.extname(f) == ext)
    .forEach(f => console.log(f))

})