const buffer_array = Buffer.from([8, 6, 7, 5, 4, 0, 9]);
const buffer_string = Buffer.from("I'm a string!", "utf-8");

console.log(buffer_string);
console.log(buffer_string.toString());
console.log(buffer_string.toString('hex'));
console.log(buffer_string.toString("utf-8", 0, 10));

console.log(buffer_array);
console.log(Buffer.concat([buffer_array, buffer_string]));
const joined_buffer = Buffer.concat([buffer_array, buffer_string]);
console.log(joined_buffer);
console.log(JSON.stringify(joined_buffer));