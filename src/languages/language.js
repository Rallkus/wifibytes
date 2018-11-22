import {readCookie} from '../cookies';

let lang = "";
if(readCookie("lang")==='VAL'){
    lang = require('./valencian.json');
}else{
    lang = require('./spanish.json');
}
export {lang};