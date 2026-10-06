import {test, expect, Locator} from '@playwright/test';


test('Wait for locator', async({page})=>{
   await page.goto("https://sdetqa.vercel.app/autoplay");

   // wait for element to be isible
await page.waitForSelector("#male1", {state:'visible', timeout:5000});

//wait for network to be idle--> wait for page completed loade
await page.waitForLoadState('load');
await page.waitForLoadState('domcontentloaded');

// wait for specific elemet state insted of page like in above First , like both are same 
//above will be deprecated
await page.locator('#male1').waitFor({state:'visible', timeout:5000});

});

