import CardsList from "./cards-list.js"

import Pagination from './pagination.js';

  export default class OnlineStorePage {

    constructor (products) {
    this.pageSize = 9;
    this. products = products
    this.components = {};
    this.initComponents();
    this.render();
    this.renderComponents();
    this.initEventListeners();

  };

    getTemplate () {
      return `
        <div>
          <div class="container nowrap" data-element="cards-list"> <!-- Card Component--!> </div>
          <div data-element="pagination"> <!--- Pagination!--> </div>
        </div>
      `;
    }
    initComponents () {
      const totalPages = Math.ceil(this.products.length / this.pageSize);
      const cards = new CardsList(this.products.slice(0, this.pageSize));

      const pagination = new Pagination({
        activePageIndex: 0,
        totalPages
      });
      this.components.cards = cards;
      this.components.pagination = pagination;
    };


    renderComponents () {
      const cardsContainer = this.element.querySelector(`[data-element="cards-list"]`);
      const paginationContainer = this.element.querySelector(`[data-element="pagination"]`);

      cardsContainer.append(this.components.cards.element);
      paginationContainer.append(this.components.pagination.element);
    };

    render() {
    const wrapper = document.createElement('div');
    wrapper.className = "col-12 col-m-6 col-l-4";
    console.log(wrapper);
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;

  }
    initEventListeners () {
      this.components.pagination.element.addEventListener('foo-bar', event =>{
        const pageIndex = event.detail;
        const start = pageIndex * this.pageSize;
        const end = start + this.pageSize;
        this.components.cards.update(this.products.slice(start, end));
      })

    }

  }







