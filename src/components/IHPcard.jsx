function IHPcard({icon, h, p}) {
  return (
    <div className="vertical-left w-fit txt-to-left fourty-max-width">
      <div className="no-margin big-icon" >{icon}</div>
      <h4 className="no-margin" >{h}</h4>
      <p className="no-margin tiny-txt" >{p}</p>
    </div>
  );
}

export default IHPcard;
