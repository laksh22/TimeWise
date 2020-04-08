// var assert = require('assert');
// const chai = require('chai');
// var server = require('../../app');
// var should = chai.should();
// var expect = require('chai').expect
// var chaiHttp = require('chai-http');
// var load = require('../fixtures/rssFixtures')

// chai.use(chaiHttp)

// load();

// it('should list ALL posts in db on GET', function(done) {
//     chai.request(server)
//       .get('/api/rss.xml')
//       .end(function(err, res){
//         res.should.have.status(200);
//         assert.equal(res.type,'application/xml');
//         done();
//       });
//   });


// // test: mock db call and assert xml
// //