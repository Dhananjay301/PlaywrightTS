import { Page } from "@playwright/test";

export class HomePage{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async verifyDashboard(){
        return await this.page.getByRole('heading', {name:'Dashboard'}).isVisible();
    }
    async clickOnAdmin(){
        await this.page.getByRole('link',{name: 'Admin'}).click();
    }
}