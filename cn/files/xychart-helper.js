/**
 * Mermaid XYChart Helper
 * 生成唯一的 ZWSP 标签和指定的辅助线数据
 */

const generateChartConfig = (dataPointsCount, yStep, yMax) => {
  const ZWSP = "\u200B";
  
  // 1. 生成 X 轴占位符 (假设你每两个年份之间有一个占位符，总共需要 dataPointsCount 个)
  const xLabels = Array.from({ length: dataPointsCount }, (_, i) => `"${ZWSP.repeat(i + 1)}"`).join(', ');

  // 2. 生成 Y 轴辅助线 (从 2000 到 16000，每隔 yStep 生成一条)
  let gridLines = [];
  for (let val = yStep; val <= yMax; val += yStep) {
    const lineData = Array(dataPointsCount).fill(val).join(', ');
    gridLines.push(`    line [${lineData}] %% ${val} 辅助线`);
  }

  console.log('\n--- X-AXIS ZWSP LABELS ---');
  console.log(`x-axis [${xLabels}]`);
  
  console.log('\n--- Y-AXIS GRID LINES ---');
  console.log(gridLines.join('\n'));
};

// 执行：27 个数据点，步长 2000，最大值 16000
generateChartConfig(27, 2000, 16000);