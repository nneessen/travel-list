export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = (packedItems / totalItems) * 100 || 0;
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          👜 You have {totalItems} items on your list, and you already packed{" "}
          {packedItems} items. That's {percentage.toFixed(2)}%!
        </em>
      ) : (
        <em>🎉 All done! Have a nice trip! 🎉</em>
      )}
    </footer>
  );
}
