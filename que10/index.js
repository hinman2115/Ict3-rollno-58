
console.log('📁 Current directory (__dirname):', __dirname);
console.log('📄 Current file (__filename):', __filename);

console.log('🧠 Process ID:', process.pid);
console.log('🕒 Uptime (seconds):', process.uptime());
console.log('🌍 Environment variables:', process.env.NODE_ENV || 'Not Set');

setTimeout(() => {
  console.log('⏰ This message is shown after 2 seconds (setTimeout)');
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`🔁 Interval message ${count}`);
  if (count === 3) {
    clearInterval(intervalId);
    console.log('🛑 Interval cleared');
  }
}, 1000);

console.log('🖨️ Logging using global console.log');

const buffer = Buffer.from('Hello from buffer!');
console.log('🧵 Buffer contents:', buffer.toString());
