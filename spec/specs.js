describe('pingPong', function() {
  it("takes a number that is divisible by 15, and returns 'pingpong'", function() {
      expect(pingPong(45)).to.equal('pingpong');
    });

  it("takes a number that is divisible by 3, and returns 'ping'", function() {
    expect(pingPong(6)).to.equal('ping');
  });

  it("takes a number that is divisible by 5 and returns 'pong'", function() {
    expect(pingPong(20)).to.equal('pong');
  });
});
// describe('counter', function() {
//   it("takes a number as input and counts up to that number", function() {
//       expect(pingpong("45")).to.equal("pingpong");
//     });
