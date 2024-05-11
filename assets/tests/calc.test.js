const addition=require("../calc");
/**
 * the idea behind UNIT test is to ask the right question and get the results
 * regarding the addition function for example, ask the following questions
 * 1- what happen if either parameter is not a number ?->NaN
 * 2- What happen if either parameter is NULL?
 * 3- WHat happen if either parameter is a string ?
 * 4- what happen if function is passed with no parameters?
 * 
 * Always remember the RITE acronym (READABLE, ISOLATED, THOROUGH, EXPLAINABLE)
 */
describe("Calculator",()=>{
    describe("Addition function",()=>{
        test("should return 42 for 20 + 22",()=>{
            expect(addition(20,22)).toBe(42);
        });
        test("should return 73 for 42 + 31",()=>{
            expect(addition(42,31)).toBe(73);
        })
    })
})