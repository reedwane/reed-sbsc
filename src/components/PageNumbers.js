const PageNumbers = ({ handlePage }) => {
  return (
    <>
      <button
        className="button button__page-number"
        onClick={(e) => handlePage(e, 1)}
      >
        Page 1
      </button>
      <button
        className="button button__page-number"
        onClick={(e) => handlePage(e, 2)}
      >
        Page 2
      </button>
    </>
  );
};

export default PageNumbers;
