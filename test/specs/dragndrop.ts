describe(' TestDrodown', () => 
{
    it('Test',async() =>{
        await browser.url("https://www.globalsqa.com/demo-site/draganddrop/")
await browser.maximizeWindow()

//switch to frame  
await browser.switchToFrame(await $("//iframe[@class='demo-frame lazyloaded'][1]"))

//identify source element
const src  = await $('//li[@class="ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle"][3]')
 
//identify target element
const trg = await $('//div[@id="trash"]') 

//drag and drop
await src.dragAndDrop(trg)
await browser.pause(4000)


    })
})