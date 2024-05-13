import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import WishlistCard from "./WishlistCard";
import axios from "axios";
import { HiOutlineArrowDownRight } from "react-icons/hi2";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/wishlist/${user?.email}`,{
      method:"GET",
      credentials:"include"
    })
      .then((res) => res.json())
      .then((data) => setWishlist(data));
  }, [user?.email]);

  //   const { data: wishlist } = useQuery({
  //     queryKey: ["wishlist"],
  //     queryFn: async () => {
  //       const response = await fetch(
  //         `http://localhost:5000/wishlist/${user?.email}`
  //       );
  //       return response.json();
  //     },
  //   });

  // console.log(wishlist);

  const handleRemoveWishlist = (id) => {
    console.log("deleted wishlist id ", id);

    axios
      .delete(`http://localhost:5000/wishlist/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          alert("wishlist delete successful");
          const remaining = wishlist.filter((blog) => blog._id !== id);
          setWishlist(remaining);
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="dark:bg-[#121212] dark:text-[#FFF]">
      <div className="max-w-screen-xl mx-auto py-20">
      <div className="flex gap-1">
      <h2 className="text-2xl">My Wishlist</h2>
      <HiOutlineArrowDownRight  className="text-xl mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 my-12">
        {wishlist?.map((blog) => (
          <WishlistCard
            key={blog._id}
            blog={blog}
            handleRemoveWishlist={handleRemoveWishlist}
          ></WishlistCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Wishlist;
