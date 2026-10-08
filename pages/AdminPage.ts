import { Page } from "@playwright/test";

export class AdminPage{
    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }
    async enterSystemUserDetails(username:string, employeeName:string){
        await this.page.getByRole('textbox').nth(1).fill(username);
        await this.page.getByRole('textbox', { name: 'Type for hints...' }).type(employeeName);
    }
    async clickOnSearch(){
       await this.page.getByRole('button',{name:'Search'}).click();
    }
     testFieldVisible(){
        return this.page.getByText('Invalid');
    }
}