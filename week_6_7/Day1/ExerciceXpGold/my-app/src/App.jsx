import Exercice1 from "./Exercice1";

function App() {

  const celebrities = [
    {
      title: "Bob Dylan",
      imageUrl:
        "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
      description:
        "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
    },
    {
      title: "Paul McCartney",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
      description:
        "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">

      {/* BONUS: using map */}
      {celebrities.map((celebrity, index) => (
        <Exercice1
          key={index}
          title={celebrity.title}
          imageUrl={celebrity.imageUrl}
          description={celebrity.description}
          buttonLabel={celebrity.buttonLabel}
          buttonUrl={celebrity.buttonUrl}
        />
      ))}

    </div>
  );
}

export default App;
