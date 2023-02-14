describe(' TestDatePicker', () => {
    it('Test', async () => {

        await browser.url("https://demo.automationtesting.in/Datepicker.html")
        await browser.maximizeWindow()

        const calendar = await $('//input[@id="datepicker2"]')
        await calendar.waitForClickable()
        await calendar.click()
    
        //current date
        const datepicker = await $('//a[@class="dp1674455400000   datepick-today"]');
        await datepicker.waitForClickable()
        await datepicker.click()
        await browser.pause(6000)

//next  date









    })
})
