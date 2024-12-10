function Hello({ person }) {
  console.log(person);
  return (
    <>
      <h1>
        Hello, {person.name}! {person.message}
        {person.emoji}
      </h1>
      <h2>Your seat number : {person.seatnumbers}</h2>
    </>
  );
}

export default Hello;
