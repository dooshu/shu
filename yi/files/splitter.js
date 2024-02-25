const { AssertionError } = require("assert");
const { assert } = require("console");
const fs = require("fs");
const path = require("path");
const { exec, spawn } = require('child_process');

// [^？。，、“”\d：（）《》！；\-——]$

// [^？。，、“”\d：（）《》！；\-——]$
// ０１２３４５６７８９
//ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ
//ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ
//从左侧匹配到第一个a
//^.*?a


//console.log(process.argv.slice(2))
//process.exit(0)

const bookid = process.argv[2];
const relevels = process.argv.slice(3)   // [3, 4, 9]
//console.log(relevels)
//process.exit(0)

let bookdata = fs.readFileSync(`../${bookid}/a.txt`, "utf8");
//bookdata = bookdata.replace(/\r\n/g,'\n')
if(/\r/.test(bookdata)){
  console.log('\\r\\n to \\n')
  process.exit(1)
}

//const [prologue, content] = bookdata.split('>>>正文开始<<<')
//console.log(content)

//const reg = /(?<=(?:\nVVV目录开始VVV\n))(.*)(?=(?:\nΛΛΛ目录结束ΛΛΛ\n))/s
//const reg = /(.*?)\n\n/s

const chaps = /(.*?)\n\n/s.exec(bookdata)[0].trim().split("\n");



bookdata = bookdata.replace(chaps[0], chaps[0]+'\n```')
//bookdata = bookdata.replace(chaps[chaps.length-1], chaps[chaps.length-1]+'\n```')
const pos = chaps.join('\n').length+4
bookdata = [bookdata.slice(0, pos), '\n```', bookdata.slice(pos)].join("");


let i = 0;
let bookdata2 = bookdata
for (i = 1; i < chaps.length; i++) {

  const nextindex = bookdata2.indexOf("\n" + chaps[i].trim() + "\n")
  bookdata2 = bookdata2.substring(nextindex+chaps[i].length);


  //assert(firstindex > 0, chaps[i+1]+'　的位置要大于0')
  if (nextindex < 0) {
    console.log(chaps[i] + "　未找到 "+(i+1));
    process.exit(1);
  }
}



let allchapter = []
let levelprev = 0
let json = {}
let levelcount = []
for (i = 0; i < chaps.length; i++) {
  const level = chaps[i].search(/(?!　)/);
  levelcount[level]== undefined ? levelcount[level]=(chaps[i].trim()==='0'? 0:1) : levelcount[level]++
  let prevslug = i?allchapter[i-1].slug.slice(0, level):[0]

  if(levelprev < level){
    if(relevels.includes(level+''))levelcount[level]=1
    // let zero = []
    // for(let j=0; j<level-levelprev-1; j++){
    //   console.log(chaps[i])
    //   zero.push(0)
    // }
    allchapter.push({slug:[...prevslug, levelcount[level]], id:i+'', parent_id:(i-1)+'', title:chaps[i].trim()})
  }else
  if(levelprev > level){
    console.log('level='+level)
    //console.log(allchapter[i-1].slug[level].parent_id)
    allchapter.push({slug:[...prevslug, levelcount[level]], id:i+'', parent_id:getParent_id(i-1, levelprev-level), title:chaps[i].trim()})
  }else{
    if(i>0)
    allchapter.push({slug:[...prevslug, levelcount[level]], id:i+'', parent_id:i?allchapter[i-1].parent_id+'':'', title:chaps[i].trim()})
    else
    allchapter.push({slug:['cn/'+bookid], id:i+'', parent_id:i?allchapter[i-1].parent_id+'':'', title:chaps[i].trim()})
  }

  levelprev = level



  let nextChapsIndex = i + 1
  if(i<chaps.length-1){
    while(chaps[nextChapsIndex].trim() === '0'){
      console.log(nextChapsIndex)
      nextChapsIndex++
    }
  }



  const nextindex1 = i<chaps.length-1 ? bookdata.indexOf("\n" + chaps[nextChapsIndex].trim() + "\n") : bookdata.length;

  const nextindex = nextindex1 != 0 ? nextindex1 : i<chaps.length-1 ? bookdata.indexOf("\n" + chaps[nextChapsIndex].trim() + "\n", chaps[nextChapsIndex].length) : bookdata.length;


  if(nextindex <= 0){
    console.log(i+' nextindex wrong '+nextindex+chaps[i].trim())
    if (fs.existsSync('cn'))fs.rmdirSync('cn', { recursive: true, force: true })
    process.exit(1)
  }



  //const tmp = bookdata.split(re)
  //fs.writeFileSync(i+'.mdx', (i?chaps[i-1].trim():'')+'\n\n'+tmp[0])
  console.log(i+allchapter[i].slug.slice(0, -1).join('/'))

  if(i)mkdirsSync(allchapter[i].slug.slice(0, -1).join('/'))
  else mkdirsSync(allchapter[i].slug.join('/'))
  const mdxtext = bookdata.substring(0, nextindex).trim().replace(/^(.*)$/m, "---\n---\n---\ntitle: $1\n---\n\n")
  fs.writeFileSync(allchapter[i].slug.join('/') + ".mdx", mdxtext);
  //fs.writeFileSync(i+'.mdx', bookdata)
  bookdata = bookdata.substring(nextindex);
  //bookdata = tmp.slice(1).join()
  //preindex = firstindex

  if (i + 1 == chaps.length) {
    //fs.writeFileSync((i+1)+'.mdx', (chaps[i].trim())+'\n\n'+bookdata)
  }
}
// mkdirsSync(allchapter[i].slug.slice(0, -1).join('/'))
// fs.writeFileSync(allchapter[i].slug.join('/') + ".mdx", bookdata);

//console.log(allchapter)

fs.writeFileSync(allchapter[0].slug+"/book.json", JSON.stringify(getTrees()[0]));

fs.copyFileSync(`../${bookid}/a.txt`, allchapter[0].slug+'/a.txt');
//fs.copyFileSync(`../${bookid}/b.txt`, allchapter[0].slug+'/a.txt');
//fs.copyFileSync(`../${bookid}/a.txt`, allchapter[0].slug+'/a.txt');

const cmd = "cp -r ../"+bookid+"/*.pdf "+allchapter[0].slug
exec(cmd); // 复制文件夹，目标目录可以自动创建
const cmd2 = "cp -r ../"+bookid+"/*.epub "+allchapter[0].slug
exec(cmd2); 
const cmd3 = "cp -r ../"+bookid+"/b.txt "+allchapter[0].slug
exec(cmd3); // 复制文件夹，目标目录可以自动创建

//chaps.map(v=>console.log(v.trim()))

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}



function getTrees(pid='') {
    if(!pid) {
        // 如果没有父id（第一次递归的时候）将所有父级查询出来
        return allchapter.filter(item => !item.parent_id).map(item => {
            // 通过父节点ID查询所有子节点
            let a = {slug:item.slug.join('/'), title: item.title}
            const n = getTrees(item.id)
            n==false ? '' : a.child = n
            return a
        })
    } else {
        return allchapter.filter(item => item.parent_id === pid).map(item => {
            // 通过父节点ID查询所有子节点
            let a = {slug:item.slug.join('/'), title: item.title}
            const n = getTrees(item.id)
            n==false ? '' : a.child = n
            return a
        })
    }
}


function getParent_id(i, count){
  if(count){
    console.log('count.....'+count)
    return getParent_id(allchapter[i].parent_id, count-1)
  }

  return allchapter[i].parent_id
}