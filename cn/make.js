var fs = require("fs");


const aaa = `
ÁÁÁÁÁÁÁÁÁÁ：doosho.com　1，2，3，4，5

ББББББББББ：doosho.com　

ĆĆĆĆĆĆĆĆĆĆ：doosho.com　

ĎĎĎĎĎĎĎĎĎĎ：doosho.com　

ÊÊÊÊÊÊÊÊÊÊ：doosho.com　

♀♀♀♀♀♀♀♀♀♀：doosho.com　

ĞĞĞĞĞĞĞĞĞĞ：doosho.com　

ĤĤĤĤĤĤĤĤĤĤ：doosho.com　

ĨĨĨĨĨĨĨĨĨĨ：doosho.com　

ĴĴĴĴĴĴĴĴĴĴ：doosho.com　

ЌЌЌЌЌЌЌЌЌЌ：doosho.com　

ĹĹĹĹĹĹĹĹĹĹ：doosho.com　

♂♂♂♂♂♂♂♂♂♂：doosho.com　

ŃŃŃŃŃŃŃŃŃŃ：doosho.com　

ÓÓÓÓÓÓÓÓÓÓ：doosho.com　

φφφφφφφφφφ：doosho.com　

ℚℚℚℚℚℚℚℚℚℚ：doosho.com　

ŔŔŔŔŔŔŔŔŔŔ：doosho.com　

ŚŚŚŚŚŚŚŚŚŚ：doosho.com　

ŤŤŤŤŤŤŤŤŤŤ：doosho.com　

ÚÚÚÚÚÚÚÚÚÚ：doosho.com　

≚≚≚≚≚≚≚≚≚≚：doosho.com　

ŴŴŴŴŴŴŴŴŴŴ：doosho.com　

ϰϰϰϰϰϰϰϰϰϰ：doosho.com　

ÝÝÝÝÝÝÝÝÝÝ：doosho.com　

ŹŹŹŹŹŹŹŹŹŹ：doosho.com　

`

const chapters = [
    '书剑恩仇录 - 金庸',
'碧血剑 - 金庸',
'射雕英雄传 - 金庸',
'神雕侠侣 - 金庸',
'雪山飞狐 - 金庸',
'飞狐外传 - 金庸',
'倚天屠龙记 - 金庸',
'鸳鸯刀 - 金庸',
'白马啸西风 - 金庸',
'连城诀 - 金庸',
'天龙八部 - 金庸',
'侠客行 - 金庸',
'笑傲江湖 - 金庸',
'越女剑 - 金庸',
'鹿鼎记 - 金庸',
]

let j = 0;
for(i=852; i<867; i++,j++){
    if([250, 284].includes(i))continue
    //const data = fs.readFileSync(i+'.txt - 金庸', 'utf8');

    // const bookname = data.substring(0, data.indexOf('\n'))
    // const chapters = data.substring(0, data.indexOf('\n\n'))
    // const contents = data.substring(data.indexOf('\n\n'))

    // fs.writeFileSync(i+'.txt - 金庸', chapters+'\n\n\n\n\n'+aaa+bookname+'\n\n\n'+contents)
    fs.writeFileSync(i+'.txt', chapters[j]+'\n\n\n\n\n'+aaa+'\n\n\n'+chapters[j]+'\n\n\n')
}