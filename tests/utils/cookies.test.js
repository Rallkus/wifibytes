import {createCookie, readCookie, eraseCookie} from '../../src/utils/cookies';

    test('cookies functions', function() {
        createCookie("test", "abc");
        expect(readCookie("test")).toBe("abc");
        eraseCookie("test");
        createCookie("dddddddddddd", "sss");
        expect(readCookie("dddddddddddd")).toBe("sss");
        eraseCookie("dddddddddddd");
        expect(readCookie("test")).toBe(null);
        createCookie("","ddd");
        expect(readCookie("")).not.toBe("ddd");
    });
