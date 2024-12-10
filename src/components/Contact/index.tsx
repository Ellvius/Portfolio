const Contact = () => {
    return (
      <section id="contact" className="bg-light py-12">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-center text-dark mb-6">
            Get In Touch
          </h2>
          <p className="text-center text-secondary mb-10">
            I&apos;d love to hear from you! Feel free to reach out for collaborations or just a friendly chat.
          </p>
  
          {/* Contact Form */}
          <div className="max-w-lg mx-auto">
            <form action="https://formsubmit.co/your-email" method="POST" className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-dark">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full border-secondary rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                />
              </div>
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-dark">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full border-secondary rounded-md shadow-sm focus:ring-blue-500 focus:border-secondary p-2"
                />
              </div>
              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-dark">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border-secondary rounded-md shadow-sm focus:ring-secondary focus:border-secondary p-2"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-secondary text-primary font-bold rounded-md shadow hover:bg-dark transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  