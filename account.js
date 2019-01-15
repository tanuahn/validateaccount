function account(str) {
    var regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}

var a = "fdfkjfkdjf";
var b = "babc_dsds";
var c = "Adsds_d";
var d = "As_d";
console.log(account(a));
console.log(account(b));
console.log(account(c));
console.log(account(d));