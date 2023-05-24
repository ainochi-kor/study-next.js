import { PropsWithChildren } from "react";

interface P extends PropsWithChildren {}

const Button: React.FC<P> = ({ children }) => {
  return (
    <>
      <button className="button">{children}</button>
      <style jsx>{`
        .button {
          padding: 1em;
          border-radius: 1em;
          border: none;
          background: green;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Button;
