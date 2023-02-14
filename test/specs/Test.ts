describe(' TestDrodown', () => 
{
    it('Test',async() =>{
await browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
await browser.maximizeWindow()

const dropdown = await $('//div[@rel-title="Select Country"]//select')
await dropdown.waitForClickable()
await dropdown.click()
//await dropdown.selectByVisibleText("Australia")


await dropdown.selectByAttribute('value', "CAN");
console.log(await dropdown.getValue()); // returns "someValue3"

await browser.pause(6000)

    })
})