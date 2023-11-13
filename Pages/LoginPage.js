/*
This is the login page of the Tricentis web demo
*/

exports.Login = class Login {

    constructor(page) {

        this.page = page

    }
    /*
    Signs in the user
    @parameter  - Email = Email to be signed in
                - Password = Password of the Email
    */
    async SignIn(Email, Password) {

        await this.page.getByLabel('Email:').click();
        await this.page.getByLabel('Email:').fill(Email);
        await this.page.getByLabel('Password:').click();
        await this.page.getByLabel('Password:').fill(Password);
        await this.page.getByRole('button', { name: 'Log in' }).click();

    }


}