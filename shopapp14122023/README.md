https://docs.google.com/document/d/1qekawRA7DM8UXHM-_zxkWQ-zqUccgNBXhlLLAZK4hNs/edit

Задан API, который ссылается на список всех товаров в неком магазине
let url = 'https://fakestoreapi.com/products'
Используя роутинг, необходимо реализовать 2 страницы по следующим макетам

1 страница. Список всех товаров. 
Данная страница должна в виде списка выводить все товары по примеру:


Все товары должны быть доступны по ссылке /products
Стилизация элементов может быть произвольной (grid-template). В работе не предусмотрены header, footer
В качестве описания блока необходимо взять имя товара (см запрос). Имя каждого товара должно перенаправлять на ссылку /product/{id}
Предусмотрите страницу NotFoundPage, которая будет отображать ошибку в случае перехода по неизвестному роуту. 
На этой странице сделайте кнопку на переход к  /products
Для каждого товара на данной странице необходимо предусмотреть его рейтинг в виде звезд. Для этого предусмотрите 1 отдельный компонент, который получает необходимый prop и выводит необходимое количество активных и неактивных иконок. 

Обратите внимание на то, что рейтинг представляется в виде дробного числа. Его необходимо округлить по правилам математики.


2 страница. Описание товара
Данная страница должна содержать полную информацию о товаре по следующему примеру:
	

Стилизация элементов может быть произвольной. (Порядок элементов должен остаться как на макете)
Страница должна быть доступна по ссылке /product/{id}
При переходе на страницу должна выводиться информация конкретного товара
На этой странице также необходимо реализовать рейтинг в виде звезд. 
Также на странице должна быть кнопка “Назад”, которая снавигирует по истории на 1 страницу назад


Примечание:

Стилизация элементов остается на ваше усмотрение, но согласно сухому макету.
Не забудьте перед решением установить библиотеку: 
npm i react-router-dom 

Иконку можно импортировать сразу на разметку:
 
(index.html)
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

(компонент)
Элемент неактивной звезды:
<span class="fa fa-star"></span> 

(компонент)
Активная звезда: 
<span class="fa fa-star active"></span> 

(css)
.active {
	color: orange
}

// -------------14,12,2023
	Созданы 
		404page
		Categories
		Карточка товара 
		рейтинг
		удаление карточки по клику на Х
	нужно

	
	
	//---