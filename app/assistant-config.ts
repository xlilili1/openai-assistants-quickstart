export let assistantId = "asst_9V0ntXCgz4aIuB6j65WJwsDa"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
