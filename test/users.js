const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');
const userRequest = require('../data/usersRequestData')[0];
const env = require('../endpoint/test');

describe('Availability of users', () => {
    let response;

    before(async () => {
        userRequest.uri = env.uri + userRequest.uri;
        response = await sendRequest(userRequest);
    });

    it('Users: Verifying http status code', () => {
        expect(response.statusCode).to.eql(200);
    });

    it('Users: Verifying http status code', () => {
        expect(response.headers['content-type']).to.eql('application/json; charset=utf-8');
    });

    it('Users: Verifying http status code', () => {
         expect(response.body).to.have.lengthOf(10)
    });

});