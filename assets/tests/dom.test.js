/**
 * @jest-environment jsdom
 */
const buttonClicked=require("../button");

/**
 * 
 * it is also possible to load all the DOM elements and run a test on a certain element
 * we need to change the beforeEach function and use the fs -> file system which 
 * can read and write t a file 
 */

beforeEach(()=>{
    let fs = require("fs");
    let fileContents = fs.readFileSync("../index.html","utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests",()=>{
       test("h1 should exist",()=>{
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
})