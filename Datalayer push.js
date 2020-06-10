//pass pushEvent as a string

function datalayerListener(pushEvent) {
    var addPushListener = function (arr, callback) {
        arr.push = function (e) {
            Array.prototype.push.call(arr, e);
            callback(e);
        }
            ;
    };

    addPushListener(dataLayer, function () {
        dl_length = dataLayer.length;
        event_value = dataLayer[dl_length - 1];
        if (event_value.event === pushEvent) {
            //do something
        }
    });
}