    import { chromium, test } from "@playwright/test"

    test("Login test", async () => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

  await page.goto('https://www.w3schools.com/w3css/w3css_fonts.asp');
  /*const page1Promise = page.waitForEvent('popup');
  await page.locator('#main div').filter({ hasText: 'Example body, h1, h2, h3, h4, h5, h6 { font-family: Arial, Helvetica, sans-' }).getByRole('link').click();
  const page1 = await page1Promise;
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Get your own website' }).click();
  const page2 = await page2Promise;
  await page2.locator('#pagetop').getByLabel('Sign Up to Improve Your').click();
  await page2.locator('#signUpFromSignup').first().click();
  await page2.locator('#modalusername=susmitha.psg@gmail.com').click();
  await page2.getByLabel('Password=W3schools!').click();
  await page2.getByRole('button', { name: 'Sign up for free' }).click();
  await page2.click("Log in");*/
});