/**
 *
 Created by zhangzhao on 2018/3/11.
 */

function sleep(ms) {
    var now = new Date().getTime();
    while(new Date().getTime() < now + ms);
}
console.time('start');
sleep(2000);
console.timeEnd('start');
