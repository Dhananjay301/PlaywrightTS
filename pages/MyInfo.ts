import { Page, Locator } from "@playwright/test";

export class MyInfo{
    page:Page;
    record:Locator;

    constructor(page:Page){
    this.page=page;
    this.record=this.page.locator("input[type='checkbox']").last();
    }

    async recordCheck(){
        if(!await this.record.isChecked()){
            await this.record.check({'scroll':'auto'});
        }

    }
    async verifyDeleteText(){
        const deleteText:Locator=await this.page.getByRole('button', {name: ' Delete Selected '});
        if(await deleteText.isVisible()){
            return true;
        }else{
            false;
        }
    }
}