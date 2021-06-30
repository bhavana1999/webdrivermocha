const formpage = require("../pageobjects/form.page")

describe('Validating title page', () => {
    it('validate the title', async () => {
        await formpage.openBrowser();
        expect(await formpage.homepage_Logo).toBeDisplayed();
    });

    it('Navigating to formpage', async () => {
        await formpage.openForm();
    });

    it('Entering details', async () => {
        await formpage.formData('Bhavana', 'vuttur', 'bhavana23@gmail.com', 'Argentina (+54)', '9876543212', 'NZB', 'jkpt', 'TS', '506000', "22/03/1990")

    });
});