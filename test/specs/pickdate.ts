describe(' DropDown', () => {
    it('Test', async () => {

        await browser.url("https://demo.automationtesting.in/Datepicker.html")
        await browser.maximizeWindow()

        const calendar = await $('//img[@class="imgdp"]')
        await calendar.waitForClickable()
        await calendar.click()
    
        //current date
        const datepicker = await $('//input[@class="form-control hasDatepicker"]')
        await datepicker.waitForClickable()
        await datepicker.click()
        console.log(datepicker)
        await browser.pause(6000)

        //previous date
        const previousdate = await $('//img[@src="http://jqueryui.com/resources/demos/datepicker/images/calendar.gif"]')
        await previousdate.waitForClickable()
        await previousdate.click()
        console.log(previousdate)
        await browser.pause(6000)
    
    })
    })

