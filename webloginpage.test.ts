import { chromium, test } from "@playwright/test"

test("Login test demo", async () => {

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://tickets.solitontech.com/portal/en/signin")
//await page.hover("s(.,'My Account')]")
await page.fill("input[name='username']", "susmitha.soundararajan@solitontech.com");
await page.fill("input[name='password']", "Soundaug4!");
await page.click("Sign Up");

const nextcontext = await browser.newContext();
const nextpage = await nextcontext.newPage();
await nextpage.goto("https://tickets.solitontech.com/portal/en/signin")

await page.click("My Area");
await page.click("Add ticket");
await page.fill("input[id='subject']", "Low Priority | Low Urgency | System crashing")

})