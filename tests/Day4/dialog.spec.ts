import {test, expect, Locator} from '@playwright/test';

test.beforeEach('open url',async({page})=>{
        await page.goto('https://sdetqa.vercel.app/autoplay');
});

test('Simple alert', async({page})=>{
    page.on('dialog',(dialog)=>{
        dialog.accept();
    })

    await page.getByRole('button', {name:'Simple'}).click();

})