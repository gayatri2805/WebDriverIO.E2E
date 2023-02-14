describe("automate webtable",()=>{
    it("Test valid webtable",async()=>{

        await browser.url("https://cosmocode.io/automation-practice-webtable/")
        

        const table = await $('(//input[@type="checkbox"])[31]')
        await table.waitForClickable()
        await table.click()
        await browser.pause(5000)


        const elem = await $('//*[@id="countries"]/tbody/tr[32]/td[2]/strong');
        console.log("Canada");



    })
})
