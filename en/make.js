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



for(i=35; i<83; i++){
    if([].includes(i))continue
    const data = fs.readFileSync(i+'.txt', 'utf8');

    const bookname = data.substring(0, data.indexOf('\n'))
    const chapters = data.substring(0, data.indexOf('\n\n'))
    const contents = data.substring(data.indexOf('\n\n'))

    fs.writeFileSync(i+'.txt', chapters+'\n\n\n\n\n'+aaa+bookname+'\n\n\n'+contents)
}