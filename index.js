const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ slowMo: 250 });
    const page = await browser.newPage();
    // Acessa a pagina e faz o login.
    await page.goto('http://172.16.0.1/login.asp');
    await page.type('[name="Username"]', 'admin');
    await page.type('[name="Password"]', 'shutdown');
    await page.click('[class="button1"]');
    // Reinicia o roteador.
    await page.click('[class="btn"]');
    await page.click('[href="system_hostname.asp"]');
    await page.click('[href="system_reboot.asp"]');
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter").then(
    await page.on('dialog', async dialog => {
        await dialog.accept();
    }));
    console.log("Roteador reiniciado.");
    await browser.close();
})();
