/*
This contains the user data to be used
*/

exports.dataLogins = class dataLogins {

    /*
    Gets the email to be used
    @return - email to be used
    */
    async getGenericUserName() {
        return 'playwright@gmail.com'
    }

    /*
    Gets the password of the above email
    @return - password of the above email
    */
    async getGenericPassword() {
        return 'Pass1234'
    }


}