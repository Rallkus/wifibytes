import {get} from '../src/utils/utils';

const mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    status: 200,
    response: "resolve"
};
const oldXMLHttpRequest = window.XMLHttpRequest;
window.XMLHttpRequest = jest.fn(() => mockXHR);

describe('get function test to be resolved', function() {
    test('Should return resolve', function(done) {
        const reqPromise = get();
        mockXHR.onload();
        reqPromise.then((response) => {
            expect(response).toBe('resolve');
            done();
        });
    });
});

const mockaXHR = {
    open: jest.fn(),
    send: jest.fn(),
    status: 400,
    statusText: "rror"
};
