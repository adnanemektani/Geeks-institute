function Card(props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <div className="text-4xl mb-4">{props.icon}</div>
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p className="text-gray-500">{props.description}</p>
    </div>
  );
}

export default Card;
