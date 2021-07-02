const form = require("../pageobjects/form.page")
const testdata =require("../resource/inputdata.json")

describe('Title page', () => {
    it('validate the title', async () => {
        await form.openBrowser();
        expect(await form.homepage_Logo).toBeDisplayed();
    });

    it('Navigating to formpage', async () => {
        await form.openForm();
    });

    it('Entering details', async () => {
        const data=testdata.formDetails
        await form.formData( data.fname, data.lname, data.Email, data.country, data.addressLine1,data.addressLine2,data.state, data.postalCode, data.dob,data.gender)

    });
});