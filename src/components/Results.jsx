function MultiStep1({ onNext }) {
  function handleSubmit(e) {
    e.preventDefault();
    onNext();
  }
  return (
    <div className="tdee-form relative vertical-center oneRem-gap darkGray-bg one-rem-padding">
        <h3 className="no-margin">Results</h3>
        <p className="no-margin">
          Here are your nutrition.{" "}
        </p>
        <p className="gray-txt ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis! Est iste mollitia nam corrupti aliquid, suscipit fugit tenetur sit quae saepe eveniet beatae error unde non in, sapiente corporis.</p>
    </div>
  );
}

export default MultiStep1;
