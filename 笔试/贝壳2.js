var str = "2 2";
var tra = str.split(" ");
var n = parseInt(tra[0]);
var m = parseInt(tra[1]);

function getNums(n, m) {
    if (n < 1 || m < 1) {
        return 0;
    }
    var points = (n + 1) * (m + 1);
    var nums = points * (points - 1) * (points - 2) / 6;
    var exc1 = (n - 1) * (m - 1) * 2;
    var count = 2;
    while (count * 2 <= n) {
        exc1 += (n + 1 - count * 2) * (m - 1);
        count++;
    }
    count = 2;
    while (count * 2 <= m) {
        exc1 += (m + 1 - count * 2) * (n - 1);
        count++;
    }
    var exc2 = (n + 1) * (m - 1) + (m + 1) * (n - 1);
    console.log((nums - exc1 - exc2));
}

getNums(n, m);