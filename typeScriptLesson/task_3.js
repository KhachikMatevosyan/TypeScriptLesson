var color = ["red", "yello", "blue", "black"];
var randomColor = function (arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        var random = Math.floor(Math.random() * arr.length);
        if (!newArray.includes(random)) {
            console.log(arr[random]);
            newArray.push(random);
        }
        ;
    }
};
randomColor(color);
