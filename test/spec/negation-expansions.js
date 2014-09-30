var expect = require('chai').expect
  , flutil = require('../..');

describe('cli-flag-util:', function() {
  it('should get empty no expansions', function(done) {
    var res = flutil.getNoExpansions();
    expect(res).to.eql([]);
    done();
  });
  it('should get no expansions', function(done) {
    var res = flutil.getNoExpansions(['--[no]-color', '--flag']);
    expect(res).to.eql(['--color', '--no-color', '--flag']);
    done();
  });
})
