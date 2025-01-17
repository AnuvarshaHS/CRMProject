class LeadDashboardPage {
    // Locator for the Lead Dashboard element (use the given CSS selector)
    get dashboardElement() {
        return $('#root > div:nth-child(1)');
    }
        // Locator for the "Accounts" text
        get accountsText() {
            return $('//span[text()="Accounts"]');
        }
    
        // Locator for the dropdown trigger under "Accounts"
        get accountsDropdownTrigger() {
            return $('svg[stroke="black"][stroke-width="2"][viewBox="0 0 24 24"]');
        }
    
        // Locator for the "Procurements" text
        get procurementsText() {
            return $('//span[text()="Procurements"]');
        }
    
        // Locator for the dropdown trigger under "Procurements"
        get procurementsDropdownTrigger() {
            return $('svg.w-\\[2\\.2rem\\].h-\\[2\\.2rem\\].\\!w-\\[1\\.3rem\\].\\!h-\\[1\\.3rem\\]');
        }
    
        get executionText() {
            return $('//span[text()="Execution"]');
        }
    
        get executionDropdownTrigger() {
            return $('svg[stroke="black"][stroke-width="2"][viewBox="0 0 24 24"]');
        }
    
        get designersText() {
            return $('//span[text()="Designers"]');
        }
    
        get designerDropdownTrigger() {
            return $('svg[stroke="black"][stroke-width="2"][viewBox="0 0 24 24"]');
        }
    
        get leadsText() {
            return $('//span[text()="Leads"]');
        }
    
        get leadsDropdownTrigger() {
            return $('svg[stroke="black"][stroke-width="2"][viewBox="0 0 24 24"]');
        }
    


        // Method to verify that the Lead Dashboard is visible
        async verifyLeadDashboardVisible() {
            // Wait for the Lead Dashboard to be displayed
            const dashboardElement = await $('#root > div:nth-child(2) > div > section.flex.flex-row.py-\\[2rem\\].gap-\\[1rem\\]');
            await dashboardElement.waitForDisplayed({ timeout: 15000 });
    
            // Verify that the Lead Dashboard element is displayed
            const isVisible = await dashboardElement.isDisplayed();
            expect(isVisible).toBe(true);
        }
    
    

    // Method to take a screenshot of the Lead Dashboard
    async captureLeadDashboardScreenshot() {
        // Take a screenshot of the Lead Dashboard
        await browser.saveScreenshot('./lead-dashboard.png');
    }
    
}

module.exports = new LeadDashboardPage();