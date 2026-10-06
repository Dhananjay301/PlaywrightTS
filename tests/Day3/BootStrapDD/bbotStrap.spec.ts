import {test, expect, Locator} from '@playwright/test'

const url:string='https://opensource-demo.orangehrmlive.com/';
const username:string='Admin';
const password:string='admin123';
const usernameLoc='Username';
const uPassword='Password';


test.describe('Bootstarap Test without Select',()=>{
    test.beforeEach('Load URL', async({page})=>{
        await page.goto(url);
       const uName:Locator= page.getByPlaceholder(usernameLoc);
       const uPass:Locator=page.getByPlaceholder(uPassword);
       const loginButton:Locator=await page.getByRole('button',{name: 'Login'});
       await loginButton.waitFor({'state':'visible'});
       await uName.fill(username);
       await uPass.fill(password);
       await loginButton.click();
       await page.waitForLoadState('load',{timeout:50000});
       await page.waitForTimeout(4000);

    });

    test('Open browser and validate it', async({page})=>{
        
        
    });





});