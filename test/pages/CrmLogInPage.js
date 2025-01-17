class LoginPage {
    // Locator for email input field
    get emailField() {
        //return $('input[placeholder="Email address"]');
        return $("aria/Email address")
    }

    // Locator for password input field
    get passwordField() {
        //return $('input[placeholder="Password"]');
        return $("aria/Password")
    }

    // Locator for the 'Next' button
    get nextButton() {
        //return $('//p[text()="Next"]');
        return $("aria/Next")

    }

    // Locator for the email warning message
    get emailWarningMessage() {
        return $('span.input-error-text');
    }

    // Locator for the password warning/error message
    get passwordErrorMessage() {
        return $('span.input-error-text');
    }


  

    // Method to open the login page
    async openLoginPage() {
        await browser.url("https://dzc-crm.vhypotenuse.com/login");
    }

    // Method to enter the email address
    async enterEmail(email) {
        await this.emailField.waitForExist({ timeout: 20000 });
        await this.emailField.setValue(email);
    }

    // Method to enter the password
    async enterPassword(password) {
        await this.passwordField.waitForExist({ timeout: 30000 });
        await this.passwordField.setValue(password);
    }

    // Method to click the 'Next' button
    async clickNext() {
        await this.nextButton.waitForExist({ timeout: 10000 });
        await this.nextButton.click();
    }

    // Method to validate the email warning message
    async validateEmailWarning(expectedMessage) {
        await this.emailWarningMessage.waitForDisplayed({ timeout: 10000 });
        const warningText = await this.emailWarningMessage.getText();
        expect(warningText).toContain(expectedMessage);
    }

    // Method to validate the password warning message
    async validatePasswordWarning(expectedMessage) {
        await this.passwordErrorMessage.waitForDisplayed({ timeout: 50000 });
        const warningText = await this.passwordErrorMessage.getText();
        expect(warningText).toContain(expectedMessage);
    }

    // Method to enter invalid password and check warning message
    async enterInvalidPasswordAndCheckWarning(password, expectedMessage) {
        await this.passwordField.setValue(password);
        await this.nextButton.click();
        await this.passwordErrorMessage.waitForDisplayed({ timeout: 5000 });

        const warningMessage = await this.passwordErrorMessage.getText();
        expect(warningMessage).toBe(expectedMessage);
    }

    
}

module.exports = new LoginPage();
