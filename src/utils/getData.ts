const getData = async (name: String) => {
  const data = await fetch(`http://127.0.0.1:8080/${name}`, {
    cache: "no-cache",
  });

  return data.json();
};

export default getData;
