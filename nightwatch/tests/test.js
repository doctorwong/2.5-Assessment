const selectors = require('../resource/selectors')

module.exports = {
    beforeEach: browser => {
        //loads the page url before each test execution
        browser.url('http://localhost:3000')
    },
    after: browser => {
        //closes the browser after each test execution
        browser.end()
    },

    //enters a series of numbers, separated by commas, and verifies the results are displayed in the appropriate fields
    checkEvensAndOdds: browser => {
        //enters numbers, separated by a comma, into the 'evenOddInput' field
        browser.setValue(selectors.evenOddInput, '0,2,3,11,22,100,101');
        //clicks the submit button
        browser.click(selectors.evenOddButton);
        //verifies results in the evens box
        browser.expect.element(selectors.evenResults).text.to.contain("[0,2,22,100]")
        //verifies results in the odds box
        browser.expect.element(selectors.oddResults).text.to.contain("[3,11,101]")
    },

//filters objects by key name
    checkFilterObject: browser => {

        //verifies all values for the key 'name'
        browser.setValue(selectors.objectFilterInput, 'name');
        browser.click(selectors.objectFilterButton);
        browser.expect.element(selectors.objectFilterResults).text.to.contain(" [ { \"name\": \"Jimmy Joe\", \"title\": \"Hack0r\", \"age\": 12 }, { \"name\": \"Jeremy Schrader\", \"age\": 24, \"hairColor\": \"brown\" }, { \"name\": \"Carly Armstrong\", \"title\": \"CEO\" } ]")
        
        //verifies all values for the key 'title'
        browser.clearValue(selectors.objectFilterInput);
        browser.setValue(selectors.objectFilterInput, 'title');
        browser.click(selectors.objectFilterButton);
        browser.expect.element(selectors.objectFilterResults).text.to.contain(" [ { \"name\": \"Jimmy Joe\", \"title\": \"Hack0r\", \"age\": 12 }, { \"name\": \"Carly Armstrong\", \"title\": \"CEO\" } ]")

        //searches for an invalid key. should contain no results
        browser.clearValue(selectors.objectFilterInput);
        browser.setValue(selectors.objectFilterInput, 'empty');
        browser.click(selectors.objectFilterButton);
        browser.expect.element(selectors.objectFilterResults).text.to.contain("Filtered: []")

    },
    
    //filters names to only those containing input characters
    checkFilterString: browser => {

        //displays names containing 'J'
        browser.setValue(selectors.nameFilterInput, 'J');
        browser.click(selectors.nameFilterButton);
        browser.expect.element(selectors.nameFilterResults).text.to.contain(" [ \"James\", \"Jessica\", \"Jennifer\" ]")
        
        //submits a search that should contain no results
        browser.clearValue(selectors.nameFilterInput);
        browser.setValue(selectors.nameFilterInput, 'empty');
        browser.click(selectors.nameFilterButton);
        browser.expect.element(selectors.nameFilterResults).text.to.contain("Filtered Names: []")
     },

    //submits an input and checks if it is a palindrome
    //returns true if input is a palindrome, false otherwise
    checkPalindrome: browser => {

        //checks a palindrome input
        browser.setValue(selectors.palindromeInput, 'abcba');
        browser.click(selectors.palindromeButton);
        browser.expect.element(selectors.palindromeResults).text.to.contain("true")
        //checks a nonpalindrome input
        browser.clearValue(selectors.palindromeInput);
        browser.setValue(selectors.palindromeInput, 'abbcc');
        browser.click(selectors.palindromeButton);
        browser.expect.element(selectors.palindromeResults).text.to.contain("false")

        //checks no input
        browser.clearValue(selectors.palindromeInput);
        browser.click(selectors.palindromeButton);
        browser.expect.element(selectors.palindromeResults).text.to.contain("false")

    },

    //checks if the sum of two numbers is correct
    checkSum: browser => {

        browser.setValue(selectors.sumInput1, '5');
        browser.setValue(selectors.sumInput2, '5');
        browser.click(selectors.sumButton);
        browser.expect.element(selectors.sumResults).text.to.contain("10")
    }

}
