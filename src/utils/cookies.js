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
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    let filter = ca.filter(datos => datos.startsWith(nameEQ));
    return filter[0] !== undefined? filter[0].substring(nameEQ.length) : null;
}

// Erase cookie
function eraseCookie(name) {
    createCookie(name,"",-1);
}

export {createCookie, readCookie, eraseCookie};