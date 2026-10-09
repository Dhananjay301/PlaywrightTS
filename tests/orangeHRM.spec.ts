import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { AdminPage } from '../pages/AdminPage'
import { MyInfo } from '../pages/MyInfo'

test.describe("Describe block",()=>{
    test.beforeEach('load page',async({page})=>{
    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    let loginPage=new LoginPage(page);
    await loginPage.enterUsername('Admin');
    await loginPage.entePasswrord('admin123');
    await loginPage.clickLoginButton();
    await page.waitForLoadState('networkidle');
    })

    test.afterEach('close session', async({page})=>{
        page.close();
    })

    test('validate Dashbaord page',async({page})=>{
    let homePage=new HomePage(page);
    let dashVisible:boolean=await homePage.verifyDashboard();
    await expect(dashVisible).toBeTruthy();
    await page.waitForTimeout(5000);
;

})

test('User select empyoyee name in Admin pannel @smoke',async({page})=>{
     let homePage=new HomePage(page);
     await homePage.clickOnAdmin();
     await page.waitForLoadState('networkidle');

     let admin=new AdminPage(page);
     await admin.enterSystemUserDetails('Dhananjay','Ravi M B');
     await admin.clickOnSearch();
     await expect(admin.testFieldVisible()).toBeVisible();
     await page.waitForTimeout(5000);
})

test('Verify MyInfo and select 1 reord', async({page})=>{
      let homePage=new HomePage(page);
      await homePage.clickOnMyInfo();
      await page.waitForLoadState('networkidle');

      let myInfo=new MyInfo(page);
      await myInfo.recordCheck();
      await expect(myInfo.verifyDeleteText).toBeTruthy();

})

})
