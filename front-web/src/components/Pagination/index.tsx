import "./styles.scss";

type Props = {
  totalPages: number;
  activePage: number;
  onChange: (item: number) => void;
};

const generateList = (amount: number) => {
  return Array.from(Array(amount).keys());
};

export default function Pagination({
  totalPages,
  activePage,
  onChange,
}: Props) {
  const items = generateList(totalPages);

  return (
    <div className="pagination-container">
      {items.map((item) => (
        <div
          key={item}
          className={`pagination-number ${item === activePage ? "active" : ""}`}
          onClick={() => onChange(item)}
        >
          {item + 1}
        </div>
      ))}
    </div>
  );
}
