const Pagination = () => {
  return (
    <div class="paging">
      <ul class="pagination">
        <li class="active">
          <span>1</span>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">
            بعدی <i class="fa fa-angle-left"></i>
          </a>
        </li>
        <li>
          <span class="page-numbers">صفحه 1 از 2</span>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
