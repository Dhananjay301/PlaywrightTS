import {test, expect, Locator} from '@playwright/test'

const url:string="https://sdetqa.vercel.app/autoplay";

test.describe("Data Entry form Validation", ()=>{
    test.beforeEach("before each TC execution", async({page})=>{
     await page.goto(url);
    });

    test("1. input field validation", async({page})=>{
        const fullName:Locator=page.getByLabel("Full name");
        // const fullName:Locator=page.locator("#name"); //also works
        const email:Locator=page.getByLabel("Email");

        //Visibility 
        await expect(fullName).toBeVisible();
        await expect(email).toBeVisible();

        //EnterFiled
        await fullName.fill("My Name Is lakahan");
        await email.fill("dhananjay@gmail.com");

        // // Get attribute
        // let attrLength=await fullName.getAttribute("maxlength");
        // console.log(attrLength);
        // await expect(attrLength).toEqual("15");

        await expect(fullName).toHaveAttribute("maxlength","15");



    });

});