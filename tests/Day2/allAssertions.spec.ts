import {test, expect, Locator, FrameLocator} from '@playwright/test';

test('Gender Radio Buttons', async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay");
   const maleIcon:Locator=page.locator('#male');
   
//    First it should not be checked
   console.log('before check ',await maleIcon.isChecked());
   await expect(maleIcon).not.toBeChecked();
   await maleIcon.check();
   console.log('After check',await maleIcon.isChecked())
   await expect(maleIcon).toBeChecked();


});

// Record and playback script
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await expect(page.getByRole('button')).toContainText('Login');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('networkidle');

//  const frame:FrameLocator= page.frameLocator("");  
});