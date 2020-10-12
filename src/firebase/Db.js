import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import Inventory from "../components/Inventory/Inventory";

function Db() {
  const [inventory, setInventory] = useState([]);
  // const [recipe, setRecipe] = useState([]);
  const [newData, setNewData] = useState(0);

  useEffect(() => {
    //let unmounted = false;
    async function fetchData() {
      const inventoryResponse = await db.collection("inventory").get();
      const items = inventoryResponse.docs.map((item) => item.data());
      setInventory(items);
      return () => {};
    }
    fetchData();
    //return () => { unmounted = true };
  }, [newData]); // this causes re-render in every change !!
  
//   useEffect(() => {
//     db.collection("inventory").onSnapshot(function (snapshot) {
//         let inventoryList = inventory;
//         snapshot.docChanges().forEach(function (change) {
//             // console.log(change.);
//             if (change.type === "added") {
//                 const inventoryItem = { //??should there be  an id? don't remember the how the db is made
//                     id: change.doc.id,
//                     data: change.doc.data()
//                 }
//               console.log("added inventory item", inventoryItem)
//                 inventoryList.push( inventoryItem);
//             }
//             // if (change.type === "modified") {
//             //     console.log("Modified city: ", change.doc.data());
//             // }
//             // if (change.type === "removed") {
//             //     console.log("Removed city: ", change.doc.data());
//             // }
//         });
//         setInventory([...inventoryList])
//     });

// }, [])

  return (
    <>
      <Inventory reFetch={setNewData} inventory={inventory} />
    </>
  );
}
export default Db;
