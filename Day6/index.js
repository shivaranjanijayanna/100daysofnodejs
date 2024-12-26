import fs from "fs";

console.log("Writing into a file");
fs.writeFile(
  "sample.text",
  "Lets write a few sentences in the file",
  function (err) {
    if (err) {
      return console.error(err);
    }

    console.log("finished writing");
    console.log("reading the data that's written");

    fs.readFile("sample.text", function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("Data read : " + data.toString());
    });
  }
);

console.log(
  "\nFile contents of file before append:",
  fs.readFileSync("examplefile.text", "utf-8")
);

fs.appendFile("examplefile.text", "World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(
      "\nFIle contents of file after append:",
      fs.readFileSync("examplefile.text", "utf-8")
    );
  }
});

function dosomething() {
  throw new Error("a error is thrown from something");
}

function init() {
  try {
    dosomething();
  } catch (e) {
    console.log(e);
  }
  console.log("After successful error handling");
}

init();
