exports.LaunchWebsite = class LaunchWebsite{

constructor(page){
    this.page = page
}

async LaunchDemoWebsite(){
    await this.page.goto('https://demowebshop.tricentis.com/');
}

    
}