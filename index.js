require("colors");
const Config = require("./src/config");
const Bot = require("./src/bot");
const { Header } = require("./src/Header");

const tunda = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  Header();
  console.log("⏳ Mohon tunggu sebentar...\n".yellow);
  await tunda(2000);
  const config = new Config();

  const bot = new Bot(config);

  const singleToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzA3MTg4MTEyNzE5MzQ3NzEyIiwiaWF0IjoxNzMyNTM3Mzk3LCJleHAiOjE3MzM3NDY5OTd9.9HWf9jx0IhM80Hs5tyZyv6Z-es-8_UocZ39IVTJjlMnoSgkDfEh1OhBAh4iGMEEDg6ATBQo_hfjixGinsMNjgg"
  bot.connect(singleToken).catch((err) => console.log(`❌ ${err.message}`.red));

  process.on("SIGINT", () => {
    console.log(`\n👋 ${"Mematikan aplikasi...".green}`);
    process.exit(0);
  });
}

main().catch((error) => console.log(`❌ ${error.message}`.red));
