
console.log('123');


// ------------------------------------  Banner
const banner_info = [
	{
		id: 1,
		title: 'Бухгалтерские услуги в вашем городе1',
		button: 'Наша презентация1'
	},
	{
		id: 2,
		title: 'Бухгалтерские услуги в вашем городе2',
		button: 'Наша презентация2'
	},
	{
		id: 3,
		title: 'Бухгалтерские услуги в вашем городе3',
		button: 'Наша презентация3'
	},
	{
		id: 4,
		title: 'Бухгалтерские услуги в вашем городе4',
		button: 'Наша презентация4'
	},
]
const [text_slider_win_baner, text_slider_win_clients, text_slider_win_review] = document.querySelectorAll('.text_slider_win')

console.log(text_slider_win_clients);
const slider_control = document.querySelector('.slider_control')
const banner_text_slider = document.createElement('div')
banner_text_slider.classList.add('text_slider')



   banner_info.map((el, index) => {
		const slide = document.createElement('div')
		slide.classList.add('slide')
		const title= document.createElement('h1')
		const btn= document.createElement('button')

		title.innerText = el.title
		btn.innerText = el.button
		slide.append(title,btn)
		banner_text_slider.append(slide)

	}


  );
 text_slider_win_baner.append(banner_text_slider)







//------------------------  //Banner

