const Pagination = (props) => {
  const { totalPage, currentPage, handleChangePage } = props;
  return (
    <div class="paging">
      <ul class="pagination">
        <li
          onClick={() => {
            if (currentPage > 1) {
              handleChangePage(currentPage - 1);
            }
          }}
        >
          <span className="cursor-pointer">
            <i class="fa fa-angle-right"></i> قبلی
          </span>
        </li>
        {Array.from({ length: totalPage }, (_, i) => i).map((_, i) => (
          <li
            class={`${currentPage == i + 1 ? "active" : ""}`}
            onClick={() => {
              handleChangePage(i + 1);
            }}
          >
            <span>{i + 1}</span>
          </li>
        ))}
        <li
          onClick={() => {
            if (totalPage > currentPage) {
              handleChangePage(currentPage + 1);
            }
          }}
        >
          <span className="cursor-pointer">
            بعدی <i class="fa fa-angle-left"></i>
          </span>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
