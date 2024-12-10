export default function Button(props) {
  function handleClick(e) {
    console.log("Button Clicked");
  }

  return (
    <button key="props.name" onClick={handleClick}>
      {props.name}
    </button>
  );
}
