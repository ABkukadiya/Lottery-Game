import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <br />
      <Ticket ticket={ticket} />
      <br />
      <br />
      <button className="button" onClick={buyTicket}>
        Buy New Ticket
      </button>
      <br />
      <br />
      <h3>
        {isWinning ? "Congratulations, you won!" : "Better luck next time"}
      </h3>
    </div>
  );
}
