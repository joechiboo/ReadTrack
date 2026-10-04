#!/usr/bin/env node
// 從 index.html 的卡片 data 屬性計算進度，寫回 README.md 的年度目標區塊。
// 用法：node scripts/update-readme.js
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const readmePath = path.join(root, 'README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

const cards = [...html.matchAll(/data-type="(\w+)" data-rating="([\d.]+)" data-date="(\d{4})-\d{2}-\d{2}"/g)]
  .map(m => ({ type: m[1], rating: parseFloat(m[2]), year: m[3] }));

const year = String(new Date().getFullYear());
const thisYear = cards.filter(c => c.year === year).length;
const total = cards.length;
const avg = total ? (cards.reduce((a, c) => a + c.rating, 0) / total).toFixed(1) : '-';

const before = readme;
readme = readme
  .replace(/## 🎯 \d{4} 年度目標/, `## 🎯 ${year} 年度目標`)
  .replace(/目前進度：\*\*\d+ \/ 52\*\*[^\n]*/, `目前進度：**${thisYear} / 52** 📈（累計 ${total} 篇，平均 ${avg} ⭐）`);

if (readme !== before) {
  fs.writeFileSync(readmePath, readme);
  console.log(`README 已更新：${year} 年 ${thisYear} 篇，累計 ${total} 篇，平均 ${avg}`);
} else {
  console.log('README 無變更');
}
