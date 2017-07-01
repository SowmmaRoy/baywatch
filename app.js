const app = {
  init: function(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)
    // debugger

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },
    
    renderListItem(flick) {
    // create a new list item from the template
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item.querySelector('.flick-name').textContent = flick.name
    return item
    },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
      fav: false,

    }

    item
        .querySelector('button.remove')
        .addEventListener('click', this.removeFlick.bind(this, flick))

        querySelector('button.like')
        .addEventListener('click', this.removeFlick.bind(this, flick))

        querySelector('button.up')
        .addEventListener('click', this.removeFlick.bind(this, flick))

        querySelector('button.down')
        .addEventListener('click', this.removeFlick.bind(this, flick))










    

    this.flicks.push(flick)

    // console.log(this.flicks)
    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)

    this.max ++
    f.reset()
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template'
})  