// 特定语法匹配替换
// 说明：匹配字符串中形如 =g文字文字= 的语法，并将相应部分转化为对应的标签文字文字
// 示例：
// transform('=g1.18 进入开发='); // <g>1.18 进入开发</g>
// transform('=g1.23 联调(-1)=，=g1.25 发布(+1)=')；// <g>1.23 联调(-1)</g>，<g>1.25 发布(+1)</g>
// transform('1.25 发布')； // 1.25 发布

function transform(str) {
    return str.replace(/(?:=g)(.*?)(=)/g, (match, $1, $2, $3) => {
        console.log(match, $1, $2, $3)
        return '<g>' + $2 + '</g>'
    })
}
let str = '=g1.18进入开发='
let str1 = '=g1.23 联调(-1)=，=g1.25 发布(+1)='
let str2 = '1.25 发布'
console.log(transform(str))
// console.log(transform(str1))
// console.log(transform(str2))
