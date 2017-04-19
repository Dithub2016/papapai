/**
 * Created by D on 2017/4/13.
 */

export default requestAnimationFrame =
    window.requestAnimationFrame ||
    ((func) => {
        setTimeout(func, 16.7);
    })