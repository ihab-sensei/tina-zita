import React, { useState } from "react";
import MonthlyReview from "./MonthlyReview";
import NewReviewForm from "./newReviewForm";

export default function ReviewContainer() {
  const [reviews, setReviews] = useState([
    {
      day: "25/11/2020",
      hour: "3.00 PM",
      note: "Aişe won't be attending",
      event: "Sales Meeting",
    },
  ]);
  // console.log("review", reviews)
  const [isVisible, setVisibility] = useState(false);
  const add = () => {
    setVisibility(true);
  };
  const handleClick = () => {
    setVisibility(false);
  };
  // const deleteItem = (indexToDelete)=>{
  //     setReviews(...reviews, reviews.filter((_, indexElement)=> indexElement!==indexToDelete))
  // }
  const deleteItem = () => {};
  const [userInput, setUserInput] = useState({});

  //add inputs as one review
  //go to children as props for onChange event
  const handleUserInput = (e, key) => {
    console.log(e.target.value);
    setUserInput({
      ...userInput,
      [key]: e.target.value,
    });
    console.log(userInput);
  };

  //add the review to the list of states
  //go to the form child for the submit event
  const handleSubmit = (e) => {
    console.log(e);
    console.log(userInput);
    e.preventDefault();
    setReviews([...reviews, userInput]);
    setVisibility = false;
  };

  return (
    <div>
      <MonthlyReview
        day={reviews[0].day}
        hour={reviews[0].hour}
        note={reviews[0].note}
        event={reviews[0].event}
        delete={deleteItem}
        add={add}
      />
      {isVisible && (
        <NewReviewForm
          submit={handleSubmit}
          changeInput={handleUserInput}
          click={handleClick}
        />
      )}
    </div>
  );
}
