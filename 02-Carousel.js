const carouselBody = document.querySelector('.carousel .body')
const dots = document.querySelector('.dots')
const prevBtn = document.querySelector('.chevron.prev-btn')
const nextBtn = document.querySelector('.chevron.next-btn')

const userData = [{
        image: "joanna.jpg",
        testomonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam magni officiis sint temporibus ullam? Consectetur eos aut magni amet eius magnam nesciunt ad sunt voluptate, id quam aspernatur tempore?",
        name: "Joanna Bell",
        job: "Senior Product Manager at NPM commercial"
    },
    {
        image: "julian.jpg",
        testomonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta ipsa voluptate porro in. Accusamus totam magni fugit, esse consequatur, aspernatur facilis inventore officia eum modi, dignissimos molestias possimus cupiditate!",
        name: "Julian Graham",
        job: "Senior Product Manager at Samsung Electronics"
    },
    {
        image: "maria.jpg",
        testomonial: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta in obcaecati adipisci facere atque natus beatae assumenda nihil provident nulla! Inventore minus officia ipsa optio incidunt. Deserunt, fuga. Recusandae, quos?",
        name: "Maria De Laura",
        job: "Senior Product Manager at NPM commercial"
    },
    {
        image: "shahin.jpg",
        testomonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora ipsum, dolore placeat enim nam magni illum maiores exercitationem, accusantium hic iste numquam voluptas temporibus voluptatum tempore, ut voluptatem quam.",
        name: "Shahin Norman",
        job: "Senior Product Manager at NPM commercial"
    }
]

const generateBody = userData => {
    return `
        <img src="/images/${userData.image}" alt="maria" />
        <div class="testomonial">
            <p class="text">
                "${userData.testomonial}"
            </p>
            <div class="title">
                <p class="author">${userData.name}</p>
                <p class="job">
                    ${userData.job}
                </p>
            </div>
            <button class="learnmore-btn">Learn more</button>
        </div>
    `
}

const fillDot = (index, isFill) => {
    if (isFill)
        document.querySelectorAll('.dots .dot')[index].classList.add('fill')
    else 
        document.querySelectorAll('.dots .dot')[index].classList.remove('fill')
}

// Initialize body
var index = 0
carouselBody.innerHTML = generateBody(userData[index])

// Generate dots
const countUser = userData.length
for (i = 0; i < countUser; i++) {
    dots.innerHTML += `<div class = "dot"> </div>`
}

fillDot(index, true)

// Handle clicking prev button
prevBtn.addEventListener('click', () => {
    fillDot(index, false)
    index === 0 ? index = userData.length - 1 : index--
    carouselBody.innerHTML = generateBody(userData[index])
    fillDot(index, true)
})

// Handle clicking next button
nextBtn.addEventListener('click', () => {
    fillDot(index, false)
    index === userData.length - 1 ? index = 0 : index++
    carouselBody.innerHTML = generateBody(userData[index])
    fillDot(index, true)
})
