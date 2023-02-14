describe(' TestDatePicker', () => {
    it('Test', async () => {

        await browser.url("https://demo.automationtesting.in/Datepicker.html")
        await browser.maximizeWindow()

        const calendar = await $('//img[@class="imgdp"]')
        await calendar.waitForClickable()
        await calendar.click()
    
        //current date
        const datepicker = await $('//input[@class="form-control hasDatepicker"]');
        await datepicker.waitForClickable()
        await datepicker.click()
        await browser.pause(6000)
        //next date
        const previousdate = await $('//a[@class="ui-state-default ui-state-active"]');
        await previousdate.waitForClickable()
        await previousdate.click()
        await browser.pause(6000)
    })
})
