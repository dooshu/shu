const readline = require('readline');

/**
 * ZWSP (Zero Width Space) Generator for Mermaid xychart
 */

const generate = (num) => {
  const count = parseInt(num);
  if (isNaN(count) || count <= 0) {
    console.error('❌ Error: Please provide a valid positive integer.');
    return;
  }

  const ZWSP = "\u200B"; 
  const result = Array.from({ length: count }, (_, i) => `"${ZWSP.repeat(i + 1)}"`).join(', ');
  
  console.log('\n🚀 Generated ZWSP Placeholders:\n');
  console.log(result);
  console.log(`\n✅ Total: ${count} unique IDs created.`);
};

// 支持命令行参数: node zwsp-generator.js 27
if (process.argv[2]) {
  generate(process.argv[2]);
  process.exit();
}

// 交互式模式
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How many Zero Width Space placeholders do you need? ', (answer) => {
  generate(answer);
  rl.close();
});