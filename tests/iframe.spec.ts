import {test as it, expect, FrameLocator} from '@playwright/test'

it.describe ('IFrame', () => {
    it ('Frame test', async ({page}) => {
       const url = 'https://www.lambdatest.com/selenium-playground/nested-frames/'
        await page.goto(url)

        const frameBottom :FrameLocator = page.frameLocator('[name="frame-bottom"]')

        const leftFrame: string | null = await frameBottom
            .frameLocator('[name="frame-left"]')
            .locator('body')
            .textContent()

        const middleFrameText: string | null = await frameBottom
            .frameLocator('[name="frame-middle"]')
            .locator('body')
            .textContent()

        const rightFrameText: string | null = await frameBottom
            .frameLocator('[name="frame-right"]')
            .locator('body')
            .textContent()

        expect(leftFrame).toContain('Left')
        expect(middleFrameText).toContain('Middle')
        expect(rightFrameText).toContain('Right')




    })
})