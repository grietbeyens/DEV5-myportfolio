const messagesList = document.getElementById("messages");

const run = async () => {
  console.log("run() called");
  const response = await fetch("/api/v1/messages");
  const responseData = await response.json();
  console.log("responseData", responseData);
  messagesList.innerHTML = responseData.data.messages
    .map((message) => `<li>${message}</li>`)
    .join("");
};

run();
