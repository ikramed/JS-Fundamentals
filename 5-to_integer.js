const num = parseInt(process.argv[2]);

if (!num && num !== 0) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
}
