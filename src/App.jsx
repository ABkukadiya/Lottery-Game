import "./App.css"
import Lottery from "./Lottery";
import { sum } from "./Helper"; 


function App() {
  let winCondition = (ticket)=>{
   return sum(ticket) === 15;
  //  return ticket.every((num)=>num===ticket[0]); ->to ckeck if all digits are same or not
  // return ticket[0]; -> first digit is 0 or not
  // note : we have to make different functions for different conditions , we can't wrap it all in one function
  };

  return (
    <>
      <Lottery n={4} winCondition={winCondition}/>
    </>
  );
}

export default App;
