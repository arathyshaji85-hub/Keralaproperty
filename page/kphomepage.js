export class kphomepage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("#ulogin");
        this.password = page.locator("#upass");
        this.button = page.locator("#sub_logbtn");
        this.logo=page.getByRole('img', { name: 'Kerala Property' });
    }

    async setValues(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
    }

    async loginClick() {
        await this.button.click();
    }
    async logoclick()
    {
        await this.logo.click();
    }
    
}