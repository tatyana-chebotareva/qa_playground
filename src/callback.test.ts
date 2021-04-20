/** gets a number between 1 and 10 for the callback
 * @callback numberHandler is passed the number generated
 */
function getNumber(numberHandler) {
    numberHandler(Math.ceil(Math.random() * 10));
}

function numberChecker (i: number) {
    expect(i=>1&&i<=10).toBeTruthy;
}

describe("numberHandler", () => {
    it("first check should be true", () => {
      // we call the first function, and pass it the second
      getNumber(numberChecker); // BIG note: we don't use `()` on actionB, it will be called later
    });
    it("second check should be true", ()=>{
        getNumber((i)=>{
            expect(i=>1&&i<=10).toBeTruthy;
        })
    })
})




