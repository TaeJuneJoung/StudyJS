const itemList= document.querySelectorAll('.grid-item')

for (item of itemList) {
    item.addEventListener('click', (element) => {
        console.log(element.target.dataset)
    })
}