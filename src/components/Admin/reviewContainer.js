import React from 'react'
import MonthlyReview from "./MonthlyReview"
import NewReviewForm from "./newReviewForm"

export default const reviewContainer = ()=>{
    const day = "25/11/2020"
    const hour = "3.00 PM"
    const note = "aişe wont be attending"
    const event = "sales meeting"

   
    const [reviews, setReviews] = React.useState([{
        day: "25/11/2020",
        hour: "3.00 PM",
        note: "aişe wont be attending",
        event: "sales meeting"
    }])
    console.log("rev",reviews)
    const [userInput, setUserInput] = React.useState({})
    const add = ()=>{

    }
    const deleteItem = ()=>{
        
    }
    return (
        <div>
            <MonthlyReview day={reviews[0].day} hour={reviews[0].hour} note={reviews[0].note} event={reviews[0].event} delete={deleteItem} add={add}/>
            <NewReviewForm />
        </div>
    )
}
