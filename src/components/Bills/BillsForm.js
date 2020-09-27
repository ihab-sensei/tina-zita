import React, { useState } from "react";

export default function BillsForm() {
   
    return (
      <form>
        <label>
          ID:
          <input
            type="text"
            placeholder="ID"
            //onChange={(e) => setName(e.target.value)}
          />
          Unit Price:
          <input
            type="number"
            placeholder="Unit Price"
          />
          Quantity:
          <input
            type="number"
            placeholder="Quantity"
          />
          Total Price:
          <input
            type="text"
            placeholder="Total Price"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }