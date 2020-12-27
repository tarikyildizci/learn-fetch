const fetcher = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.joke);
  } else {
    console.log("Error: " + response.status);
  }
};
