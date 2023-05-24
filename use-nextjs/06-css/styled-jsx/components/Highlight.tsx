interface P {
  text: string;
}

const Highlight: React.FC<P> = ({ text }) => {
  return (
    <>
      <span>{text}</span>
      <style jsx>{`
        span {
          background: yellow;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Highlight;
