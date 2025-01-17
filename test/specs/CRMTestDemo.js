const LoginPage = require('../pages/CrmLogInPage');
const LeadDashboardPage = require('../pages/CrmLeadDashboardPage');
const Settings = require('../pages/Settings');

describe("CrmLogInPage", () => {
  
  it("should navigate to the login page", async () => {
    await LoginPage.openLoginPage();
    await browser.maximizeWindow();
  });

  it("should click 'Next' without entering email and validate the warning message", async () => {
    await LoginPage.clickNext();
    await LoginPage.validateEmailWarning("Please enter a email");
  });

  it("should enter an invalid email and validate the warning message", async () => {
    await LoginPage.enterEmail("invalid-email");
    await LoginPage.clickNext();
    await LoginPage.validateEmailWarning("Please enter a valid email");
  });

  it("should enter a valid email and click 'Next'", async () => {
    await LoginPage.enterEmail("anuvarsha@vhypotenuse.com");
    await LoginPage.clickNext();
  });

  it("should click 'Next' without entering password and validate the warning", async () => {
    await LoginPage.clickNext();
    await LoginPage.validatePasswordWarning("Please enter a password");
  });

  it("should enter incorrect password and validate each password rule", async () => {
    await LoginPage.enterInvalidPasswordAndCheckWarning("PASSWORD1!", "Please enter at least one lowercase");
    await LoginPage.enterInvalidPasswordAndCheckWarning("password1!", "Please enter at least one uppercase");
    await LoginPage.enterInvalidPasswordAndCheckWarning("Password!", "Please enter at least one digit");
    await LoginPage.enterInvalidPasswordAndCheckWarning("Password123", "Please enter at least one special character");
    await LoginPage.enterInvalidPasswordAndCheckWarning("P@ss1", "Please enter at least 8 characters");
  });



  it("should enter a valid password and click 'Next'", async () => {
    await LoginPage.enterPassword("Test@123");
    await LoginPage.clickNext();
  });

  it("should take a screenshot after login attempt", async () => {
    await browser.saveScreenshot('./Screenshots/successmsg1.png');
  });

  it("should verify the Lead Dashboard is visible", async () => {
    await LeadDashboardPage.verifyLeadDashboardVisible();
    await browser.saveScreenshot('./Screenshots/leaddashboard.png');
  });
  
  it("should navigate to settings and open the profile page", async () => {
    await Settings.openProfilePage();
    await Settings.clickEditButton();
  });

  it('should update the first name', async () => {
    const newFirstName = "Anuvarsha";
    await Settings.updateFirstName(newFirstName);
  });

  it('should update the last name', async () => {
    const newLastName = "Gowda";
    await Settings.updateLastName(newLastName);
  });

  it('should save the edited profile', async () => {
    await Settings.clickSaveButton();
  });

  it('should navigate to the change password screen', async () => {
    await Settings.clickMyPasswordLink();
  });

  it('should save the changed password', async () => {
    await Settings.savePassword();
  });

  it('should navigate to the check in-out history screen', async () => {
    await Settings.clickCheckInOutHistoryLink();
  });
  it('should navigate to the check in-out history user dropdownmenu', async () => {
    await Settings.SelectUserToCheckInOutHistory();
    await browser.saveScreenshot('./Screenshots/testingpurpose.png');

  });
  it('navigate to user search box in checkin out history', async () => {
    await Settings.SelectUserFilterSearchBox;
    await browser.saveScreenshot('./Screenshots/testingpurpose1.png');

  });


  it('should navigate to Check In-Out History and open the user dropdown menu', async () => {
    // Click the dropdown to open it
    await Settings.SelectUserToCheckInOutHistory();
    // Optionally, capture a screenshot for verification
    await browser.saveScreenshot('./Screenshots/openedDropdown.png');
  });

  it('should select a user from the dropdown menu', async () => {
    // Click the down arrow to open the dropdown
    await Settings.SelectUserToCheckInOutHistory();
  
    // Wait for the dropdown options and select the desired user
    const userName = "Anuvarsha Gowda"; // Replace with the actual user name
    await Settings.selectDropdownOption(userName);
  
    // Verify selection or capture a screenshot
    await browser.saveScreenshot('./Screenshots/dropdownSelection1.png');
  });
  

it('should navigate to the Company profile screen', async () => {
  await Settings.clickCompanyProfile();
  await browser.saveScreenshot('./Screenshots/Companyprofilescreen1.png');

});
it('should Click on Edit button in Company Profile screen', async () => {
  await Settings.clickOnEditButtonCompanyProfile();
  await browser.saveScreenshot('./Screenshots/EDitCompanyprofilescreen1.png');

});
it('should Click on save button in Company Profile screen', async () => {
  await Settings.clickSaveCompanyProfile();
  await browser.saveScreenshot('./Screenshots/EDitCompanyprofilescreen1.png');

});

it('should navigate to the Holidays list  screen', async () => {
  await Settings.clickHoliday();
  await browser.saveScreenshot('./Screenshots/Companyprofilescreen1.png');

});

it('should click on year filter ', async () => {
  await Settings.SelectYearFromDropDownMenu();
  await browser.saveScreenshot('./Screenshots/Companyprofilescreen1.png');

});


it('should click on holiday create button ', async () => {
  await Settings.clickCreateHoliday();
  await browser.saveScreenshot('./Screenshots/Companyprofilescreen1.png');

});
it("should enter a name for Holiday", async () => {
  await Settings.enterHolidayName("Sankranthi");
});

// it("should click on calendar symbol", async () => {
// //   await Settings.selectCalendarSymbol();
// //   await browser.saveScreenshot('./Screenshots/Companyprofilescreen1.png');

// // });
// // it("should click on previous button in calendar", async () => {
// //   await Settings.clickPreviousButtonInCalendar();
// //   await browser.saveScreenshot('./Screenshots/Companyprofilescreen1.png');

// // });
//await settings.selectDateFromCalendar(17);

it('should select date from calendar ', async () => {
  await Settings.selectDateFromCalendar(17);
  await browser.saveScreenshot('./Screenshots/holidaylist.png');

});


});


