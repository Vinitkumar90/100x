// Traditional callback-based fs.readFile
const fs = require("fs");

// Using callbacks
console.log("Starting file read with callbacks...");
fs.readFile("example.txt", "utf8", (err,  ) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents with callback:", data);

  // What if we need to read another file based on this one?
  // We end up with nested callbacks (callback hell)
  fs.readFile("another-" + data.trim() + ".txt", "utf8", (err, moreData) => {
    if (err) {
      console.error("Error reading second file:", err);
      return;
    }
    console.log("Second file contents:", moreData);
  });
});
console.log(
  "This will be printed before the file is read because fs.readFile is asynchronous"
);

//----



function readFilePromise(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

console.log("Starting file read with Promises...");
readFilePromise("example.txt", "utf8")
  .then((data) => {
    console.log("File contents with Promise:", data);
    // Return a new Promise to chain operations
    return readFilePromise("another-" + data.trim() + ".txt", "utf8");
  })
  .then((moreData) => {
    console.log("Second file contents with Promise:", moreData);
  })
  .catch((err) => {
    console.error("Error in Promise chain:", err);
  });



// Using async/await with Promises (most modern approach) 
async function readFilesSequentially() {
  try {
    console.log("Starting file read with async/await...");
    const data = await readFilePromisified("example.txt", "utf8");
    console.log("File contents with async/await:", data);

    const moreData = await readFilePromisified(
      "another-" + data.trim() + ".txt",
      "utf8"
    );
    console.log("Second file contents with async/await:", moreData);
  } catch (err) {
    console.error("Error in async function:", err);
  }
}

readFilesSequentially();
