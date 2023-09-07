export default function Images({ parts }) {
  return Object.keys(parts)
    .map((group) =>
      parts[group].map((part) => (
        <img
          key={part.url}
          src={process.env.PUBLIC_URL + part.url}
          alt={part.name}
          className="d-none"
        />
      ))
    )
    .flat();
}
