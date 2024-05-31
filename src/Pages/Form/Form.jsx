import React, { useState } from "react";
import styles from "./Form.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const [step, setStep] = useState(0);

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    if (step === 1 && (!form.email || !form.phoneNo || !form.message)) {
      console.log("Step 2: Required fields not filled");
      // If in Step #2 and required fields are not filled, don't advance
      return;
    }
    console.log("Form submitted successfully:", form);
    setStep(step + 1);
  };


  return (
    <>
      <section className={styles.main}>
        <div class="md:container @md:mx-auto">
          <form onSubmit={handleSubmit} className={styles.gridContainerFluid}>
            {step === 0 && (

              <div className="row flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 ">
                  {/* <div className={styles.mainbtnn}> */}
                  <div className={styles.backbtn}>
                    <button onClick={() => setStep(0)}>
                      <MdOutlineKeyboardBackspace className={styles.icon} />
                      Go Back
                    </button>
                  </div>
                  <div className={styles.backbtn1}>
                    <button onClick={() => setStep(step + 1)}>
                      Exit
                      <RxCross2 className={styles.icon} />
                    </button>
                  </div>
                  {/* </div> */}

                  <div className={styles.step2}>
                    <h4>Step # 1</h4>
                    <h2>
                      What is your monthly digital <br /> marketing budget?
                    </h2>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className={styles.price}>
                      <select>
                        <option value="" className={styles.money}> <span className={styles.money} >   &lt; $1,000/mo</span> </option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <select>
                      <option value="" className={styles.money}>$1,000 - $2,000</option>
                    </select>
                  </div>
                  <div className={styles.price}>
                    <select>
                      <option value="" className={styles.money}>$2,000 - $5,000</option>
                    </select>
                  </div>
                  <div className={styles.price}>
                    <select>
                      <option value="" className={styles.money}>$5,000 - $10,000</option>
                    </select>
                  </div>
                  <div className={styles.price}>
                    <select>
                      <option value="" className={styles.money}>$10,000 - $25,000</option>
                    </select>
                  </div>
                  <div className={styles.price}>
                    <select>
                      <option value="" className={styles.money}>$25,000 +</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            {step === 1 && (

              <div className="grid grid-cols-1">
                <div className="flex flex-col justify-center items-center">
                  <div className={styles.backbtn}>
                    <button onClick={() => setStep(step - 1)}>
                      <MdOutlineKeyboardBackspace className={styles.icon} />
                      Go Back
                    </button>
                  </div>
                  <div className={styles.backbtn1}>
                    <button onClick={() => setStep(step + 1)}>
                      Exit
                      <RxCross2 className={styles.icon} />
                    </button>
                  </div>
                  <div className={styles.step1}>
                    <h4>Step # 2</h4>
                    <h2>Details</h2>
                    <p>
                      We’re thrilled at the opportunity to help you grow your business online. <br /> Please let us know the best way to reach you.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 col-span-4">
                    <div className={styles.onee}>
                      <label>
                        Name
                        <input
                          required
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 col-span-4">
                    <div className={styles.one}>
                      <label>
                        <span className={styles.customlabel}>Email</span>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                        />
                      </label>
                      <label>
                        <span className={styles.customlabel1}>Phone Number</span>
                        <input
                          required
                          type="tel"
                          value={form.phoneNo}
                          onChange={(e) => handleChange("phoneNo", e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 col-span-4">
                    <div className={styles.one1}>
                      <label htmlFor="message">
                        <span className={styles.customlabel2}>Anything else you’d like to share?</span>
                        <textarea
                          id="message"
                          value={form.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className={styles.btn}>
                  <button onClick={() => setStep(step + 1)}>Send Request</button>
                </div>
                <div className={styles.iconsss} >
                  <p><FontAwesomeIcon icon={faBagShopping} /><span>We promise never to share your information or spam your inbox</span> </p>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="row">
                <div className="col-lg-12">
                  <div className={styles.backbtn}>
                    <button onClick={() => setStep(step - 1)}>
                      <MdOutlineKeyboardBackspace className={styles.icon} />
                      Go Back
                    </button>
                  </div>
                  <div className={styles.backbtn1}>
                    <button onClick={() => setStep(0)}>
                      Exit
                      <RxCross2 className={styles.icon} />
                    </button>
                  </div>
                  <div className={styles.step3}>
                    <div className={styles.square}></div>
                    <h2>
                      Your Request for a Proposal Has <br /> Been Submitted!
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida <br /> parturient urna tristique congue. Curabitur volutpat nulla convallis eget <br />pellentesque. Luctus tellus eu ultrices egestas. </p>
                  </div>
                  <div className={styles.btn}>
                    <button onClick={() => setStep(0)}>Return Home</button>
                  </div>
                </div>

                {/* <button type="submit">Return Home</button> */}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
