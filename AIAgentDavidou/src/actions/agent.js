export const onDummyAgent = async function* () {
  const mockResponses = [
    "Bonjour, j'ai pété, je suis Chat",
    "Damien il est tout moche.",
    "Théo Hoori le DJ je veux lui faire des bisous",
    "Quel BG ce David en vrai",
  ];

  // Simuler a retard avant le premier token
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 1000 + 500)
  );

  // Sélectionner une réponse random
  const response =
    mockResponses[Math.floor(Math.random() * mockResponses.length)];

  // Stream la réponse caractères par caractères avec un petit retard
  for (let i = 0; i < response.length; i++) {
    yield response[i];
    await new Promise((resolve) =>
      setTimeout(resolve, 30 + Math.random() * 50)
    ); // simulate typing
  }
};