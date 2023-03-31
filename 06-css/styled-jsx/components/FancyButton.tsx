import { PropsWithChildren } from "react";

interface P extends PropsWithChildren {}

const FancyButton: React.FC<P> = ({ children }) => {
  return (
    <>
      <button className="button">{children}</button>
      <style jsx>{`
        .button {
          padding: 2em;
          border-radius: 2em;
          background: purple;
          color: white;
          font-size: bold;
          border: pink solid 2px;
        }
      `}</style>
    </>
  );
};

export default FancyButton;
