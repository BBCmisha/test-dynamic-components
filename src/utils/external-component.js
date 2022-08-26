export default async function externalComponent(url) {
  await fetch(url)
    .then((response) => response.text())
    .then((data) => (document.head.innerHTML += data));
}
