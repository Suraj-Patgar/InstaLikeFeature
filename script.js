let bike = document.querySelector('#bike')
let love = document.querySelector('#love')
let popup = document.querySelector('#popup')
let likes = document.querySelector('#likes')
let flag = 0

bike.addEventListener('dblclick', function () {
    popup.style.transform = 'translate(-50%, -50%) scale(1)'
    popup.style.opacity = '1'
    love.classList.remove('ri-heart-line')
    love.classList.add('ri-heart-fill')
    love.style.color = 'red'
    likes.innerHTML = '9,999 likes'
    flag = 1

    setTimeout(function () {
        popup.style.transform = 'translate(-50%, -50%) scale(0)'
        popup.style.opacity = '0'
    }, 2000)
})

love.addEventListener('click', function () {
    if (flag == 0) {
        flag = 1
        popup.style.transform = 'translate(-50%, -50%) scale(1)'
        popup.style.opacity = '1'
        love.classList.remove('ri-heart-line')
        love.classList.add('ri-heart-fill')
        love.style.color = 'red'
        likes.innerHTML = '9,999 likes'

        setTimeout(function () {
            popup.style.transform = 'translate(-50%, -50%) scale(0)'
            popup.style.opacity = '0'
        }, 2000)
        
    } else {
        flag = 0
        popup.style.transform = 'translate(-50%, -50%) scale(0)'
        popup.style.opacity = '0'
        love.classList.add('ri-heart-line')
        love.classList.remove('ri-heart-fill')
        love.style.color = 'black'
        likes.innerHTML = '9,998 likes'
        
    }
})