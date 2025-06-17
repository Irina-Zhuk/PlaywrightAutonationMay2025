import {chromium, test as it, expect} from '@playwright/test'

it.beforeAll( () => {
    console.log('test beforeAll');
})

it.describe.skip('FormPage', () => {
    it.beforeEach (() => {
        console.log('before each test');
    })
    it.afterEach (() => {
        console.log('after each test');
    })
    it.afterAll (() => {
        console.log('after all test');
    })
    it ('test 1', () => {
        console.log('test 1');
    })
    it ('test 2', () => {
        console.log('test 2');
    })

})

it.describe('FORM PAGE TYPE', () => {
    it ('Fill all Fields', async({page}) => {
        // const browser = await chromium.launch({headless: false});  // устарело так писать
        // const context = await browser.newContext(); //устарело так писать
        // const page = await context.newPage(); //устарело так писать
// page содержит три вышеуказанные строки
        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
        //await page.pause()
        await page.locator ('[id="name"]').fill('Mike')
        await page.locator ('[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type="email"]').pressSequentially("mickale@gmail.com", {delay : 200})
        await page.locator ('input[placeholder="Password"]').fill('test123456')
        await page.locator ('[for="companyname"] ~ [placeholder = "Company"]').fill('LLC Happy')
        await page.locator ('label:has-text("Website") ~ input#websitename').fill ('http//www.happy.com')
        await page.selectOption ('select[name="country"]', {label: 'United States'})
        await page.locator ('label:has-text("City")~ input#inputCity').fill('New York')
        await page.getByPlaceholder ('Address 1').fill('123 Nain Street')
        await page.getByPlaceholder ('Address 2').fill('Apt 11')
        await page.getByRole('textbox', {name: "State"}).fill("NY")
        await page.getByRole('textbox', {name: "Zip Code"}).fill("12345")
        await page.getByRole('button', {name: "Submit"}).click()
        await expect (page.locator ('h2:has-text("Input form validation")')).toBeVisible()
        await page.pause()











    })
})