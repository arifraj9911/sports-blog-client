import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import WishlistCard from "./WishlistCard";
import axios from "axios";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/wishlist/${user?.email}`)
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

  console.log(wishlist);

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
    <div className="max-w-screen-xl mx-auto my-20">
      <h2 className="text-2xl">My Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-12">
        {wishlist?.map((blog) => (
          <WishlistCard
            key={blog._id}
            blog={blog}
            handleRemoveWishlist={handleRemoveWishlist}
          ></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
