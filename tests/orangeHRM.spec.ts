import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/HomePage'


test.describe("Validate Orange hrm Feature",()=>{
    test.beforeEach('load page',async({page})=>{
        page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    test('validate login feature',async({page})=>{
    let loginPage=new LoginPage(page);
    await loginPage.enterUsername('Admin');
    await loginPage.entePasswrord('admin123');
    await loginPage.clickLoginButton();
    await page.waitForLoadState('networkidle');

    let homePage=new HomePage(page);
    let dashVisible:boolean=await homePage.verifyDashboard();
    await expect(dashVisible).toBeTruthy();
    await page.waitForTimeout(5000);

    page.close();

})

})
