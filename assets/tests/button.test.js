/**
 * @jest-environment jsdom
 */
const buttonClicked=require("../button");

/**
 * Mocking is a way to simulate loading the page of HTML and let it check the function 
 * when a certain action is performed.
 * 
 * to run the test make sure that the jsdom is installed. If it is not , use the following command
 * npm install -D jest-environment-jsdom
 * 
 * 
 * it is also possible to load all the DOM elements and run a test on a certain element
 * we need to change the beforeEach function and use the fs -> file system which 
 * can read and write t a file 
 */

beforeEach(()=>{
    document.body.innerHTML=`<p id="par"></p>`;
   
});

describe("DOM tests",()=>{
    test("expects p content to change.",()=>{
        buttonClicked();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked me");
    });
})