//------------------- Clients
const ourClients = [
	{
		id: 1,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 2,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 3,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 4,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 5,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 6,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 7,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 8,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 9,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 10,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 11,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 12,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 13,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 14,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 15,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 16,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
]


	const sliderImg = document.createElement('div')
	const images = document.createElement('div')
	sliderImg.classList.add('sliderImg')
	images.classList.add('images')

	text_slider_win_clients.prepend(sliderImg)
	sliderImg.append(images)
	ourClients.forEach(el =>{
		const img_client = document.createElement('img')
		img_client.src = el.url_img
		img_client.alt = el.alt
		images.append(img_client)
	})




// ----------------------   // clients

//-                   specialisation   
const specialisation_info_for_cards = [

	{
		id: 1,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 2,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 3,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 4,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 5,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 6,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
]
const section_specialisation = document.querySelector('.specialisation')

	for (const iterator of specialisation_info_for_cards) {
		const cardEl = document.createElement('div');
		const titleEl = document.createElement('p');

		cardEl.style.backgroundImage= `url(${iterator.url_img})`;
		titleEl.innerText = iterator.title;
		cardEl.append(titleEl)
		section_specialisation.append(cardEl);
	}



//-------------------------- cases 
const cases_info =
[
	{
		id:1,
		dials:90,
		description: 'Завершено крупных сделок',
		url_text: 'Все кейсы',
		url_case: '#'
	},
	{
		id:2,
		dials:90,
		description: 'Завершено крупных сделок',
		url_text: 'Все кейсы',
		url_case: '#'
	},
	{
		id:3,
		dials:90,
		description: 'Завершено крупных сделок',
		url_text: 'Все кейсы',
		url_case: '#'
	},
	{
		id:4,
		dials:90,
		description: 'Завершено крупных сделок',
		url_text: 'Все кейсы',
		url_case: '#'
	},
]

const cases = document.querySelector('.cases')
function renderCases(){
	for (const el of cases_info) {
		const cardEl = document.createElement('div')
		const countCaseEl = document.createElement('span')
		const descrEl = document.createElement('p')
		const caseLinkEl = document.createElement('a')

		countCaseEl.innerText = el.dials;
		descrEl.innerText = el.description;
		caseLinkEl.innerText = el.url_text;
		caseLinkEl.href =  el.url_case

		cardEl.append(countCaseEl, descrEl, caseLinkEl)
		cases.append(cardEl)
	}
}
renderCases();


//---------------------------  Отзывы рендер
const reviews_info = [
	{
		id: 1,
		text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolores dolor deserunt! Voluptatibus assumenda accusantium sint consequuntur unde, libero molestiae maxime vel alias itaque. Aut, labore officiis. Ipsa nulla maxime quae laudantium illo itaque veritatis, laboriosam facilis ullam debitis culpa fugit aperiam aliquam consequatur nobis! Quod repellendus eveniet recusandae ut!',
		url: './media/avatar_review.png',
		username: 'Екатерина Иванова',
		profession: 'Директор ООО “Раз-два”'
	},
	{
		id: 2,
		text:' dolor sit amet consectetur adipisicing elit. Sed dolores dolor deserunt! Voluptatibus assumenda accusantium sint consequuntur unde, libero molestiae maxime vel alias itaque. Aut, labore officiis. Ipsa nulla maxime quae laudantium illo itaque veritatis, laboriosam facilis ullam debitis culpa fugit aperiam aliquam consequatur nobis! Quod repellendus eveniet recusandae ut!',
		url: './media/avatar_review.png',
		username: 'Людмила Иванова',
		profession: 'Работник ООО “Раз-два”'
	},
	{
		id: 3,
		text:'ipsum dolor sit amet consectetur adipisicing elit. Sed dolores dolor deserunt! Voluptatibus assumenda accusantium sint consequuntur unde, libero molestiae maxime vel alias itaque. Aut, labore officiis. Ipsa nulla maxime quae laudantium illo itaque veritatis, laboriosam facilis ullam debitis culpa fugit aperiam aliquam consequatur nobis! Quod repellendus eveniet recusandae ut!',
		url: './media/avatar_review.png',
		username: 'Елена Кротова',
		profession: 'Менеджер ООО “Раз-два”'
	},
	{
		id: 3,
		text:'ipsum dolor sit amet consectetur adipisicing elit. Sed dolores dolor deserunt! Voluptatibus assumenda accusantium sint consequuntur unde, libero molestiae maxime vel alias itaque. Aut, labore officiis. Ipsa nulla maxime quae laudantium illo itaque veritatis, laboriosam facilis ullam debitis culpa fugit aperiam aliquam consequatur nobis! Quod repellendus eveniet recusandae ut!',
		url: './media/avatar_review.png',
		username: 'Елена Кротова',
		profession: 'Менеджер ООО “Раз-два”'
	},
	
]
// const sliderReviews = document.querySelector('.sliderReviews')

	const reviews_text_slider = document.createElement('div')
	reviews_text_slider.classList.add('text_slider')
	reviews_info.forEach(element => {
		
		const slide = document.createElement('div')
		slide.classList.add('slide')
		const text = document.createElement('p')
		text.innerText = element.text
		const user = document.createElement('div')
		const img = document.createElement('img')
		img.src = element.url
		const userinfo = document.createElement('div')
		userinfo.classList.add('userinfo')
		const username= document.createElement('span')
		username.classList.add('username')
		username.innerText = element.username
		const profession = document.createElement('span')
		profession.classList.add('profession')
		profession.innerText = element.profession
		reviews_text_slider.append(slide)
		slide.append(text, user)
		user.append(img, userinfo)
		userinfo.append(username, profession)
	});

	text_slider_win_review.append(reviews_text_slider)



 /// ----------------------------------------  BURGER
const burger_menu = document.querySelector('.burger_menu')
const dropMenu = document.querySelector('.header ul')

burger_menu.addEventListener('click', () => {
	console.log('active');
	burger_menu.classList.toggle('active')
	dropMenu.classList.toggle('show')
})
  
// --------------------        control_slider
const baner_slider_arrows = document.querySelector('#banner_slider_arrows')
const bannerSlider = document.querySelector('.text_slider')

const clients_slider_arrows = document.querySelector('#clients_slider_arrows')
const clientsSlider = document.querySelector('.clients .images')

const reviews_slider_arrows = document.querySelector('#reviews_slider_arrows')
const reviewsToRight = document.querySelector('.reviews .to_right')
// const reviewsSlider = document.querySelector('')

baner_slider_arrows.addEventListener('click', (e) => sliderControl(e))

clients_slider_arrows.addEventListener('click', (e) => sliderControl(e))
reviews_slider_arrows.addEventListener('click', (e) => sliderControl(e))

//------------------------------------------------------------
let bannerSlideIndex = 0;
let clientsSlideIndex = 0;
let reviewsSlideIndex = 0;

let bannerWidthSlide = 590;
let clientsWidthSlide = 1115+25;
let reviewsWidthSlide = 1000;
 //                               SLIDER  CONTROL FUNCTION

 //-------------------------------------------------------------------
function sliderControl(e){
	
		let cards_container
		let card_width
		let arrayLength
		// console.log(e.target.parentElement.id);
	switch (e.target.parentElement.id) {
		case 'banner_slider_arrows':
			cards_container = banner_text_slider;
			slider_index = bannerSlideIndex
			card_width=bannerWidthSlide
			arrayLength=banner_info.length

			if(e.target.className === 'to_left'){
				console.log(`contaner: ${cards_container},\n slideIndex: ${slider_index}, \n cardWidth: ${card_width}`);
				
				if (bannerSlideIndex !== 0){
					banner_text_slider.style.left = `${-1 * --bannerSlideIndex * card_width}px`
				} else {
					console.log('ind '+bannerSlideIndex);
					bannerSlideIndex = arrayLength - 1
					banner_text_slider.style.left = `${-1 * bannerSlideIndex * card_width}px`
				}
			} else if (e.target.className === 'to_right'  ){
				console.log(`contaner: ${banner_text_slider},\n slideIndex: ${bannerSlideIndex}, \n cardWidth: ${card_width}`);
				if (bannerSlideIndex !== arrayLength - 1){
						banner_text_slider.style.left = `${-1 * ++bannerSlideIndex * card_width}px`
				} else {
						bannerSlideIndex = 0
						banner_text_slider.style.left = '0px'
				}
			}

			break;

		case 'clients_slider_arrows':
			cards_container = images;
			clientsSlideIndex = clientsSlideIndex
			card_width = clientsWidthSlide
			arrayLength = ourClients.length/4

			console.log(`contaner: ${cards_container},\n slideIndex/4: ${ourClients.length}, \n cardWidth: ${card_width}`);
			if(e.target.className === 'to_left'){
				
				if (clientsSlideIndex !== 0){
					cards_container.style.left = `${-1 * --clientsSlideIndex * clientsWidthSlide}px`
				} else {
					console.log('ind '+clientsSlideIndex);
					clientsSlideIndex = ourClients.length/4 - 1
					cards_container.style.left = `${-1 * clientsSlideIndex * clientsWidthSlide}px`
				}
			} else if (e.target.className === 'to_right'  ){
				console.log(`contaner: ${cards_container},\n slideIndex: ${clientsSlideIndex}, \n cardWidth: ${card_width}`);
				if (clientsSlideIndex !== ourClients.length/4 - 1){
						cards_container.style.left = `${-1 * ++clientsSlideIndex * clientsWidthSlide}px`
				} else {
						clientsSlideIndex = 0
						cards_container.style.left = '0px'
				}
			
			}

			break;

		case 'reviews_slider_arrows':
			cards_container = reviews_text_slider;
			slider_index = reviewsSlideIndex
			card_width = reviewsWidthSlide
			arrayLength = reviews_info.length

			if(e.target.className === 'to_left'){
				console.log(`contaner: ${reviews_text_slider},\n slideIndex: ${slider_index}, \n cardWidth: ${card_width}`);
				
				if (reviewsSlideIndex !== 0){
					cards_container.style.left = `${-1 * --reviewsSlideIndex * card_width}px`
				} else {
					console.log('ind '+reviewsSlideIndex);
					reviewsSlideIndex = arrayLength - 1
					cards_container.style.left = `${-1 * reviewsSlideIndex * card_width}px`
				}
			} else if (e.target.className === 'to_right'  ){
				console.log(`contaner: ${cards_container},\n slideIndex: ${reviewsSlideIndex}, \n cardWidth: ${card_width}`);
				if (reviewsSlideIndex !== arrayLength - 1){
						cards_container.style.left = `${-1 * ++reviewsSlideIndex * card_width}px`
				} else {
						reviewsSlideIndex = 0
						cards_container.style.left = '0px'
				}
			
			}
		
			break;

			

	}
	
	
	// currentWidth ??? исправить
}

 //-- Banner rounds
 const [banner_rounds, clients_rounds, reviews_rounds] = document.querySelectorAll('.slider_points')

for (let i = 0; i < banner_info.length; i++){
    const round_btn = document.createElement('div')
    // round_btn.className = 'round_btn'
    banner_rounds.append(round_btn)

    round_btn.onclick = () => {
        slider_index = i
        banner_text_slider.style.left = `${-1 * slider_index * bannerWidthSlide}px`
    }
}

 //-- Banner rounds
 



for (let i = 0; i < ourClients.length/4; i++){
    const round_btn = document.createElement('div')
    // round_btn.className = 'round_btn'
    clients_rounds.append(round_btn)

    round_btn.onclick = () => {
        slider_index = i
        images.style.left = `${-1 * slider_index * clientsWidthSlide}px`
    }
}


for (let i = 0; i < reviews_info.length; i++){
	const round_btn = document.createElement('div')
	// round_btn.className = 'round_btn'
	reviews_rounds.append(round_btn)

	round_btn.onclick = () => {
			slider_index = i
			reviews_text_slider.style.left = `${-1 * slider_index * reviewsWidthSlide}px`
	}
}




// Form
// Получение элементов формы
const form = document.querySelector('.contactForm');
const formBtn = document.querySelector('.formBtn')
formBtn.addEventListener('click', (e) => getFormData(e))
function getFormData(e){
	e.preventDefault()
	let formData = new FormData(form);

	// Преобразование FormData в объект
	let formObject = {};
	formData.forEach(function(value, key){
			formObject[key] = value;
	});
	
	console.log(formObject); // объект, содержащий данные из формы
}



function modalWindow(){
	const modalWrapper = document.createElement('div')
	const modalContainer = document.createElement('div')
	const modalTitle = document.createElement('h2')
	const modalForm = document.createElement('form')
	const modalEmail = document.createElement('input')
	const modalPassword = document.createElement('input')
	const modalResetPass = document.createElement('span')
	const modalSubmit = document.createElement('button')

	modalTitle.innerText = 'Вход'
	modalEmail.placeholder = 'Your E-mail'
	modalPassword.placeholder = 'Your Password'
	

	document.body.append(modalWindow)
	modalWrapper.append(modalContainer)
	modalContainer.append(modalTitle, modalForm)
	modalForm.append(modalEmail, modalPassword, modalResetPass, modalSubmit)
}