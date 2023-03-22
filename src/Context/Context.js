import React, { createContext, useState, useEffect } from "react";
import { products } from "../Pages/AllProducts/data";
import { FaStar, FaRegStar } from "react-icons/fa";
export const Context = createContext(null);
export const ContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  //Local storage items in cart
  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage !== null)
      setCartItem(JSON.parse(cartFromLocalStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  //Sorting
  const [displayPage, setDisplayPage] = useState([...products]);
  const onChangeSort = (e) => {
    const value = e.target.value;
    switch (value) {
      case "default":
        setDisplayPage([...products]);
        break;
      case "high-price":
        setDisplayPage([...displayPage.sort((a, b) => b.price - a.price)]);
        break;
      case "low-price":
        setDisplayPage([...displayPage.sort((a, b) => a.price - b.price)]);
        break;
      case "rating":
        setDisplayPage([...displayPage.sort((a, b) => b.rating - a.rating)]);
        break;
      case "ASC":
        setDisplayPage([
          ...displayPage.sort((a, b) => a.name.localeCompare(b.name)),
        ]);
        break;
      case "DSC":
        setDisplayPage([
          ...displayPage.sort((a, b) => b.name.localeCompare(a.name)),
        ]);
        break;
    }
    console.log(value, displayPage);
  };

  //Items in Category
  const ItemDeco = products.filter((item) => {
    return item.category === "Decoration";
  });
  console.log(ItemDeco);
  const ItemFrame = products.filter((item) => {
    return item.category === "Frame&Posters";
  });
  const ItemFuniture = products.filter((item) => {
    return item.category === "Furniture";
  });
  const ItemPopular = products.filter((item) => {
    return item.popular === "yes";
  });

  //Sorting with Categories (NEW):

  //1. Sorting Decoration category
  const [displayPageDeco, setDisplayPageDeco] = useState([...ItemDeco]);
  const onChangeSortDeco = (e) => {
    const value = e.target.value;
    switch (value) {
      case "default":
        setDisplayPageDeco([...ItemDeco]);
        break;
      case "high-price":
        setDisplayPageDeco([
          ...displayPageDeco.sort((a, b) => b.price - a.price),
        ]);
        break;
      case "low-price":
        setDisplayPageDeco([
          ...displayPageDeco.sort((a, b) => a.price - b.price),
        ]);
        break;
      case "rating":
        setDisplayPageDeco([
          ...displayPageDeco.sort((a, b) => b.rating - a.rating),
        ]);
        break;
      case "ASC":
        setDisplayPageDeco([
          ...displayPageDeco.sort((a, b) => a.name.localeCompare(b.name)),
        ]);
        break;
      case "DSC":
        setDisplayPageDeco([
          ...displayPageDeco.sort((a, b) => b.name.localeCompare(a.name)),
        ]);
        break;
    }
  };

  //2. Sorting Frame category
  const [displayPageFrame, setDisplayPageFrame] = useState([...ItemFrame]);
  const onChangeSortFrame = (e) => {
    const value = e.target.value;
    switch (value) {
      case "default":
        setDisplayPageFrame([...ItemFrame]);
        break;
      case "high-price":
        setDisplayPageFrame([
          ...displayPageFrame.sort((a, b) => b.price - a.price),
        ]);
        break;
      case "low-price":
        setDisplayPageFrame([
          ...displayPageFrame.sort((a, b) => a.price - b.price),
        ]);
        break;
      case "rating":
        setDisplayPageFrame([
          ...displayPageFrame.sort((a, b) => b.rating - a.rating),
        ]);
        break;
      case "ASC":
        setDisplayPageFrame([
          ...displayPageFrame.sort((a, b) => a.name.localeCompare(b.name)),
        ]);
        break;
      case "DSC":
        setDisplayPageFrame([
          ...displayPageFrame.sort((a, b) => b.name.localeCompare(a.name)),
        ]);
        break;
    }
  };

  //3. Sorting Furniture category
  const [displayPageFurniture, setDisplayPageFurniture] = useState([
    ...ItemFuniture,
  ]);
  const onChangeSortFurniture = (e) => {
    const value = e.target.value;
    switch (value) {
      case "default":
        setDisplayPageFurniture([...ItemFuniture]);
        break;
      case "high-price":
        setDisplayPageFurniture([
          ...displayPageFurniture.sort((a, b) => b.price - a.price),
        ]);
        break;
      case "low-price":
        setDisplayPageFurniture([
          ...displayPageFurniture.sort((a, b) => a.price - b.price),
        ]);
        break;
      case "rating":
        setDisplayPageFurniture([
          ...displayPageFurniture.sort((a, b) => b.rating - a.rating),
        ]);
        break;
      case "ASC":
        setDisplayPageFurniture([
          ...displayPageFurniture.sort((a, b) => a.name.localeCompare(b.name)),
        ]);
        break;
      case "DSC":
        setDisplayPageFurniture([
          ...displayPageFurniture.sort((a, b) => b.name.localeCompare(a.name)),
        ]);
        break;
    }
  };

  //Filter Categories (NEW)
  const onFilterCategories = (categoryItem) => {
    const result = products.filter((curData) => {
      return curData.category === categoryItem;
    });

    setDisplayPage(result);
    if (categoryItem === "All") {
      setDisplayPage([...products]);
      console.log(products.length);
    }
  };

  // Change Product Amount in cart
  const handleIncrease = (productId) => {
    setCartItem(
      cartItem.map((item) =>
        productId === item.product.id
          ? { ...item, amount: item.amount + 1 }
          : item
      )
    );
  };
  const handleDecrease = (productId) => {
    setCartItem(
      cartItem.map((item) =>
        productId === item.product.id
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  //Star rating
  const Star = ({ marked, starId }) => {
    return (
      <span data-star-id={starId} className="star" role="button">
        {marked ? <FaStar /> : <FaRegStar />}
      </span>
    );
  };
  const StarRating = ({ value }) => {
    const [rating, setRating] = useState(parseInt(value) || 0);
    const [selection, setSelection] = useState(0);

    const hoverOver = (event) => {
      let val = 0;
      if (event && event.target && event.target.getAttribute("data-star-id"))
        val = event.target.getAttribute("data-star-id");
      setSelection(val);
    };
    return (
      <div
        onMouseOut={() => hoverOver(null)}
        onClick={(e) =>
          setRating(e.target.getAttribute("data-star-id") || rating)
        }
        onMouseOver={hoverOver}
      >
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1}`}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
    );
  };

//Add to cart
  const addToCart = (productId) => {
    alert("Your item is added to cart");
    const index = cartItem.findIndex((item) => item.product.id === productId);
    if (index >= 0) {
      setCartItem((prev) => {
        prev[index].amount++;
        return [...prev];
      });
      // sản phẩm A đã có trong giỏ hàng, khonong thêm sản phẩm A vào giờ hàng nữa
      // Chỉ cần tăng số lượng của nó lên 1 đơn vị thôi
    } else {
      // Sản phẩm A chưa có trong giỏ hàng
      // thêm sản phẩm A vào giỏ hàng với giá trị amount = 1

      setCartItem((prev) => {
        const prod = products.find((p) => p.id === productId);
        return [...prev, { product: prod, amount: 1 }];
      });
    }
  };
//Remove from cart
  const removeFromCart = (productId) => {
    setCartItem((prev) => {
      const itemIndex = prev.findIndex((item) => item.product.id === productId);
      if (itemIndex >= 0) {
        prev.splice(itemIndex, 1);
      }
      return [...prev];
    });
  };

 //Change Amount 
  const handleChangeAmount = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  const totalItem = cartItem.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const cartSubTotal = cartItem.reduce((acc, item) => {
    return acc + item.amount * item.product.price;
  }, 0);

  const shippingFee = 30;
  const cartTotal = Number(cartSubTotal) + Number(shippingFee);

  const [showTab, setShowTab] = useState(3);
  const handleChangeTab = (e) => {
    setShowTab(e);
  };

  const onSubmitOrder = () => {
    alert("Your order is placed");
  };

  //Scroll to Item
  const handleClickScroll = () => {
    const userReview = document.getElementById('user-review');
    if (userReview) {
      // 👇 Will scroll smoothly to the top of the next section
      userReview.scrollIntoView({ behavior: 'smooth' });
    }
  }


  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    totalItem,
    cartSubTotal,
    cartTotal,
    shippingFee,

    handleIncrease,
    handleDecrease,
    
    handleChangeTab,
    showTab,
    
    FaStar,
    StarRating,

    handleChangeAmount,
    onSubmitOrder,

    displayPage,
    setDisplayPage,
    onChangeSort,
    ItemPopular,

    onFilterCategories,
    ItemDeco,
    displayPageDeco,
    setDisplayPageDeco,
    onChangeSortDeco,

    ItemFrame,
    displayPageFrame,
    setDisplayPageFrame,
    onChangeSortFrame,

    ItemFuniture,
    displayPageFurniture,
    setDisplayPageFurniture,
    onChangeSortFurniture,

    handleClickScroll
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
