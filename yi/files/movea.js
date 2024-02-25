const fs = require("fs");






for(let i=1; i<1000; i++){
  if(fs.existsSync(`../${i}/a.txt`)){
    fs.copyFileSync(`../${i}/a.txt`, `cn/${i}.txt`);
  }else{
    console.log(`${i}`)
  }
}







