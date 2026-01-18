import ClipPathTitle from "../components/ClipPathTitle";

const BenefitSection = () => {
  return (
    <section className="benefit-section">
      <div className="conatiner mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advatages: <br/>
            Explor the Key Benefits of Choosing SPYLT
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection
