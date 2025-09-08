import { CONTACT_INFO } from "../utils/constants";

function Contact() {
  return (
    <div className="conatct">

      <div className="d-flex">
        {CONTACT_INFO.map((info, index) => (
          <div key={index} className={info?.role + " center"}>
            <h3>{info.title}</h3>

            {info.data.map((person, index) => (
              <p key={index}>
                {person.name}
                {person.phone && (
                  <a href={"tel:+91" + person.phone}>{person.phone}</a>
                )}
              </p>
            ))}

          </div>
        ))}
      </div>

    </div>
  );
}

export default Contact;