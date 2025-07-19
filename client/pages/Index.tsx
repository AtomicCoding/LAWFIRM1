import React, { useState } from "react";
import { Star, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const ContactForm = ({
  variant = "default",
}: {
  variant?: "default" | "footer";
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClasses =
    "w-full h-[50px] px-4 border border-brand-border-gray rounded-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary";

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-8 ${variant === "footer" ? "bg-brand-gray-light" : ""}`}
    >
      <h3
        className={`font-cinzel text-2xl lg:text-[26px] font-bold mb-6 ${variant === "footer" ? "text-brand-primary" : "text-brand-text-primary"}`}
      >
        Get Your FREE Case Review We Call You in 30 Minutes
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg text-brand-text-primary mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-lg text-brand-text-primary mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Smith"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg text-brand-text-primary mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-lg text-brand-text-primary mb-2">
              Mobile Phone
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label className="block text-lg text-brand-text-primary mb-2">
            How Can We Help?
          </label>
          <textarea
            placeholder="Describe your situation..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full h-48 px-4 py-3 border border-brand-border-gray rounded-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
          />
          <p className="text-sm text-brand-text-secondary mt-2">
            0 of 900 max characters
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="consent"
            checked={formData.consent}
            onChange={(e) =>
              setFormData({ ...formData, consent: e.target.checked })
            }
            className="w-5 h-5 border border-gray-400 rounded mt-1 focus:ring-2 focus:ring-brand-primary"
          />
          <label
            htmlFor="consent"
            className="text-lg text-brand-text-primary leading-relaxed"
          >
            By checking this box, I consent to receive conversational SMS
            messages from Karns & Karns. Reply STOP to opt-out; Reply HELP for
            support; Message & data rates may apply; Messaging frequency may
            vary. Visit our Privacy Policy page for more information.
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get Your Free Case Review
          </button>
          <p className="text-xl text-brand-text-primary mt-4">
            100% Free & Confidential • No Upfront Costs Ever
          </p>
        </div>
      </form>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-brand-dark relative">
        {/* Top bar */}
        <div className="bg-white text-black py-3">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-lg lg:text-xl">
            <div className="flex flex-wrap items-center space-x-6 lg:space-x-8">
              <span>Why Choose Us</span>
              <span>What You're Owed</span>
              <span>How We Help</span>
              <span>Case Types</span>
              <span>Client Results</span>
              <span>Get Help Now</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="bg-brand-dark text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/27273bb698c2739f4f9dc7ca2509852a33b0ff68?width=700"
                alt="Karns & Karns Law Firm"
                className="h-16 w-auto"
              />
            </div>

            <div className="text-center lg:text-left">
              <p className="font-cinzel text-lg">
                You Have Just 2 Years to File Your Claim
              </p>
            </div>

            <button className="bg-brand-orange text-black px-8 py-3 rounded-full text-xl font-medium hover:bg-orange-600 transition-colors">
              FREE Case Review
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/48d6d5faaab0b6d11239d09c2c150a235e0422d2?width=2362')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="font-cinzel text-4xl lg:text-5xl font-bold leading-tight">
              Stop Letting
            </h1>
            <p className="text-2xl lg:text-3xl leading-relaxed">
              LA's Most Aggressive Personal Injury Lawyers. We've Won $300M+ for
              Victims Just Like You.
            </p>
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-800 transition-colors">
              Free Case Review
            </button>

            <div className="flex items-center space-x-4 pt-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e3c738c7dd2f5f4be0efddac40a2fd435e71dd5c?width=600"
                alt="No Win No Fee"
                className="h-20"
              />
              <div>
                <p className="font-cinzel text-2xl lg:text-3xl font-bold">
                  $300 Million
                </p>
                <p className="text-lg">Recovered for Clients</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/86f12578a31e75c75cd6a34e1fc97badf6126b0e?width=1066"
              alt="Karns & Karns Attorneys"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Achievement Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/d5a73c027b418bc819a96e2867e87863f4df0934?width=88",
                amount: "$9.8 MILLION",
                type: "Wrongful Death",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/2ecf8c0febbfdf4fe3570805d1d192c64c2c8ce5?width=110",
                amount: "$5 MILLION",
                type: "Auto Accident",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/49ae45975d1c47085548db796abf950654c37df0?width=94",
                amount: "$3.5 MILLION",
                type: "Bar Fight",
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/5bc9c19774e6b757abf30c4c6c8317acc0436454?width=152",
                amount: "$4.675 MILLION",
                type: "Truck Accident",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200"
              >
                <img
                  src={achievement.icon}
                  alt=""
                  className="h-12 w-12 mx-auto mb-4"
                />
                <h3 className="font-cinzel text-2xl font-bold text-brand-text-dark mb-2">
                  {achievement.amount}
                </h3>
                <p className="text-xl text-brand-text-dark">
                  {achievement.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-center text-brand-text-primary mb-12">
            Get Your FREE Case Review We Call You in 30 Minutes
          </h2>
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-16 bg-brand-dark-alt text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-cinzel text-2xl lg:text-3xl font-bold mb-4 tracking-wide">
            CALIFORNIA LAW: You Have Just 2 Years to File Your Claim
          </h2>
          <p className="text-xl lg:text-2xl">
            Evidence disappears. Witnesses forget. Don't let time run out on
            getting the money you deserve.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-brand-text-primary mb-6">
            Meet the Team Who Fights for You
          </h2>
          <p className="text-xl lg:text-2xl text-brand-text-primary mb-12 max-w-4xl mx-auto">
            We built this firm on one promise: Insurance companies will pay what
            you deserve, or we'll take them to court.
          </p>

          <div className="relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5a899f1e066820f25381e35172374dd7dbc69044?width=2322"
              alt="Karns & Karns Legal Team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Partner logos */}
          <div className="flex justify-center items-center space-x-8 mt-12 flex-wrap">
            {[
              "https://api.builder.io/api/v1/image/assets/TEMP/31b80999b863a80d2c2f0155a457cb3f83077716?width=252",
              "https://api.builder.io/api/v1/image/assets/TEMP/f88c7e754f2e219cba0e574fc308adb74de5cb14?width=242",
              "https://api.builder.io/api/v1/image/assets/TEMP/aa17688ec4a5c5c3e102ec09f9946ed72f214ce6?width=252",
              "https://api.builder.io/api/v1/image/assets/TEMP/08f316d891a1bd89002f4ef09e114e6e8150f429?width=252",
              "https://api.builder.io/api/v1/image/assets/TEMP/8f270966ca8dce1c09c6ceb8fa253f461f6c595a?width=206",
              "https://api.builder.io/api/v1/image/assets/TEMP/7d54ccfa9be1d45f1023c7baac106e51943ce8e6?width=252",
              "https://api.builder.io/api/v1/image/assets/TEMP/1436473050b5f02050c40f0f2d1343c551479dd3?width=252",
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-brand-primary text-2xl font-medium uppercase tracking-wide mb-4">
            Why Choose Us
          </p>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-brand-text-primary mb-16 max-w-4xl mx-auto">
            Why Insurance Companies Fear Us (And Respect Our Clients)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Courtroom Fighters",
                subtitle:
                  "Other lawyers settle quick we go to trial for top dollar",
              },
              {
                title: "$300M+ Recovered",
                subtitle: "We get the biggest checks in California",
              },
              {
                title: "Same-Day Response",
                subtitle: "We call back today others call back next week",
              },
              {
                title: "No Win, No Fee",
                subtitle: "We bet our fees on your case that's confidence",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-brand-primary rounded-lg p-8 text-white text-center"
              >
                <h3 className="font-cinzel text-xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg leading-snug">{feature.subtitle}</p>
              </div>
            ))}
          </div>

          <button className="bg-brand-orange text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors">
            Free Case Review
          </button>
        </div>
      </section>

      {/* Case Types */}
      <section className="py-20 bg-brand-dark-alt text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-medium uppercase tracking-wide mb-4">
            Case Types
          </p>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold mb-16 max-w-2xl mx-auto">
            We Handle Every Type of Accident in California
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              "Car Accident",
              "Truck Accident",
              "Motorcycle Accident",
              "Bicycle Accident",
              "Pedestrian Accident",
              "Slip and Fall",
              "Dog Bite",
              "Medical Malpractice",
              "Product Liability",
              "Wrongful Death",
              "Brain Injury",
              "Spinal Cord Injury",
              "Construction Accident",
              "Workplace Injury",
              "Nursing Home Abuse",
              "Mass Tort",
              "Class Action",
              "Insurance Bad Faith",
              "Premises Liability",
            ].map((caseType, index) => (
              <div
                key={index}
                className="bg-white text-brand-text-primary py-4 px-6 rounded-lg text-center"
              >
                <span className="text-lg">{caseType}</span>
              </div>
            ))}
          </div>

          <button className="bg-brand-text-primary text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
            Find Your Case Type Start Your Claim
          </button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/210b872870cb167f1c81aecd940899ac3ed11177?width=600"
              alt="5 Stars"
              className="h-14"
            />
          </div>

          <p className="text-2xl font-medium uppercase tracking-wide mb-4">
            4.9 Out of 5 Stars
          </p>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold mb-12 max-w-3xl mx-auto">
            Over 2,500 Five-Star Reviews Can't be Wrong
          </h2>

          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto mb-8 border border-white">
            <div className="text-4xl font-cinzel font-bold mb-2">2500+</div>
            <div className="text-2xl font-medium">Satisfied Clients</div>
          </div>

          <p className="text-xl mb-8">
            California's Most Trusted Personal Injury Attorneys.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <button className="bg-brand-text-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Call Now - (213)-668-6339
            </button>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
              Get Your Free Case Review
            </button>
          </div>

          <p className="text-lg">
            Join thousands who chose Karns & Karns and got the money they
            deserved
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-center text-brand-text-primary mb-12">
            Don't Let Time Run Out Act Now
          </h2>

          <div className="max-w-4xl mx-auto">
            <ContactForm variant="footer" />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold mb-8 max-w-3xl mx-auto">
            Ready to Fight Back Against Insurance Companies?
          </h2>
          <p className="text-xl lg:text-2xl mb-8">
            Join thousands of Californians who chose Karns & Karns and got the
            money they deserved
          </p>

          <div className="mb-8">
            <p className="font-cinzel text-3xl font-bold mb-6">
              CALL (213)-668-6339
            </p>
            <button className="bg-brand-primary text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-red-800 transition-colors">
              Start My Free Case Review
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
