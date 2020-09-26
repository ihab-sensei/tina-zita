import React, { useState, useEffect } from "react";
import db from "./firebaseConfig";

export default function page() {
  const [expireDate, setDate] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState("");

  //   const fetchData = async () => {
  //     const res = await db.collection("demo").doc("header").get();
  //     const data = res.data();
  //     console.log(data);
  //     setHeader(data.tilte);
  //     const usersRes = await db.collection("users").get();
  //     console.log(usersRes);
  //     const usersData = usersRes.docs.map((user) => user.data());
  //     console.log(usersData);
  //     setUsers(usersData);
  //   };

  //   const addUser = (e) => {
  //     e.preventDefault();
  //     db.collection("users")
  //       .doc(fullname)
  //       .set({
  //         fullName: fullname,
  //         email: email,
  //         array: [fullname, email],
  //       });
  //     setEmail("");
  //     setFullname("");
  //   };

  useEffect(() => {
    fetchData();
  }, [quantity, product]);

  return <div></div>;
}
