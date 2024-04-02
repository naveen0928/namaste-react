const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-3xl">Contact Us Page</h1>
      <form>
        <input className="p-2 m-2 border border-black" placeholder="name" />
        <input className="p-2 m-2 border border-black" placeholder="message" />
        <button className="p-2 m-2 border border-black bg-green-200 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
