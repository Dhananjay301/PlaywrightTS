import {test, expect, Locator} from '@playwright/test';

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