/**
 * Created by D on 2017/4/13.
 */

export default (func) => {
    return new Promise((resolve, reject) => {
        func();
        resolve();
    });
};