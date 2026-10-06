import { Page } from "@playwright/test";

export class AdminPage{
    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }
    async enterSystemUserDetails(username:string, employeeName:string){
        await this.page.locator("//div/label[text()='Username']/following::div/input").first().fill(username);
        await this.page.locator("//div/label[text()='Username']/following::div/input").last().type(employeeName);
    }
    async clickOnSearch(){
       await this.page.getByRole('button',{name:'Search'}).click();
    }
     testFieldVisible(){
        return this.page.getByText('Invalid');
    }
}