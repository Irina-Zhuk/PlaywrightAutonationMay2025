import { test as base, expect, chromium, Page } from '@playwright/test';

type Fixtures = {
    loggedInPage:Page
}
export const test = base.extend<Fixtures>({
    loggedInPage: async ({}, use) => {
        const browser = await chromium.launch({headless: false});  // устарело так писать
        const context = await browser.newContext(); //устарело так писать
        const page = await context.newPage(); //устарело так писать

        await page.goto('https://coding.pasv.us/user/login')
        await page.getByPlaceholder('Email').fill('Michael.sheptun1202@gmail.com')
        await page.getByRole('textbox', {name: 'Пароль'}).fill('test1234')
        await page.getByRole('button', {name: 'Войти', exact:true}).click()

        await page.waitForURL('**/profile/**')
        await page.pause()
        await use(page);

        await browser.close()


    },
});

export {expect} from '@playwright/test'

