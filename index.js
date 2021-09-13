const imgItems = [...document.querySelectorAll('.img_wrapper')]
const titles = [...document.querySelectorAll('h2')]

const options = {
  rootMargin: '0px',
  threshold: 0.2,
}

let setItemActive = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
    }
  })
}

let observer = new IntersectionObserver(setItemActive, options)

imgItems.forEach((item, idx) => {
  item.children[0].style.backgroundImage = `url(./img/${idx + 1}.jpg)`
  idx % 2 == 0 ? (item.style.left = '55%') : (item.style.left = '5%')
  observer.observe(item)
})

titles.forEach((title, idx) => {
  idx % 2 == 0 ? (title.style.left = '45%') : (title.style.left = '35%')
  observer.observe(title)
})
