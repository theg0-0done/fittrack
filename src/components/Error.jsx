import { CgDanger } from "react-icons/cg"

function Error({message}) {
  return (
    <p className="error">
      <CgDanger className="icon" />
      {message}
    </p>
  );
}

export default Error