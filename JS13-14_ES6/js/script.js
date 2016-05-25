'use strict'
$(function() {
	var template = tmpl($('#test__template').html());
	$('body').html(template(QBase));
	
	for(var i=0;i<QBase.question.length; i++){
		$('.check'+i).addClass('disabled'+i);
		$('.disabled0').on('change',function(){
			if(this.checked){
				$(this).removeClass('disabled0');
				$('.disabled0').attr('disabled','disabled');
			} else {
				$(this).addClass('disabled0');
				$('.disabled0').removeAttr('disabled');
			}
		});
		$('.disabled1').on('change',function(){
			if(this.checked){
				$(this).removeClass('disabled1');
				$('.disabled1').attr('disabled','disabled');
			} else {
				$(this).addClass('disabled1');
				$('.disabled1').removeAttr('disabled');
			}
		});
	}
	
	if($('input:not(:checked)')) {
		var error = 'Ответьте на вопросы, пожалуйста.';
		$('#modalText').append(error);
	};
	
	$('input.test__button').on('click', showResult);
	var result;
	var res=0;
	function showResult(){
		var $chBox = $('input:checked');
		for(var k=0; k< $chBox.length; k++) {
			var str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_')+1);
			var i = +str.substr(0,str.indexOf('_'));
			var j = +str.substr(str.indexOf('_')+1);
			if (QBase.question[i].answer[j].check){
				result = '<span class="correct">' + (i+1) + '. ' + 'правильный. ' + '</span>'+ '<br>';
				res=res+1;
				$('#modalInfo').append(result);
			} else {
				result = '<span class="incorrect">' + (i+1) + '. ' + 'неправильный. ' + '</span>' + '<br>';
				$('#modalInfo').append(result);
			}
		}
		if (res==4) {
			result='<span class="Good">' + 'М О Л О Д Е Ц !!!';
			$('#modalInfo').append(result);
		}
		else {
			result='<span class="Good">' + 'Соберись, ты справишься!!!';
			$('#modalInfo').append(result);
		}
		var selection = $('input');
		for (var i=0; i<selection.length; i++){
			if (selection[i].type == 'checkbox'){
				selection[i].checked = false;
		  }
		  $('.check0').addClass('disabled0').removeAttr('disabled');
		  $('.check1').addClass('disabled1').removeAttr('disabled');
		  res=0;
		}
	}
	/*MODAL FORM*/
	$('input[type=button]').on('click',function(e){ 
		e.preventDefault(); 
		$('#modalForm__overlay').fadeIn(400,function(){ 
				$('#modalForm').css('display', 'block') 
								.animate({
									opacity: 1,
									top: '30%'
								}, 200); 
		});
	});
	
	$('#modalForm__close, #modalForm__overlay').on('click',function(){ 
		$('#modalForm').animate({
							opacity: 0, 
							top: '25%'
						}, 200, function(){
									$(this).css('display', 'none'); 
									$('#modalForm__overlay').fadeOut(400); 
								}
		);
		$('#modalInfo').empty();
	});
});
	
