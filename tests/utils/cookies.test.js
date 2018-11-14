import {createCookie, readCookie, eraseCookie} from '../../src/utils/cookies';

    test('router clearSlashes function', function() {
        createCookie("test", "abc");
        expect(readCookie("test")).toBe("abc");
        eraseCookie("test");
        expect(readCookie("test")).toBe(null);
    });
