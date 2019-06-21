describe("binarySearch", function() {
    it("7 in [1,20,5,10,3,8,7,9,11] -> 6", function() {
      assert.equal(binarySearch([1,20,5,10,3,8,7,9,11], 7), 6);
    });
    it("3 in [] -> -1", function() {
      assert.equal(binarySearch([], 3), -1);
    });
    it("10 in [10,11,12,18,16] -> 0", function() {
      assert.equal(binarySearch([10,11,12,18,16], 10), 0);
    });
    it("16 in [10,11,12,18,16] -> 4", function() {
        assert.equal(binarySearch([10,11,12,18,16], 16), 4);
    });
    it("13 in [10,11,12,18,16] -> -1", function() {
        assert.equal(binarySearch([10,11,12,18,16], 13), -1);
    });
});