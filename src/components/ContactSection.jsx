import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wjbe1ny",
        "template_owxcp1g",
        formRef.current,
        "8oNlnosJBYosU0pgn"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl -mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Got an idea or thinking about working together? Don’t hesitate to get
          in touch. I’m always open to new discussions and exciting
          possibilities.
        </p>

        {/* SECTION ATAS */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-2 mb-12">
          {/* KIRI */}
          <div className="flex flex-col gap-8">
            {/* judul di dalam container kiri */}
            <h3 className="text-2xl font-medium  text-center">
              Contact Information
            </h3>
            {/* data info */}
            <div className="flex flex-col md:flex-row justify-center gap-12">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    href="mailto:yyyy16569@gmail.com"
                    className="hover:text-primary text-muted-foreground text-left"
                  >
                    yyyy16569@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium text-left">Phone</h4>
                  <span className="text-muted-foreground text-left">
                    081353462719
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium text-left">Location</h4>
                  <span className="text-muted-foreground text-left">
                    Jakarta, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN */}
          <div className="flex flex-col items-center gap-4 p-2 ">
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/fahmi-prasetio/" target="_blank">
                <Linkedin size={30}/>
              </a>
              <a href="https://www.instagram.com/fahmi.prasetio_/" target="_blank"  >
                <Instagram size={30}/>
              </a>
              <a href="https://x.com/FahmiPrasetiio" target="_blank">
                <Twitter size={32}/>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION BAWAH */}
        <div className="bg-card p-8 rounded-lg shadow-xs w-full max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Send a Message
          </h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                placeholder="Naufal Fahmi Prasetio"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                placeholder="fahmi@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-left"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full lg:h-50 h-35 md:h-40 px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                placeholder="write message here . . ."
              />
            </div>
            <button
              type="submit"
              className="cosmic-button w-full flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
