export class kphomepage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("#ulogin");
        this.password = page.locator("#upass");
        this.button = page.locator("#sub_logbtn");
        this.logo=page.getByRole('img', { name: 'Kerala Property' });
    
        this.myProperties = page.getByText('My Properties');
        this.profileName = page.getByText('arathishaji');
        this.myAccount = page.getByText('My Account');
    }
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
    
