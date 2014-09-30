var expect = require('chai').expect
  , flutil = require('../..');

describe('cli-flag-util:', function() {
  it('should get no variants (invalid)', function(done) {
    var res = flutil.getNoVariants(null);
    expect(res).to.eql(null);
    done();
  });

  it('should get no variants (string)', function(done) {
    var res = flutil.getNoVariants('--[no]-color');
    expect(res.yes).to.eql('--color');
    expect(res.no).to.eql('--no-color');
    done();
  });

  it('should get no variants (string)', function(done) {
    var res = flutil.getNoVariants('--color');
    expect(res).to.eql(false);
    done();
  });

  it('should get no variants (function)', function(done) {
    var res = flutil.getNoVariants({name: function(){return '--[no]-color'}});
    expect(res.yes).to.eql('--color');
    expect(res.no).to.eql('--no-color');
    done();
  });

})
