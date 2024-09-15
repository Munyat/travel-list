export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list✈️</em>
      </footer>
    );
  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage =
    numItems === 0 || packed === 0 ? 0 : Math.round((packed / numItems) * 100);

  console.log(numItems);
  console.log(packed);
  console.log(percentage);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything.You ready to go✈️"
          : `💼 You
        have ${numItems} items on your list,and you already packed ${packed}${" "}
        ${percentage}%`}
      </em>
    </footer>
  );
}
