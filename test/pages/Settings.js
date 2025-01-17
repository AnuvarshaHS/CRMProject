class Settings {
    // Locator for the profile screen element
    get profileScreen() { return $('div.px-\\[5rem\\].py-\\[3rem\\]');}

    // Locator for the 'Edit' button using XPath
    get editButton() {return $('//button[contains(@class, "action-button")]//p[text()="Edit"]');}

    // Locator for the first name field
    get firstNameField() { return $('input[placeholder="Enter first name"]');}

    // Locator for the last name field
    get lastNameField() {return $('input[placeholder="Enter last name"]');}

    // Locator for the save button on the profile page
    get saveButton() {return $('//p[text()="Save"]');}

    // Locator for the 'My Password' link
    get myPasswordLink() {return $('a[href="/profile/change-password"]');}

    // Locator for the Save button on the Change Password screen
    get changePasswordSaveButton() {return $('//p[text()="Save"]');}

    // Locator for the Check In-Out History link
    get checkInOutHistoryLink() {return $("aria/Check In-Out History");}
    get userFilterInChechInOutHistory() {return $('#user');}
    get userFilterDropDownArrow() { return $('div.chevron-down-container'); }

    get userFilterSearchBox() { return $('#Filter');}
    get userFilterDropdownOptions() { return $('span.transition-all.cursor-pointer.text-\\[1\\.1rem\\]');}

    get SelectUserInDropDownMenu() { return $('aria/Anuvarsha Gowda'); }
    get companyProfile() { return $('a[href="/profile/company-profile"]'); }

    get EditCompanyProfileButton() { return $('button p.text-white');   }

    get SaveCompanyProfile() {  return $('p.text-\\[1\\.2rem\\].text-white'); }

    get HolidayList() {return $("aria/Holidays");  }
    get yearFilterHolidayList(){return $('.p-icon');}


    get CreateHoliday() { return $('button.action-button.w-fit.transition-all p.text-\\[1\\.2rem\\].text-white')}
    get HolidayName() { return $('input.transition-all.input-form.py-\\[0\\.2rem\\].pl-\\[0\\.5rem\\].disabled\\:\\!bg-gray-100.placeholder\\:\\!text-gray-400.pr-\\[0\\.5rem\\].w-full')}
               //return $('#name');
               // date calendar 
      get HolidayDatePickerTab(){return $('input.p-inputtext.p-component');}
      get datePickerCalendarIcon(){return $('.p-icon');}
     get monthDatePicker(){return $('button.p-datepicker-month.p-link');}
     get yearDatePicker(){return $('button.p-datepicker-year.p-link');}
      get prevIcon(){return $('svg.p-icon.p-datepicker-prev-icon');}
     get nextIcon(){return $('button.p-datepicker-next');}
    //  selectDay(day:Number) {
    //     return $(`//*[@data-p-highlight="false" and @data-p-disabled="false" and @data-pc-section="daylabel" and text()="${day}"]`);
    // }
        



    


    // Method to open the profile page and wait for the profile screen element to be visible
    async openProfilePage() {
        await browser.url("https://dzc-crm.vhypotenuse.com/profile/my-profile");

        // Wait for the profile screen to be displayed
        await this.profileScreen.waitForDisplayed({ timeout: 10000 });
    }

    // Method to click the 'Edit' button
    async clickEditButton() {
        await this.editButton.waitForExist({ timeout: 5000 });
        await this.editButton.click();  // Click the button
    }

    // Method to update the first name
    async updateFirstName(newFirstName) {
        await this.firstNameField.waitForExist({ timeout: 10000 });
        await this.firstNameField.setValue(newFirstName);
    }

    // Method to update the last name
    async updateLastName(newLastName) {
        await this.lastNameField.waitForExist({ timeout: 10000 });
        await this.lastNameField.setValue(newLastName);
    }

    // Method to save changes by clicking the Save button on the profile screen
    async clickSaveButton() {
        await this.saveButton.waitForExist({ timeout: 5000 });
        await this.saveButton.click();
    }

    // Method to click the 'My Password' link
    async clickMyPasswordLink() {
        await this.myPasswordLink.waitForExist({ timeout: 5000 });
        await this.myPasswordLink.click();
    }

    // Method to save password changes by clicking the Save button on the Change Password screen
    async savePassword() {
        await this.changePasswordSaveButton.waitForExist({ timeout: 5000 });
        await this.changePasswordSaveButton.click();
    }

    //Method to click the 'Check In-Out History' link
    async clickCheckInOutHistoryLink() {
        await this.checkInOutHistoryLink.waitForExist({ timeout: 5000 });
        await this.checkInOutHistoryLink.click();
    }

    async SelectUserToCheckInOutHistory() {
        await this.userFilterDropDownArrow.waitForExist({ timeout: 10000 });
        await this.userFilterDropDownArrow.click();
    }

    async SelectUserFilterSearchBox() {
        await this.userFilterSearchBox.waitForExist({ timeout: 10000 });
        await this.userFilterSearchBox.click();

    }


    async selectDropdownOption(optionText) {
        // Get all dropdown options
        const options = await $$('span.transition-all.cursor-pointer.text-\\[1\\.1rem\\]');  

        // Ensure options are converted into an array
        const optionsArray = Array.from(options);

        // Log options for debugging
        console.log("Dropdown options:", optionsArray);

        // Iterate through the options and click the matching one
        for (const option of optionsArray) {
            const text = await option.getText();
            if (text.trim() === optionText.trim()) {
                await option.click();  // Click the matching option
                return;
            }
        }

        throw new Error(`Option "${optionText}" not found in the dropdown`);
    }


    async clickCompanyProfile() {
        await this.companyProfile.waitForExist({ timeout: 5000 });
        await this.companyProfile.click();
    }
    async clickOnEditButtonCompanyProfile() {
        await this.EditCompanyProfileButton.waitForExist({ timeout: 5000 });
        await this.EditCompanyProfileButton.click();
    }
    async clickSaveCompanyProfile() {
        await this.SaveCompanyProfile.waitForExist({ timeout: 5000 });
        await this.SaveCompanyProfile.click();
    }
    async clickHoliday() {
        await this.HolidayList.waitForExist({ timeout: 5000 });
        await this.HolidayList.click();

    }
    async SelectYearFromDropDownMenu() {
        await this.yearFilterHolidayList.waitForExist({ timeout: 5000 });
        await this.yearFilterHolidayList.click();

    }

    async clickCreateHoliday() {
        await this.CreateHoliday.waitForExist({ timeout: 5000 });
        await this.CreateHoliday.click();

    }
    async enterHolidayName(Name) {
        await this.HolidayName.waitForExist({ timeout: 20000 });
        await this.HolidayName.setValue(Name);
    }

   // Method to select date from the calendar
   async selectDateFromCalendar(date) {
    // Wait for the date picker to be displayed
    await this.HolidayDatePickerTab.waitForDisplayed({ timeout: 10000 });

    // Scroll the calendar icon into view
    await this.datePickerCalendarIcon.scrollIntoView();

    // Wait for the date picker icon to be clickable
    await this.datePickerCalendarIcon.waitForClickable({ timeout: 10000 });
    
    // Click the date picker icon
    await this.datePickerCalendarIcon.click();

    // Wait for the calendar to display
    await this.monthDatePicker.waitForDisplayed({ timeout: 10000 });

    // Select the specific date
    const daySelector = `button.p-datepicker-day[data-date='${date}']`;
    const dayElement = await $(daySelector);

    // Wait for the date element to be clickable
    await dayElement.waitForClickable({ timeout: 10000 });

    // Click the date
    await dayElement.click();
}


// Method to click the previous button in the calendar
async clickPreviousButtonInCalendar() {
    await this.prevIcon.waitForExist({ timeout: 30000 });
    await this.prevIcon.waitForDisplayed({ timeout: 30000 });
    await this.prevIcon.click();
}

// Method to click the next button in the calendar
async clickNextButtonInCalendar() {
    await this.nextIcon.waitForExist({ timeout: 30000 });
    await this.nextIcon.waitForDisplayed({ timeout: 30000 });
    await this.nextIcon.click();
}



}

module.exports = new Settings();
