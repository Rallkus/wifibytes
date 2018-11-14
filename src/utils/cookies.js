function createCookie(name, value, days) {
    if(name !== ""){
        let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
    } 
}

// Read cookie
function readCookie(name) {
    let re = new RegExp('[; ]'+name+'=([^\\s;]*)');  
    let sMatch = (' '+document.cookie).match(re);
    return (name && sMatch)? unescape(sMatch[1]) : null;
}

// Erase cookie
function eraseCookie(name) {
    createCookie(name,"",-1);
}

export {createCookie, readCookie, eraseCookie};