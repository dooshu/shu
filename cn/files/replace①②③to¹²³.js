const fs = require('fs');

const filepathname = 590

// 映射关系：带圈数字 → 上标数字
const circledToSuperscript = {
  '①': '¹', '②': '²', '③': '³', '④': '⁴', '⑤': '⁵',
  '⑥': '⁶', '⑦': '⁷', '⑧': '⁸', '⑨': '⁹', '⑩': '¹⁰',
  '⑪': '¹¹', '⑫': '¹²', '⑬': '¹³', '⑭': '¹⁴', '⑮': '¹⁵',
  '⑯': '¹⁶', '⑰': '¹⁷', '⑱': '¹⁸', '⑲': '¹⁹', '⑳': '²⁰',
  '㉑': '²¹', '㉒': '²²', '㉓': '²³', '㉔': '²⁴', '㉕': '²⁵',
  '㉖': '²⁶', '㉗': '²⁷', '㉘': '²⁸', '㉙': '²⁹', '㉚': '³⁰',
  '㉛': '³¹', '㉜': '³²', '㉝': '³³', '㉞': '³⁴', '㉟': '³⁵',
  '㊱': '³⁶', '㊲': '³⁷', '㊳': '³⁸', '㊴': '³⁹', '㊵': '⁴⁰',
  '㊶': '⁴¹', '㊷': '⁴²', '㊸': '⁴³', '㊹': '⁴⁴', '㊺': '⁴⁵',
  '㊻': '⁴⁶', '㊼': '⁴⁷', '㊽': '⁴⁸', '㊾': '⁴⁹', '㊿': '⁵⁰'
};

// 读取文件
const content = fs.readFileSync('../'+filepathname+'.txt', 'utf-8');

// 替换所有带圈数字为上标数字
let result = content;
for (const [circled, sup] of Object.entries(circledToSuperscript)) {
  result = result.replace(new RegExp(circled, 'g'), sup);
}

// 写入新文件
fs.writeFileSync('../'+filepathname+'-output.txt', result, 'utf-8');
console.log('替换完成！输出文件：output.txt');