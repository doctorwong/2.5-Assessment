module.exports = {
    inputs :
    {
        evenOddInput: '0,2,3,11,22,100,101',
        objectFilterInput: ['name', 'title', 'empty'],
        nameFilterInput: ['J', 'empty'],
        palindromeInput: ['abcba', 'abbcc'],
        sumInput1: '5',
        sumInput2: '5'


    },

    outputs:
    {
        evenResults: "[0,2,22,100]",
        oddResults: "[3,11,101]",
        objectFilterResults: 
        ["[ { \"name\": \"Jimmy Joe\", \"title\": \"Hack0r\", \"age\": 12 }, { \"name\": \"Jeremy Schrader\", \"age\": 24, \"hairColor\": \"brown\" }, { \"name\": \"Carly Armstrong\", \"title\": \"CEO\" } ]",
         "[ { \"name\": \"Jimmy Joe\", \"title\": \"Hack0r\", \"age\": 12 }, { \"name\": \"Carly Armstrong\", \"title\": \"CEO\" } ]",
         "Filtered: []"],
        nameFilterResults: ["[ \"James\", \"Jessica\", \"Jennifer\" ]",
        "Filtered Names: []"],
        palindromeResults: ['true', 'false', 'false'],
        sumResults: '10'
    }
}