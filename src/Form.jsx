import { useState } from 'react';

const Form = () => {
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
