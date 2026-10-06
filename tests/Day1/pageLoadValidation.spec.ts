import {test, expect, Locator} from '@playwright/test';

test('1. Page load validation', async({page})=>{
    await page.goto("https://sdetqa.vercel.app/autoplay");
    let autoPlay:Locator=page.getByText("AutoPlay");
    let flag:boolean=await autoPlay.isVisible();
    console.log("flag is= ",flag);
    await expect(autoPlay).toBeVisible();

});
