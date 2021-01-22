describe("Opening Application",function(){
    
    it("Opening Web Page",function () {
        browser.manage().window().maximize();
        browser.executeScript('window.localStorage.clear();');
        browser.executeScript('window.sessionStorage.clear();');
        browser.driver.manage().deleteAllCookies(); 
        browser.get("https://chercher.tech/");
    })
})