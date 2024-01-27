

var fs = require('fs')
const path = require('path');

const ss = ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹']

// find superscript
// \p{No}

const filename = '../628.txt'

    fs.readFile(filename, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        var result

        var reg = /\[(\d)(\d)?(\d)?\]/g
        reg = /(\d)(\d)?(\d)?/g
        reg = /〔(\d)(\d)?(\d)?〕/g
        reg = /\((\d)(\d)?(\d)?\)/g
        reg = /\[(\d)(\d)?(\d)?\]/g
        reg = /\((\d)(\d)?(\d)?\)/g

        result = data.replace(reg, ($1, $2, $3, $4, $5)=>{
          console.log($3)
          
          
          if($5 < 10)return ss[$2]+ss[$3]+ss[$4]+ss[$5]
          if($4 < 10)return ss[$2]+ss[$3]+ss[$4]
          if($3 < 10)return ss[$2]+ss[$3]
          if($2 < 10)return ss[$2]
          return $1
        })

        console.log(RegExp.$1)

        fs.writeFile('aa.txt', result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });



