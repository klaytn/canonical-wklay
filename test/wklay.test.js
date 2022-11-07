const WKLAY = artifacts.require("WKLAY");
const { BN, expectRevert } = require("@openzeppelin/test-helpers");
require("chai")
  .use(require("chai-as-promised"))
  .should();

const MAX =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935";

contract("WKLAY", accounts => {
  const [deployer, user1, user2] = accounts;
  let wklay;

  beforeEach(async () => {
    wklay = await WKLAY.new({ from: deployer });
  });

  describe("deployment", async () => {
    it("it retuns the name", async () => {
      let name = await wklay.name();
      name.should.equal("Wrapped Klay");
    });

    it("deposits klay", async () => {
      const balanceBefore = await wklay.balanceOf(user1);
      await wklay.deposit({ from: user1, value: 1 });
      const balanceAfter = await wklay.balanceOf(user1);
      balanceAfter
        .toString()
        .should.equal(balanceBefore.add(new BN("1")).toString());
    });

    it("deposits klay using the legacy method", async () => {
      const balanceBefore = await wklay.balanceOf(user1);
      await wklay.sendTransaction({ from: user1, value: 1 });
      const balanceAfter = await wklay.balanceOf(user1);
      balanceAfter
        .toString()
        .should.equal(balanceBefore.add(new BN("1")).toString());
    });
  });

  describe("with a positive balance", async () => {
    const receiver = "0x0000000000000000000000000000000000000000";
    beforeEach(async () => {
      await wklay.deposit({ from: user1, value: 10 });
    });

    it("returns the Klay balance as total supply", async () => {
      const totalSupply = await wklay.totalSupply();
      totalSupply.toString().should.equal("10");
    });

    it("Withdraw klay", async () => {
      const balanceBefore = await wklay.balanceOf(user1);
      await wklay.withdraw(1, { from: user1 });
      const balanceAfter = await wklay.balanceOf(user1);
      balanceAfter
        .toString()
        .should.equal(balanceBefore.sub(new BN("1")).toString());
    });

    it("Should not withdraw beyond balance", async () => {
      await expectRevert(
        wklay.withdraw(100, { from: user1 }),
        "WKLAY: amount exceeds balance"
      );
    });

    it("transfers klay", async () => {
      const balanceBefore = await wklay.balanceOf(user2);
      await wklay.transfer(user2, 1, { from: user1 });
      const balanceAfter = await wklay.balanceOf(user2);
      balanceAfter
        .toString()
        .should.equal(balanceBefore.add(new BN("1")).toString());
    });

    it("withdraws klay by transferring to address(0)", async () => {
      const balanceBefore = await wklay.balanceOf(user1);
      await wklay.transfer(receiver, 1, { from: user1 });
      const balanceAfter = await wklay.balanceOf(user1);
      balanceAfter
        .toString()
        .should.equal(balanceBefore.sub(new BN("1")).toString());
    });

    it("transfer klay using tranferFrom", async () => {
      const balanceBefore = await wklay.balanceOf(user2);
      await wklay.transferFrom(user1, user2, 1, { from: user1 });
      const balanceAfter = await wklay.balanceOf(user2);
      balanceAfter
        .toString()
        .should.equal(balanceBefore.add(new BN("1")).toString());
    });

    it("withdraws klay by transferring from someone to address(0)", async () => {
      const balanceBefore = await wklay.balanceOf(user1);
      await wklay.transferFrom(user1, receiver, 1, { from: user1 });
      const balanceAfter = await wklay.balanceOf(user1);
      balanceAfter
        .toString()
        .should.equal(balanceBefore.sub(new BN("1")).toString());
    });

    it("approves to increase allowance", async () => {
      const allowanceBefore = await wklay.allowance(user1, user2);
      await wklay.approve(user2, 2, { from: user1 });
      const allowanceAfter = await wklay.allowance(user1, user2);
      allowanceAfter
        .toString()
        .should.equal(allowanceBefore.add(new BN("2")).toString());
    });

    describe("with a positive allowance", async () => {
      beforeEach(async () => {
        await wklay.approve(user2, 1, { from: user1 });
      });

      it("transfers klay using transferFrom and allowance", async () => {
        const balanceBefore = await wklay.balanceOf(user2);
        await wklay.transferFrom(user1, user2, 1, { from: user2 });
        const balanceAfter = await wklay.balanceOf(user2);
        balanceAfter
          .toString()
          .should.equal(balanceBefore.add(new BN("1")).toString());
      });

      it("should not transfer beyond allowance", async () => {
        await expectRevert(
          wklay.transferFrom(user1, user2, 2, { from: user2 }),
          "WKLAY: allowance exceeds balance"
        );
      });
    });
    describe("with a maximum allowance", async () => {
      beforeEach(async () => {
        await wklay.approve(user2, MAX, { from: user1 });
      });

      it("does not decrease allowance using transferFrom", async () => {
        await wklay.transferFrom(user1, user2, 1, { from: user2 });
        const allowanceAfter = await wklay.allowance(user1, user2);
        allowanceAfter.toString().should.equal(MAX);
      });
    });
  });
});
