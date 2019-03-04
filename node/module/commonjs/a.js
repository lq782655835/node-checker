let count = 1
let obj = {
    count: 1
}
exports.obj = obj
exports.add = function() {
    // return ++count
    return ++obj.count
}