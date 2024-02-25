var fs = require("fs");

const bookid = process.argv[2];


function c() {
  let titles = []

  for (let i = 1; i <= 36; i++) {
    const pname = '../' + bookid + '/' + i + '.mdx'
    let data = ''
    try{
      data = fs.readFileSync(pname, 'utf8');
          //console.log(data.match(/title: .*/g)[0].replace('title: ', '　'))
    data = data.replace(/---\n---\n---\ntitle: (.*)\n---/, '$1')


    titles = [...titles, '　'+data.substring(0, data.indexOf('\n', 0))]

    }catch(e){
      data = '\n\n\n\n睡前消息'+i+'期：\n\n\n\n'
      titles = [...titles, '　'+'睡前消息'+i+'期：']
     // console.log(e)
     // process.exit(1)
    }

    fs.appendFileSync("cn/" + bookid + ".txt", "\n\n\n\n"+data, (err) => {

      if (err) {
        console.log(err);
      }
      else {
        // Get the file contents after the append operation
        console.log('\nFile Contents of file after append')
      }
    });
  }

  let data = fs.readFileSync('cn/' + bookid + '.txt', 'utf8');
  fs.writeFileSync( 'cn/' + bookid + '.txt', titles.join('\n') + '\n\n'+data)

}

c()


/**
 * Generator 函数 异步流程的同步写法
 * 获取 FileHandle 类的实例
 * 读取 文件中的内容
 * 拼接内容
 * 把内容写入到文件中
 * @param {string}} filename 
 * @param {Buffer} buffer 
 * @returns Promise
 */
function* G(filename, buffer){
  try{
      let fileHandle = yield fs.promises.open(filename, "r+")
      let _buffer = yield fileHandle.readFile()
      buffer = Buffer.concat([buffer, _buffer])
      return fileHandle.write(buffer, 0, buffer.length, 0)
  }catch(err){
      return Promise.reject(err)
  }
}


/**
* 把内容写入到文件的头部
* @param {string} filename 
* @param {Buffer} buffer 
*/
function writeFileToHead(filename, buffer){
  try{
      co(G(filename, buffer))
      .then(
          res => console.log('appendFile 成功： ', res),
          onRejected
      )
  }catch(err){
      console.error('appendFile error: ', err)
  }
}

// 新的内容
//let content = "[----]";

// 执行
//writeFileToHead(path.resolve(__dirname, "./1.txt"), Buffer.from(content))
