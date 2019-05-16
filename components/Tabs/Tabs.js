
class TabLink {
  constructor(element) {
    this.element = element
    // console.log(this.element.dataset)
    this.dataValue = element.dataset.tab
    this.tabContent = document.querySelector(`.tabs-item[data-tab="${this.dataValue}"]`)
    // console.log(this.tabContent)
    element.addEventListener('click', () => this.select())
    this.contentElement = new TabItem(this.tabContent)
  };

  select() {
    const links = document.querySelectorAll('.tabs-link')
    links.forEach(link => link.classList.remove('tabs-link-selected'))
    this.element.classList.add('tabs-link-selected')
    this.contentElement.select()
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const content = document.querySelectorAll('.tabs-item')
    content.forEach(contentItem => contentItem.classList.remove('tabs-item-selected'))
    this.element.classList.add('tabs-item-selected')
  }
}

/* START HERE: 

*/

const tabLinks = document.querySelectorAll('.tabs-link')
// console.log(tabLinks)

tabLinks.forEach(eachLink => new TabLink(eachLink))