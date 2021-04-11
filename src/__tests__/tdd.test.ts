//function palindromeChecker(word: string): boolean {return true;}

describe("plaindromeChecker", () => {
    it("if given any string palindrom, should return true", () => {
        expect(palindromeChecker("bob")).toBeTruthy;
        expect(palindromeChecker("ANNA")).toBeTruthy;
        expect(palindromeChecker("Radar ")).toBeTruthy;
        expect(palindromeChecker("Never Odd Or Even")).toBeTruthy;
        expect(palindromeChecker(" 90109")).toBeTruthy;
    })
    it("if given not a palindrom, should return false", () => {
        expect(palindromeChecker("hi")).toBeFalsy; 
        expect(palindromeChecker("level.")).toBeFalsy; 
    });

    it("if a string was not given, should return false", () => {
        expect(palindromeChecker(null)).toBeFalsy;
        let emptyString : string;
        expect(palindromeChecker(emptyString)).toBeFalsy;
    });
});

function palindromeChecker(word: string): boolean {
    if (!word) return false;
    const reversedWord: string = word.trim().split("").reverse().join("");
    return reversedWord.toLowerCase() == word.trim().toLowerCase();
}
