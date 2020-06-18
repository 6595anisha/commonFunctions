//original

console.log("zero seconds");
ShowPNotice();
ShowPImg();


setTimeout(addAnalytics(), 500);

function addAnalytics() {
    $('#pImg').click(function (e) {
        // stop event from bubbling up to row element
        e.stopPropagation();
        Func_Analytic_Click('popup click', 'popup1');
        // now do your stuff
    });
}


//30sec

console.log("30 seconds");
setTimeout(function () {
    ShowPNotice();
    ShowPImg();
    addAnalytics();
}, 30000);

function addAnalytics() {
    $('#pImg').click(function (e) {
        // stop event from bubbling up to row element
        e.stopPropagation();
        Func_Analytic_Click('popup click', 'popup1');
        // now do your stuff
    });
}


//45sec
console.log("45 seconds");
setTimeout(function () {
    ShowPNotice();
    ShowPImg();
    addAnalytics();
}, 45000);

function addAnalytics() {

    $('#pImg').click(function (e) {

        // stop event from bubbling up to row element
        e.stopPropagation();
        Func_Analytic_Click('popup click', 'popup1')
        // now do your stuff
    });

}

