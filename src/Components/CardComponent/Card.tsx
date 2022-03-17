import "./card.css";

export const Card = (children?: JSX.Element, isPopUp?: boolean) => {
  return (
    <div className={isPopUp ? "pop-up-container" : "card-container"}>
      {children}
    </div>
  );
};
