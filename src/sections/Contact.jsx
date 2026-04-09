import { useState } from "react";
import Alert from "../components/Alert";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Replace with your EmailJS credentials
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          to_name: "Vignesh",
          from_email: formData.email,
          to_email: "vignesh130703@gmail.com",
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Message sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showAlertMessage("danger", "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Build Together</h2>
          <p className="font-normal text-neutral-400">
            Have a project in mind, need a custom automation, or want to
            integrate one of my SaaS products? Drop me a message below.
          </p>
          <div className="flex items-center gap-2 text-sm text-aqua">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aqua"></span>
            </span>
            I usually reply within 24 hours
          </div>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="john@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-60"
            disabled={isLoading}
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;