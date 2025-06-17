import {test as it, expect} from "@playwright/test"

it.describe("Login Test", () => {
    it.beforeEach(async ({page}) => {
        await page.goto('https://demoqa.com/books')
    })
    it ('Verify Authentication and logot button', async ({page,browserName }) => {
        const logOutButton = page.locator('#submit')
        await expect(logOutButton).toHaveText('Log Out')

        await page.screenshot ({path: `screenshots/${browserName}-profile.png`})
    })
})