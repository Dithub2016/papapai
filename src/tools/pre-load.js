/**
 * Created by D on 2017/4/13.
 */
export default (func, src) => {
    let img = new Image();
    img.onload = function() {
        img.onload = null;
        func();
    };
    img.src = src;
}