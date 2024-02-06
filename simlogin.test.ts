import { chromium, test } from "@playwright/test"

test("Login test demo", async () => {

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

//SIM tool login
await page.goto("https://sim.solitontech.com/login");
await page.click("text=Sign In with Outlook");
await page.fill("input[name='loginfmt']", "susmitha.soundararajan@solitontech.com")
await page.click("text=Next");
await page.fill("input[name='passwd']", "Soundmar4!")
await page.click("text=Sign in");
//await page.click("text=I can't use my Microsoft Authenticator app right now");
//await page.click("text=Use a verification code");
//await page.waitForTimeout(5000);
//await page.click("text=Verify");

await page.click("text=Yes");

//Book seat validation
await page.click("action action:navigation phase1-background")

//Book food validation
await page.click("text=Phase 1");
//await page.click("text=Book Food");
await page.waitForTimeout(15000);
})
