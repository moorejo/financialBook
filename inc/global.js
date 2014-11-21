// JavaScript Document

//drop down menubar
$(document).bind('mobileinit',function(){
   $.mobile.selectmenu.prototype.options.nativeMenu = false;
});