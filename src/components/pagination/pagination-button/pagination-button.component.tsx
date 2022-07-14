import './pagination-button.styles.scss';

const PaginationButton = (props: {
  className?: string;
  text: string;
  value: string | number;
  onClickHandler?: (currentPage: number) => void;
}) => {
  const { text, value, onClickHandler, className } = props;
  const isDisabled = onClickHandler ? false : true;

  const handleOnClick = (event: any) => {
    if (!onClickHandler) {
      return;
    }

    onClickHandler(Number(event.target.value));
  };

  return (
    <button
      className={`pagination-btn ${className}`}
      onClick={handleOnClick}
      value={value}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default PaginationButton;
