describe(' TestDrodown', () => {
    it('Test', async () => {

        


        const calendar = await $('//*[@id="datepicker"]')
        await calendar.waitForClickable()
        await calendar.click()
        ////table[@class="ui-datepicker-calendar"]//tr//td[contains(@class,"ui-datepicker-today")]
        ////a[@class="ui-state-default ui-state-highlight ui-state-active"]
        const datepicker = await $('//table[@class="ui-datepicker-calendar"]//tr//td[contains(@class,"ui-datepicker-today")]')
        await datepicker.waitForClickable()
        await datepicker.click()
        await browser.pause(6000)


    })
})