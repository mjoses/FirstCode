exports.Login = class Login{

    constructor(page){

        this.page = page

    }

    async SignIn(Email,Password){

        await this.page.getByLabel('Email:').click();
        await this.page.getByLabel('Email:').fill(Email);
        await this.page.getByLabel('Password:').click();
        await this.page.getByLabel('Password:').fill(Password);
        await this.page.getByRole('button', { name: 'Log in' }).click();

    }


}