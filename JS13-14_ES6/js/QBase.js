'use strict'
let QBase = {
	title: 'Начинающим: Тест на знание компьютера',
	sentence: '(Выберите правильный вариант ответа)',
	question: [
		{
			text: 'Что находится на материнской плате?',
			answer: [
				{text: 'процессор', check: true},
				{text: 'монитор', check: false},
				{text: 'винтчестер', check: false},
			]
		},	
		
		{
			text: 'Что такое винчестер?',
			answer: [
				{text: 'винтовка ', check: false},
				{text: 'жесткий диск', check: true},
				{text: 'карабин', check: false},
			]
		},	
		
		{
			text: 'Чему равен 1ГБ?',
			answer: [
				{text: '1024 Мб', check: true},
				{text: '124 бит', check: false},
				{text: '1048576 Кб', check: true},
				{text: '37 Тб', check: false},
			]
		},	
	]	
};	

	localStorage.setItem('QBase',JSON.stringify(QBase));
	QBase = localStorage.getItem('QBase');
	QBase = JSON.parse(QBase);
	
