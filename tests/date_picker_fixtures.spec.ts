import {test as it, expect} from "../page_object/BasePage";

it.describe('datePicker with Fixture', () => {
    it ('should navigate to the datePicker page', async({datePicker, page}) => {
        await datePicker.navigateToDatePicker()
        await datePicker.verifyHeader()
        await datePicker.dateFromToday()
        console.log(datePicker.page.url())
        await expect(datePicker.page).toHaveURL(/.*jquery-date-picker-demo/);
    })
})