let courses = undefined;

window.addEventListener("load" , () =>{
    fetch('db.json').then(res => res.json()).then(data =>
        {
            courses = data.courses
            getCourses(courses)
        })
        .catch(err => console.log(err))
});

const searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('keydown', ()=>{
    const value = searchInput.value.toUpperCase();
    console.log(value)
    if(value === ''){
        const cards = document.querySelector('.cards')
        const card = document.querySelectorAll('.card');
        card.forEach((element)=> {
            element.remove()
        })
        getCourses(courses)
    } else {
        const newCourses = courses.filter(obj => {
            return Object.values(obj).toString().toLocaleUpperCase().includes(value)
        })
        const cards = document.querySelector('.cards')
        const card = document.querySelectorAll('.card');
        card.forEach((element)=> {
            element.remove()
        })
        getCourses(newCourses)
    }
})

function getCourses(courses){
    for(let i = 0; i < courses.length; i++){
        // cards and card
        const cards = document.querySelector('.cards')
        const card = document.createElement('div')
        card.classList.add('card');
        cards.appendChild(card)
        // img
        const img = document.createElement('img')
        img.src = courses[i].image
        card.appendChild(img)
        // card-content
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content'
        card.appendChild(cardContent)
        // card-content / p
        const paragraph = document.createElement('p')
        paragraph.textContent = courses[i].title
        cardContent.appendChild(paragraph);
        // card-content /author
        const span = document.createElement('span')
        span.classList.add('author-span');
        span.textContent = courses[i].author
        cardContent.appendChild(span);

        // rate-content 
        const rateContent = document.createElement('div');
        rateContent.className = 'rate-content'
        cardContent.appendChild(rateContent)

        const rate = document.createElement('span')
        rate.classList.add('rate-span');
        rate.textContent = courses[i].rate
        rateContent.appendChild(rate);

        const peopleReview = document.createElement('span')
        peopleReview.classList.add('peopleReview-span');
        peopleReview.textContent = courses[i].peopleReview
        rateContent.appendChild(peopleReview);

        // price-content
        const priceContent = document.createElement('div');
        priceContent.className = 'price-content'
        cardContent.appendChild(priceContent)

        const price = document.createElement('span')
        price.classList.add('price-span');
        price.textContent = courses[i].price
        priceContent.appendChild(price);

        const oldPrice = document.createElement('span')
        oldPrice.classList.add('oldPrice-span');
        oldPrice.textContent = courses[i].oldPrice
        priceContent.appendChild(oldPrice);

    }
}