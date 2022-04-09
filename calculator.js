
/*========================================
Project Name: Calculator
Version: 1.0
Author: Shoaib Karim
Copyright: LoopsCorp =======================================*/
function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);

