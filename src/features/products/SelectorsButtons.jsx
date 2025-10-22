import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
function SelectorsButtons() {
  
  const [chosenButton, setChosenButton] = useState("Hoodie");
  return (
    <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
        <Button
          onClick={() => {
            if (chosenButton !== "Hoodie") setChosenButton("Hoodie");
          }}
          chosenButton={chosenButton}
        >
          Hoodie
        </Button>
        <Link to="/products/women" replace>
          <Button
            onClick={() => setChosenButton("Pantalone")}
            chosenButton={chosenButton}
          >
            Pantalone
          </Button>
        </Link>
        <Link to="/products/women" replace>
          <Button
            onClick={() => setChosenButton("Shirt")}
            chosenButton={chosenButton}
          >
            Shirt
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SelectorsButtons;
