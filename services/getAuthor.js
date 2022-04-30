export default async function getAuthor(username) {
  const response = await fetch("https://api.github.com/users/" + username);
  const data = await response.json();
  return data;
}
