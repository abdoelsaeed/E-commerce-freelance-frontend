function Button({children, onClick, chosenButton}) {
    const style =
      "bg-white relative text-black px-15 py-2 rounded-lg text-lg font-semibold cursor-pointer transition-colors rounded-[2vw]";
      const styleChosen =
        // في Button.jsx - السطر 5
        "bg-white before:content-[''] before:absolute before:top-[30%] before:left-[15px] before:bg-transparent text-black before:border-7 before:border-[#1672D4] before:rounded-[50%] before:w-[20px] before:h-[20px] ";      const finalStyle =
        chosenButton === children ?  styleChosen+style : style;
      return (
      <div className={finalStyle} onClick={onClick}>
        {children}
      </div>
    );
}

export default Button
