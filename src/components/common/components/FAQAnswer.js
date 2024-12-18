const FAQAnswer = ({ answer }) => {
  if (typeof answer === 'string') {
    return <p className="text-gray-600">{answer}</p>;
  }

  return (
    <div>
      <p className="text-gray-600 mb-2">{answer.topContent}</p>
      <ul className="list-disc pl-5">
        {answer.bottomContent.map((item, index) => (
          <li key={index} className="text-gray-600 mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FAQAnswer; 