/**
 * Created by alone on 2017/5/15.
 */
var a1       = createObject( 1, '哲学');
var a2       = createObject( 2, '宗教');
var a3       = createObject( 3, '伦理');
var a4       = createObject( 4, '逻辑');
var a5       = createObject( 5, '美学');
var a6       = createObject( 6, '其它');
// var a7       = createObject( 7, '天文');
// var a8       = createObject( 8, '地理');
// var a9       = createObject( 9, '数学');
// var a10      = createObject(10, '物理');
// var a11      = createObject(11, '化学');
// var a12      = createObject(12, '其它');

var shouji          = new Object();
shouji.name         = '';
shouji.content = [ a1, a2, a3, a4, a5, a6];

var a7 = createObject(7, '天文');
var a8 = createObject(8, '地理');
var a9 = createObject(9, '数学');
var a10 = createObject(10, '物理');
var a11 = createObject(11, '化学');
var a12 = createObject(12, '其它');
var content2 = [ a7, a8, a9, a10, a11, a12];
var jiadian      = createType('', content2);

var type_list        = [[shouji], [jiadian]];
function createObject(id, name) {
    var temp         = new Object();
    temp.id      = id;
    temp.name        = name;
    return temp;
}
function createType(name, content) {
    var temp         = new Object();
    temp.name        = name;
    temp.content         = content;
    return temp;
}
function getTypeList() {
    return type_list;
}