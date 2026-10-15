import {Page, Locator} from '@playwright/test'

export class LoginPage{
    readonly page:Page;


    constructor(page:Page){
        this.page=page;

    }
    async enterUsername(username:string){
        await this.page.getByPlaceholder('Username').fill(username);
    }
    async entePasswrord(password:string){
        await this.page.getByPlaceholder('Password').fill(password);
    }
    async clickLoginButton(){
        await this.page.getByRole('button',{name:'Login'}).click();
    }

     invalidCred():Locator{
        return this.page.getByText('Invalid credentials');
    }

}

