export default function Product(props) {
  if (!props.value) {
    return <div>Loading...</div>; // or return null;
  }

  return (
    <div>
      <h3>{props.value.name}</h3>
      <h3>{props.price}</h3>
      <button>button</button>
    </div>
  );
}
