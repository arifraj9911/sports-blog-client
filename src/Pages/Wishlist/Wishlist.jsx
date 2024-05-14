import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import WishlistCard from "./WishlistCard";
import axios from "axios";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/wishlist/${user?.email}`, {
      method: "GET",
      credentials: "include",
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

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/wishlist/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = wishlist.filter((blog) => blog._id !== id);
              setWishlist(remaining);
            }
          })
          .catch((err) => console.log(err.message));
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Sports Eye | Wishlist</title>
      </Helmet>
      <div className="dark:bg-[#121212] px-3 lg:px-0 dark:text-[#FFF]">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="flex gap-1">
          <h2 className="text-2xl">My Wishlist</h2>
          <HiOutlineArrowDownRight className="text-xl mt-2" />
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
    </div>
  );
};

export default Wishlist;
