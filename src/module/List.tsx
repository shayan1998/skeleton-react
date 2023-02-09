type props = {
  children: React.ReactNode;
  count: Number;
};

export default function List({ children, count }: props) {
  const arr = Array.from(Array(count).keys());
  return (
    <div>
      {arr.map((el) => (
        <div key={el}>{children}</div>
      ))}
    </div>
  );
}
