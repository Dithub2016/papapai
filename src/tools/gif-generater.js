/**
 * Created by Administrator on 2017/4/14.
 */

export default (src1, src2, total, begin) => {
    let
        start = begin || 1,
        arr = [];
    while (start < total + 1) {
        arr.push(src1 + start++ + src2);
    }
    return arr;
};