describe('presentation playe test', () => {
    it('open next slide', async () => {
        async function open() {
            await browser.url(`http://google.com/`)
        }

        await open()      
        await browser.pause(5000)

    })
})
