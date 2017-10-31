var querySearchString = function(){
    var obj = {};
    if (location.search) {
        var keyValueArray = location.search.substring(1).split("&");
        var length = keyValueArray.length;
        for(var prop in keyValueArray){
            var keyValuePair = keyValueArray[prop].split("=")
            obj[keyValuePair[0]] = keyValuePair[1];
        }
    }
    return obj;
};