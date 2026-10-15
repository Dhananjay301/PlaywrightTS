import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test.describe('Login page validations', ()=>{
    test.beforeEach('Opne the application', async({page})=>{
       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    test('Login with Invalid Username @login', async({page})=>{
        let login=new LoginPage(page);
        await login.enterUsername('admmmmmm');
        await login.entePasswrord('admin123');
        await login.clickLoginButton();
        await page.waitForLoadState('load');
        await expect(login.invalidCred()).toBeVisible();
    })
})


// Login with an invalid username
// Login with an invalid password
// Submit with both fields empty