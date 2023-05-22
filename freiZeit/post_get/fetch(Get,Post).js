// Метод fetch -инструмент, который позволяет

// Get запрос
let url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
	.then(res => res.json())
	.then(data => console.log(data))

	// Post запрос
let obj = {
	name: 'Fasegree'
}
let url = 'https://eooliv06vnulsm8.m.pipedram.net'

fetch(url, {
	method: 'POST',
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify(obj)
})
	.then(res => res.json()).then(data => console.log(data()))