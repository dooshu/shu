var fs = require('fs')



// 上标字符映射：0-9 对应 ⁰¹²³⁴⁵⁶⁷⁸⁹
const sup = ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹']
const reg = /\((\d+)\)/g

const filename = '../1586.txt'

    fs.readFile(filename, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        var result


result = data.replace(reg, (_, numStr) => {
  return [...numStr].map(d => sup[+d]).join('')
})

        console.log(RegExp.$1)

        fs.writeFile('aa.txt', result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });
