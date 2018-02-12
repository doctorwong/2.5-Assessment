const selectors = require('../resource/selectors')
const data = require('../resource/data')

module.exports = {
    beforeEach: browser => {
        //loads the page url before each test execution
        browser.url('http://localhost:3000')
    },
    after: browser => {
        //closes the browser after each test execution
        browser.end()
    },

    checkEvensAndOdds: browser => {
    //enters a series of numbers, separated by commas, and verifies that the results are displayed in the appropriate fields
        
        //enters numbers, separated by a comma, into the 'evenOddInput' field
        browser.setValue(selectors.evenOddInput, data.inputs.evenOddInput);
        browser.click(selectors.evenOddButton);
        //verifies results in the evens box
        browser.expect.element(selectors.evenResults).text.to.contain(data.outputs.evenResults);
        //verifies results in the odds box
        browser.expect.element(selectors.oddResults).text.to.contain(data.outputs.oddResults);
    },

    checkFilterObject: browser => {
        //filters objects by key name

        //verifies all values for the key 'name'
        browser.setValue(selectors.objectFilterInput, data.inputs.objectFilterInput[0]);
        browser.click(selectors.objectFilterButton);
        browser.expect.element(selectors.objectFilterResults).text.to.contain(data.outputs.objectFilterResults[0]);
        
        //verifies all values for the key 'title'
        browser.clearValue(selectors.objectFilterInput);
        browser.setValue(selectors.objectFilterInput, data.inputs.objectFilterInput[1]);
        browser.click(selectors.objectFilterButton);
        browser.expect.element(selectors.objectFilterResults).text.to.contain(data.outputs.objectFilterResults[1]);

        //searches for an invalid key. should contain no results
        browser.clearValue(selectors.objectFilterInput);
        browser.setValue(selectors.objectFilterInput, data.inputs.objectFilterInput[2]);
        browser.click(selectors.objectFilterButton);
        browser.expect.element(selectors.objectFilterResults).text.to.contain(data.outputs.objectFilterResults[2]);

    },
    
    checkFilterString: browser => {
        //filters names to only those containing input characters

        //displays names containing 'J'
        browser.setValue(selectors.nameFilterInput, data.inputs.nameFilterInput[0]);
        browser.click(selectors.nameFilterButton);
        browser.expect.element(selectors.nameFilterResults).text.to.contain(data.outputs.nameFilterResults[0]);
        
        //submits a search that should contain no results
        browser.clearValue(selectors.nameFilterInput);
        browser.setValue(selectors.nameFilterInput, data.inputs.nameFilterInput[1]);
        browser.click(selectors.nameFilterButton);
        browser.expect.element(selectors.nameFilterResults).text.to.contain(data.outputs.nameFilterResults[1]);
     },

    checkPalindrome: browser => {   
        //submits an input and checks if it is a palindrome
        //returns true if input is a palindrome, false otherwise

        //checks a palindrome input
        browser.setValue(selectors.palindromeInput, data.inputs.palindromeInput[0]);
        browser.click(selectors.palindromeButton);
        browser.expect.element(selectors.palindromeResults).text.to.contain(data.outputs.palindromeResults[0]);

        //checks a nonpalindrome input
        browser.clearValue(selectors.palindromeInput);
        browser.setValue(selectors.palindromeInput, data.inputs.palindromeInput[1]);
        browser.click(selectors.palindromeButton);
        browser.expect.element(selectors.palindromeResults).text.to.contain(data.outputs.palindromeResults[1]);

        //checks no input
        browser.clearValue(selectors.palindromeInput);
        browser.click(selectors.palindromeButton);
        browser.expect.element(selectors.palindromeResults).text.to.contain(data.outputs.palindromeResults[2]);

    },

    checkSum: browser => {
        //checks if the sum of two numbers is correct

        //checks the sum of two positive numbers
        browser.setValue(selectors.sumInput1, data.inputs.sumInput1[0]);
        browser.setValue(selectors.sumInput2, data.inputs.sumInput2[0]);
        browser.click(selectors.sumButton);
        browser.expect.element(selectors.sumResults).text.to.contain(data.outputs.sumResults[0]);

        //checks the sum if one of the numbers is negative
        browser.clearValue(selectors.sumInput1);
        browser.clearValue(selectors.sumInput2);
        browser.setValue(selectors.sumInput1, data.inputs.sumInput1[1]);
        browser.setValue(selectors.sumInput2, data.inputs.sumInput2[1]);
        browser.click(selectors.sumButton);
        browser.expect.element(selectors.sumResults).text.to.contain(data.outputs.sumResults[1]);
    }

}
