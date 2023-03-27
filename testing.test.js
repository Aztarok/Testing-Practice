const testing = require("./testing");

it("capitalize", () => {
    expect(testing.capitalize("daniel")).toMatch("Daniel");
})

it("reversing a string", () => {
    expect(testing.reverseString("Super")).toMatch("repuS");
})

it("calculator add", () => {
    expect(testing.Calculator.add(1, 5)).toBe(6);
})

it("calculator subtract", () => {
    expect(testing.Calculator.subtract(10, 2)).toBe(8);
})

it("calculator multiply", () => {
    expect(testing.Calculator.multiply(24, 7)).toBe(168);
})

it("calculator divide", () => {
    expect(testing.Calculator.divide(44, 2)).toBe(22);
})

it("Cipher time", () => {
    expect(testing.caeserCipher("We will wait for the enemies to advance")).toMatch("Xf xjmm xbju gps uif fofnjft up bewbod");
})

it("Cipher time 2", () => {
    expect(testing.caeserCipher("We will wait for the enemies to advance", 2)).toMatch("Yg yknn yckv hqt vjg gpgokgu vq cfxcpe");
})

it("Cipher time 3", () => {
    expect(testing.caeserCipher("We will wait for the enemies to advance", 15)).toMatch("Lt lxaa lpxi udg iwt tctbxth id pskpcrt");
})

it("Cipher time 4", () => {
    expect(testing.caeserCipher("We will wait for the enemies to advance", 25)).toMatch("Vd vhkk vzhs enq sgd dmdlhdr sn zcuzmbd");
})

it("Array testing", () => {
    expect(testing.analyzeArray([5, 69, 902, 42, 87])).toEqual({
        average: 221,
        min: 5,
        max: 902,
        length: 5,
    })
})