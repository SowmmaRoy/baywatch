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

    favFlick(flick,ev) {
        const listItem = ev.target.closest('.flick')
        flick.fav = !flick.fav
        
        if (flick.fav) {
        listItem.classList.add('fav')
        } else {
        listItem.classList.remove('fav')
        }
        
        
    },

    removeFlick(flick, ev) {
        // remove from the DOM
        const listItem = ev.target.closest('.flick')
        listItem.remove()
        
        // remove from the array
        const i = this.flicks.indexOf(flick)
        this.flicks.splice(i,1)


    },

    moveFlickDown(flick, ev) {
        const listItem = ev.target.closest('.flick')
        const nextItem = listItem.nextElementSibling

        if(nextItem.nextElementSibling){
            listItem.parentElement.insertBefore(listItem, nextItem.nextElementSibling)
        }
    },

    moveFlickUp(flick, ev) {
        const listItem = ev.target.closest('.flick')
        const previousItem = listItem.previousElementSibling

        if(previousItem){
            listItem.parentElement.insertBefore(listItem, previousItem)
        }
    },
    
    renderListItem(flick) {
    // create a new list item from the template
    const item = this.template.cloneNode(true)
    item.dataset.id = flick.id
    item.classList.remove('template')

    item.querySelector('.flick-name').textContent = flick.name   
    item
        .querySelector('button.like')
        .addEventListener(
            'click', 
            this.favFlick.bind(this, flick)
        )
    item
        .querySelector('button.remove')
        .addEventListener(
            'click', 
            this.removeFlick.bind(this, flick)
        )
    item
        .querySelector('button.down')
        .addEventListener(
            'click', 
            this.moveFlickDown.bind(this, flick)
        )
    item
        .querySelector('button.up')
        .addEventListener(
            'click', 
            this.moveFlickUp.bind(this, flick)
        )
    
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
    
    this.flicks.unshift(flick)

    // console.log(this.flicks)
    const listItem = this.renderListItem(flick)
    this.list
    .insertBefore(listItem, this.list.firstElementChild)


    ++ this.max
    f.reset()
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template'
})  