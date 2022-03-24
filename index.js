const fs = require('fs');

if (!fs.existsSync('./NewFolder/text.txt')) {
  fs.mkdirSync('./NewFolder');

}

function add(line) {
  fs.appendFile('./NewFolder/text.txt', line + '\n', (err) => {
      if (err) throw err;
      console.log("The data to append was appende to file");
  });
}

add('hallo123');