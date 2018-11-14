import {createCookie, readCookie, eraseCookie} from '../../src/utils/cookies';

    test('cookies functions', function() {
        createCookie("test", "abc");
        console.log(readCookie("test"));
        expect(readCookie("test")).toBe("abc");
        eraseCookie("test");
        expect(readCookie("test")).toBe(null);
        createCookie("","ddd");
        expect(readCookie("")).not.toBe("ddd");
    });
