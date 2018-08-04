function toTheCenter() {
    var elem = document.getElementById("center_icon");   
    var pos = 30;
    var id = setInterval(shrink, 10);
    function shrink() {
        if (pos === 0) {
        clearInterval(id);
        } else {
        pos--; 
        elem.style.width= 70+(pos*3) + 'px'
        elem.style.height= 70+(pos*3) + 'px'
        }
    }
}

function toPointer() {
    $('#center_icon').addClass('openHid')
}

setTimeout(toTheCenter, 3000);
setTimeout(toPointer, 3000);

$(document).on('click', 'div.openHid', function(event){
    event.preventDefault();
    var plusIcon = $('#center_icon');
    var inputBox = $('#input-box');
    var textBox = $('#text-box');
    plusIcon.click(function(){
        if(inputBox.hasClass('input-box-open')){
            inputBox.removeClass('input-box-open');
            textBox.focusout();
        } else {
            inputBox.addClass('input-box-open');
            textBox.focus();
        }
        $( this ).off( event );
    });
});  

function addItem (){
	var itemVal = $('#text-box').val();
	var item = '<li class="animated flipInX"><div class="checkbox"><label><span class="checkbox-mask"></span><input type="checkbox" />'+ itemVal +'</label><span class="close"><i class="fa fa-times"></i></span></div></li>';
    if (itemVal !== ''){
        $('.todo-list').append(item);
    }
    $('#text-box').val('').attr('placeholder', 'Add task...');
};

function pushItem() {
    var textBox = $('#text-box');
    $('.add-btn').on('click', function () {
		addItem();
        textBox.focus();
    });
    refresh();
}

function refresh(){
    $('.todo-list li').removeClass('animated flipInX');		
};

pushItem();

$(function (){
$('.todo-list').on('click', '.close', function(){
    var box = $(this).parent().parent();
    
    box.removeClass('animated flipInX').addClass('animated bounceOutLeft');
    setTimeout(function(){
        box.remove();
    }, 500);
});

$('.todo-list').on('click', 'input[type="checkbox"]', function(event){	
    var li = $(this).parent().parent();
    var checked = $('input[type="checkbox"]')
    li.toggleClass('animated flipInX');
    setTimeout(function(){
        li.removeClass('animated flipInX');
    }, 500);
    
    if (checked.is(':checked')) {
        li.addClass('backview')
    } else {
        li.removeClass('backview')
    }
});

});
$('#text-box').keypress(function(e){
    if(e.which == 13){
        addItem();
    }
});