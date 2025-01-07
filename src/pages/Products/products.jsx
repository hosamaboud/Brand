import { IoIosArrowDroprightCircle, IoIosArrowForward } from "react-icons/io";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router";

const Products = () => {
  const { wear } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filters, setFilters] = useState({
    category: [],
    type: [],
    sortBy: "relavent",
  });
  const handleSortChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sortBy: value,
    }));
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[type].includes(value)) {
        updatedFilters[type] = updatedFilters[type].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[type].push(value);
      }
      return updatedFilters;
    });
  };

  const filteredWear = wear
    .filter((product) => {
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(product.category);
      const typeMatch =
        filters.type.length === 0 || filters.type.includes(product.subCategory);
      return categoryMatch && typeMatch;
    })
    .sort((a, b) => {
      if (filters.sortBy === "lowest") {
        return a.price - b.price;
      } else if (filters.sortBy === "highest") {
        return b.price - a.price;
      }
      return 0;
    });

  // Adjust showFilter based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowFilter(false);
      } else {
        setShowFilter(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container flex flex-col sm:flex-row gap-1 sm:gap-10">
      <div>
        {/* sort filter */}
        <div className="p-4 bg-bg_productItem sm:sticky top-[80px] rounded-xl max-h-[450px] mt-10 min-w-[200px] flex flex-col">
          <p className="mb-2 cursor-pointer text-xl flex items-center gap-x-1 font-semibold">
            Sort By Price{" "}
          </p>
          <select
            className="bg-bg_productItem"
            value={filters.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="relavent">Relavent</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        {/* Filtering */}
        <div className="p-4 bg-bg_productItem sm:sticky top-[190px] rounded-xl max-h-[450px] mt-10 min-w-[200px] flex flex-col">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 cursor-pointer text-xl flex items-center gap-x-1 font-semibold"
          >
            Filters
            <IoIosArrowForward
              className={`sm:hidden ${showFilter ? "rotate-90" : ""}`}
            />
          </p>
          {/* Category Filter */}
          <div
            className={`border border-black pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            }`}
          >
            <span className="text-sm font-medium">CATEGORIES</span>
            <div className="flex mt-4 flex-col gap-2 text-sm font-light">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Men"
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Women"
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Kids"
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                />
                Kids
              </p>
            </div>
          </div>

          {/* Type Filter */}
          <div
            className={`border border-black pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            }`}
          >
            <span className="text-sm font-medium">TYPE</span>
            <div className="flex mt-4 flex-col gap-2 text-sm font-light">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Topwear"
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                />
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Bottomwear"
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value="Winterwear"
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {filteredWear.map((product) => (
          <div
            data-aos="fade-up"
            className="rounded-t-3xl flex bg-bg_productItem cursor-pointer hover:scale-105 duration-500 flex-col justify-between shadow-lg sm:min-h-[300px] group"
            key={product.id}
          >
            <Link to={`/products/${product.id}`}>
              <img
                className="rounded-t-2xl "
                src={product.image}
                alt={product.name}
              />
            </Link>
            <p className="hidden group-hover:block bg-primary text-xs text-black p-1 rounded-xl absolute top-2 left-2">
              save 10%
            </p>

            <div data-aos="zoom-in" className="p-2 flex flex-col gap-4">
              <p>{product.name}</p>
              <div className="flex items-center justify-between">
                <p className="">{`${product.price} $`}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="items-center gap-1 flex bg-primary text-black p-1 rounded-xl"
                >
                  Details
                  <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
