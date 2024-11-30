function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userInstructionElement = document.querySelector("#user-instruction");
  let apiKey = "1ea13fb3c286o84864f57t06508d1bba";
  let prompt = `User instruction: Generate a short poem about ${userInstructionElement.value}`;

  let context =
    "you are a powerful and knowledgeable AI, that can generate lovely poems about anything, Your mission is to generate a 4 line poem that relates to the user instructions in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. and translate the generated poem in french. there should be a <br /> <br /> between the original poem and the translated version. the translated version should be in <em>, Sign the translated poem with 'SheCodes AI' inside a <strong> element, and it must be after a <br /> element and NOT at the beginning";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
