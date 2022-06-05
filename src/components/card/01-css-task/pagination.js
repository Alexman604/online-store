export default class Pagination {
constructor () {
  this.render();
}

getTemplate () {
 return `
 <div>
 <div>  left </div>
 <div> pages </div>
 <div> right </div>
 </div>
 `;

}

getPages (){
return `
<div class="wrapper">
    <nav class="os-pagination">
      <a href="#" class="page-link previous" data-element="nav-prev">
        <i class="bi bi-chevron-left"></i>
      </a>

      <ul class="page-list" data-element="pagination">
        <li>
          <a href="#" data-element="page-link" class="page-link active" data-page-index="0">1</a>
        </li>
        <li>
          <a href="#" data-element="page-link" class="page-link" data-page-index="1">2</a>
        </li>
        <li>
          <a href="#" data-element="page-link" class="page-link" data-page-index="2">3</a>
        </li>
        <li>
          <a href="#" data-element="page-link" class="page-link" data-page-index="3">4</a>
        </li>
        <li>
          <a href="#" data-element="page-link" class="page-link" data-page-index="4">5</a>
        </li>
        <li>
          <a href="#" data-element="page-link" class="page-link" data-page-index="5">6</a>
        </li>
        <li>
          <a href="#" data-element="page-link" class="page-link" data-page-index="6">7</a>
        </li>
        <li>
          <a href="#" data-element="page-link" class="page-link" data-page-index="7">8</a>
        </li>
        <li>
          <a href="#" data-element="page-link" class="page-link" data-page-index="8">9</a>
        </li>
        <li>
          <a href="#" data-element="page-link" class="page-link" data-page-index="9">10</a>
        </li>
      </ul>

      <a href="#" class="page-link next" data-element="nav-next">
        <i class="bi bi-chevron-right"></i>
      </a>

    </nav>
  </div>

`;
}

render () {
  const wrapper = document.createElement('div');

  wrapper.innerHTML = this.getTemplate();

  this.element = wrapper;
};
};
