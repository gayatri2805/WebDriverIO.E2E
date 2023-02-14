describe(' DropDown', () => {
    it.skip('Test1', async () => {
        await browser.url("https://semantic-ui.com/modules/dropdown.html")
        await browser.maximizeWindow()

        const selection1 = await $('//div[@class="default text"]')
        await selection1.waitForClickable()
        await selection1.click()

        const selection = await $('//div[contains(text(),"Female")]')
        await selection.waitForClickable()
        await selection.click()
    })
    it.skip('Test2', async () => {

        const SelectFriend = await $('// div[@class="ui fluid selection dropdown"]')
        await SelectFriend.waitForClickable()
        await SelectFriend.click()

        const SelectFriend1 = await $('//div[@class="item" and @data-value="jenny"]')
        console.log(await SelectFriend1.getValue());
    })

    //MULTIPLE SEARCH AND SELECTION
    it.skip('Test3', async () => {
        //Opening url
        browser.url("https://semantic-ui.com/modules/dropdown.html")
        browser.maximizeWindow()
        const mulsel = await $("//div[@class='ui fluid dropdown selection multiple']")
        await mulsel.click()
        await browser.pause(3000)
        const listskills = await $$("//div[@class='menu transition visible']//div")
        //console.log("Skills : ", listskills.getText())
        for (let i = 1; i < listskills.length; i++) {
            console.log("Skills : ", await listskills[i].getText())
            if (await listskills[i].getText() == "CSS") {
                await listskills[i].click()
            }
            if (await listskills[i].getText() == "HTML") {
                await listskills[i].click()
            }
        }
        await browser.pause(3000)
    })
    //SELECT STATE
    it.skip('Test4', async () => {

        //Opening url
        browser.url("https://semantic-ui.com/modules/dropdown.html")
        browser.maximizeWindow()
        const statebtn = await $("(//input[@class='search'])[2]")
        await statebtn.scrollIntoView()
        await statebtn.click()
        await statebtn.setValue("CAL")
        const stateList = await $$("//div[@class='menu transition visible']//div")
        await browser.pause(3000)
        for (let i = 1; i < stateList.length; i++) {
            console.log("State Name : ", await stateList[i].getText())
            if (await stateList[i].getText() == "CALIFORNIA") {
                await stateList[i].click()
            }
        }
        await browser.pause(4000)
    })

    //SELECT COUNTRY
    it.skip('Test5', async () => {
        //Opening url
        browser.url("https://semantic-ui.com/modules/dropdown.html")
        browser.maximizeWindow()
        const countrybtn = await $("(//input[@autocomplete='off'])[1]")
        await countrybtn.scrollIntoView()
        await countrybtn.click()
        await countrybtn.setValue("IN")
        const countryList = await $$("//div[@class='menu transition visible']//div")
        await browser.pause(3000)
        for (let i = 1; i < countryList.length; i++) {
            console.log("State Name : ", await countryList[i].getText())
            if (await countryList[i].getText() == "INDIA") {
                await countryList[i].click()
            }
        }
        await browser.pause(4000)
    })


    //select multiple options

    it.skip('Test6', async () => {
        //Opening url
        browser.url("https://semantic-ui.com/modules/dropdown.html")
        browser.maximizeWindow()
        const mulsel = await $("//div[@class='ui fluid search dropdown selection multiple upward active visible']")
        await mulsel.click()
        await browser.pause(3000)
        const listskills = await $$("//div[@class='menu transition visible']//div")
        //console.log("Skills : ", listskills.getText())
        for (let i = 1; i < listskills.length; i++) {
            console.log("Skills : ", await listskills[i].getText())
            if (await listskills[i].getText() == "NEW YORK") {
                await listskills[i].click()
            }
            if (await listskills[i].getText() == "CALIFORNIA") {
                await listskills[i].click()
            }
        }
        await browser.pause(4000)
    })


//Search Dropdown::language selection

it.skip('Test7', async () => {
    //Opening url
    browser.url("https://semantic-ui.com/modules/dropdown.html")
    browser.maximizeWindow()
    const lang = await $("(//input[@class='search' and @tabindex='0'])[5]")
    await lang.scrollIntoView()
    await lang.click()
    await lang.setValue("EN")
    const langList = await $$("//div[@class='menu transition visible']//div")
    await browser.pause(4000)
    for (let i = 1; i < langList.length; i++) {
        console.log("language Name : ", await langList[i].getText())
        if (await langList[i].getText() == "ENGLISH") {
            await langList[i].click()
        }
    }
    await browser.pause(4000)
})
//Inline
it.skip('Test8', async () => {
    //Opening url
    browser.url("https://semantic-ui.com/modules/dropdown.html")
    browser.maximizeWindow()
    const Inline = await $('//img[@class="ui avatar image"]')
    await Inline.click()
    Inline.selectByVisibleText("matt")
    await browser.pause(4000)
})

//adjust time span 
it.skip('Test9', async() => {
    browser.url("https://semantic-ui.com/modules/dropdown.html")
    browser.maximizeWindow()
const repos = await $('(//div[@class="text"])[3]')
 await repos.click()
// const repos2 = await $('//div[@class="menu transition visible"]')
// await repos.click()
await repos.selectByVisibleText("this month");
await browser.pause(3000)

})


it('Test10',async() =>{
    browser.url("https://semantic-ui.com/modules/dropdown.html")
    browser.maximizeWindow()

const pointing = await $('//div[@class="ui pointing dropdown link item upward"]')
await pointing.click()
const shopping = await $('//span[contains(text(),"Clothing")]')
await shopping.click()
const cloth = await $('(//div[@class="menu transition hidden"])[4]')
await cloth.click()
const selectshoes = await $('(//div[@class="item active selected"])[1]')
await selectshoes.click()
})














})

















