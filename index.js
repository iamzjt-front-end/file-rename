// 读取当前文件夹下的所有文件，然后按照用户传入的正则表达式进行重命名，并打印出重命名的文件名
// 例如：node index.js -r /a/g -n b
// 读取当前文件夹下的所有文件，然后将文件名中的a替换成b，并打印出重命名的文件名
const fs = require('fs');

function rename() {
  const args = process.argv.slice(2);
  const reg = args[0].split('/')[1];
  const replace = args[1];
  const files = fs.readdirSync('./');
  files.forEach((file) => {
    console.log(file);
    const newFile = file.replace(reg, replace);
    fs.renameSync(file, newFile);
    console.log(`${file} -> ${newFile}`);
  });
}

rename();
