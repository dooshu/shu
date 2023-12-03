
 const fs = require('fs');

// ([^\x00-\xff])\n([^\x00-\xff])

// －

const arr = [
  "",
  '五言古诗',
]

const CHAPTER = 4

//const data = fs.readFileSync('a/'+CHAPTER+'.txt', 'utf8');
const data = fs.readFileSync('../150/'+'a.txt', 'utf8');
//const data = ''

 //const re = /(第[一二三四五六七八九十]{1,3}章)/g
 //const re = '\n\n([一二三四五六七八九十]{1,2})\n\n'
 //const re = /(● .*\n\n)/g
 //const re = /(【.*】)/g
 //let re = '\n('+arr[CHAPTER].join('|')+')\n'
 let re = '\n('+arr.join('|')+')\n'
 //re = '\n\n(第[一二三四五六七八九十]{1,3}部)\n\n'
 //re = '\n\n(第.部.*)\n\n'
 //　　　　　　　　　　　　　　　　　　　
 //re = '\n\n([一二三四五六七八九十]{1,2}　.*)\n\n'
 //re = '\n\n([一二三四五六七八九十]{1,2})\n\n'
 re = '\n\n(Chapter [0-9]{1,2} .*)\n\n'
 re = '\n\n([ⅠⅡⅢⅣⅤⅥⅦⅧⅨ] .*)\n\n'
 re = '\n\n(自卑有多副面孔，自豪只有一副|19世纪太长，长得让人沮丧；20世纪太短，短得令人心慌|唯一一个工业化人口将届10亿的国家|中国，每天都是新的；但愿它每天都是新的)\n\n'
 re = '\n@(.*)\n'
 re = '\n\n(第[一二三四五六七八九十]{1,3}章 .*)\n\n'
 re = '\n([0-9]{1,2}月[0-9]{1,2}日　.*)\n'


 const reg = new RegExp(re, 'g')
 console.log(reg)

 const data2 = data.replace(reg, 'asdffsdafasdsf$1adfdsdeo97j')

 const myArray = data2.split('asdffsdafasdsf');

 let json = []

 
 console.log(myArray.length)


console.log('adsfsd '+myArray.length)

for(let i=531; i<=560; i++){
  //for(let i=1; i<=myArray.length; i++){
    //console.log(i)
  //const chapter = myArray[i].split("adfdsdeo97j")


  json.push({
    //"slug": "cn/84/"+CHAPTER+'/'+i,
    //"slug": "cn/84/"+i,
    //"title": arr[i],
    //"title": "",
    //"title": i+'.'+chapter[0],
    //"title": chapter[0],
    //"child": []
  })

  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: 睡前消息"+i+"期：\n---\n\n日睡前消息文字版第"+i+"期");
  //fs.writeFileSync(CHAPTER+'/'+i+'.mdx', "---\n---\n---\ntitle: "+chapter[0].replace('●','').trim()+"\n---\n\n"+chapter[1].trim());
  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: "+chapter[0].replace('●','').trim()+"\n---\n\n"+chapter[1].trim());
  // fs.mkdirSync(i.toString())
  //if(!fs.existsSync('a'))fs.mkdirSync('a')
   //fs.writeFileSync('a/'+i+'.txt', chapter[0]+'\n\n'+ chapter[1].trim());
  //fs.writeFileSync('bookchap.json', JSON.stringify(json));
  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: "+chapter[0]+"\n---\n\n");
  //fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: "+arr[i]+"\n---\n\n");
  fs.writeFileSync(i+'.mdx', "---\n---\n---\ntitle: \n---\n\n");

}

