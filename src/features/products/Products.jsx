import { useProduct } from "../../hooks/useProduct";
import Card from "./Card";
import PaginationButtons from "../../ui/PaginationButtons";

function Products({ products }) {

  const { currentPage, items, totalPages, setCurrentPage } = useProduct(products);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {items.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>

      {/* Pagination */}
      <PaginationButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}

export default Products
