import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";

import TextContext from "../../Contexts/textContext";
import { WinModal } from "./WinModal.js/WinModal";

const Challange = () => {
  const { passedText, setPassedText } = useContext(TextContext);
  const [timeLeft, setTimeLeft] = useState({ ...passedText }.time)



  return (
    <>
    <div className="challange">
      <div className="example"><strong>{passedText.content}</strong></div>
      <div>
        Time remaining: {timeLeft} <i className="bi bi-clock"></i>
      </div>
      <form onSubmit={(e) => onDone(e)}>
        <textarea
          className={"challange-text"}
          placeholder='Type text here'
          name="typer"
          id="typer"
          cols="30"
          rows="10"
        ></textarea>
        <div>
          Prize: {passedText.loot} <i className="bi bi-coin"></i>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <p className="space">&nbsp;&nbsp;&nbsp;</p>
          <Button onClick={onDone} type="submit" variant="success">
            Done
          </Button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Challange;

//ша го направя да е place holder и ще си направя функция он чейндж, която да проверява дали всяка отделна дума е написана правилно, ако не се светва самата дума в червено примерно!
//ще има чекбокс компеер и предай, така ще разбереш дали си допуснал някакви грешки или не! и накрая предаваш, ако всичко е точно премахваш questa и добавяш токените към юзъра!

//trqwba da se prerendqt neshtata za da stane neshto1 Set taium aut da ne sede[e mqkyde drugde?]
