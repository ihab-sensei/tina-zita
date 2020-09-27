import React from 'react'
import Table from "../Inventory/Table"

//this component fetch from db only the product which are about to expiring
//hard coded db

const inventory = 
    [{code:"PSR257",
    name: "Patates Salatası",
    unit: 2,
    category:"Salata",
    quantity: 2,
    brand: "PSR232",
    carbs: null}, 
    {code:"BGT963",
    name: "Baba Ghannoug",
    unit: 1,
    category:"Meze",
    quantity: 1,
    brand: "BGT963",
    carbs: null}]
export default function OrderInProgress() {
    return (
        <div style={{marginTop:"10px"}}>
            <h2>Today's Orders</h2>
            <Table inventory={inventory} />
        </div>
    )
}


