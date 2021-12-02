const FlashLoan = artifacts.require("FlashLoan");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("FlashLoan", function (/* accounts */) {
  it("Deploy", async () => {
    const contract = await FlashLoan.new();
    assert(contract, "cannot deploy");
  }),
    it("Has Owner after deploy", async () => {
      const contract = await FlashLoan.new();
      const data = await contract.getOwner();
      assert(data.toString());
    })

});
