import {Router} from '../src/router';

test('router add function', () => {
    Router.add(/a/); 
  expect(Router.routes[0].re.toString()).toMatch(/a/);    
});

test('router navigate function', function() {
    Router.navigate('a');
    expect(window.location.href.toString()).toMatch(/a/);
    expect(Router.getFragment()).toEqual('a');
});

test('router remove function', function() {
    Router.remove('/a/');
    expect(Router.routes).toEqual([]);  
});

test('router flush function', function() {
    Router.add('/a/');
    Router.add('/b/');
    Router.flush();
    expect(Router.routes).toEqual([]);  
});

test('router check function', function() {
    Router.add('/abcd/');
    expect(Router.check('/abcd')).toEqual(Router); 
    Router.remove('/abcd/');
});

test('router listen function', function() {
    expect(Router.listen()).toEqual(Router); 
});

test('router clearSlashes function', function() {
    expect(Router.clearSlashes("/abc/")).toBe("abc"); 
});

test('router config function', function() {
    Router.config({ mode: 'history'});
    expect(Router.mode).toBe('history');
    Router.config({ mode: ''});
    expect(Router.mode).toBe('hash');
});

test('router getFragment function', function() {
    Router.add('abc');
    Router.navigate('abc');
    expect(Router.getFragment()).toEqual('abc');
    Router.remove('abc');
});


