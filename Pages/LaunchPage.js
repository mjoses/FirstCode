/*
This launches the demo workshop
*/
exports.LaunchWebsite = class LaunchWebsite {

    constructor(page) {
        this.page = page
    }

    /*
    Launches the website URL
    */
    async LaunchDemoWebsite() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }


}