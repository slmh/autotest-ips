describe('presentation playe test', () => {
    it('open next slide', async () => {
        
        //Page Object
        const nextButton = await browser.$('.//div[contains(@class, "hbox")]/div[contains(@class, "component_container") and contains(@class, "next")]/button')        
        const playButton = await browser.$('.//div[@class = "launch_layer"]')        
        const count = await browser.$('.//div[@class = "label slides"]')

        async function openPlayer() {
            await browser.url(`http://gli.ispring.lan/pavel/testing/2021_09_23/1%20(Web)/`)
        }

        //tests
        await openPlayer()

        await playButton.waitForDisplayed()
        await playButton.click()
        
        await nextButton.waitForDisplayed()
        await nextButton.click()
        await nextButton.click()
        await nextButton.click()
        await nextButton.click()
        await nextButton.click()
        
        // const slideNumber = await count.getText()
        // expect(slideNumber).toEqual('3 / 7')
        
        await browser.pause(5000)

    });

});
