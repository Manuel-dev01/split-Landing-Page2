const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
// const leftSection = document.querySelector('.split')
const h1 = left.children[0]
const secondh1 = right.children[0]
console.log(h1)
const btnLeft = left.children[1]
const btnRight = right.children[1]

left.addEventListener('mouseenter', () =>{
    container.classList.add('hover-left')
    if(container.classList.contains('hover-left')){
        secondh1.style.fontSize = '2.5rem'
        btnRight.style.width = '10rem'
    }
})

left.addEventListener('mouseleave', () =>{
    container.classList.remove('hover-left')
    secondh1.style.fontSize = '4rem'
    btnRight.style.width = '15rem'
})

right.addEventListener('mouseenter', () =>{
    container.classList.add('hover-right')
    if(container.classList.contains('hover-right')){
        h1.style.fontSize = '2.5rem'
        btnLeft.style.width = '10rem'
    }
})

right.addEventListener('mouseleave', () =>{
    container.classList.remove('hover-right')
    h1.style.fontSize = '4rem'
    btnLeft.style.width = '15rem'
})








































































































