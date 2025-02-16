import React, { useState, useEffect } from "react";
import { Mail, Phone as PhoneIcon, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

// Define a type for the form data
interface FormData {
  fullName: string;
  recipientName: string;
  relationship: string;
  contact: string;
  recipientContact: string;
  callPurpose: string;
  bestTime: string;
  specialMessage: string;
  callDate: string;
}

export default function Contact() {
  // Initialize the formData with a proper type
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    recipientName: "",
    relationship: "",
    contact: "",
    recipientContact: "",
    callPurpose: "",
    bestTime: "",
    specialMessage: "",
    callDate: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    // Clear the error for the specific field that is being updated
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [id]: "", // Clears the error for this field
    }));

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      // EmailJS send functionality
      const templateParams = {
        fullName: formData.fullName,
        recipientName: formData.recipientName,
        relationship: formData.relationship,
        contact: formData.contact,
        recipientContact: formData.recipientContact,
        callPurpose: formData.callPurpose,
        bestTime: formData.bestTime,
        specialMessage: formData.specialMessage,
        callDate: formData.callDate,
      };
      setLoading(true);
      // emailjs
      //   .send(
      //     "service_8ryr2k6", // Replace with your service ID
      //     "template_l2ee4xf", // Replace with your template ID
      //     templateParams,
      //     "tzNBPOYcCpnQxURaP" // Replace with your user ID
      //   )
      //   .then(
      //     (response) => {
      //       setLoading(false);
      //     },
      //     (error) => {
      //       console.error("Failed to send message.", error);
      //       setLoading(false);
      //     }
      //   );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Get in Touch
          </h1>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to create unforgettable moments? We're here to help you plan
            the perfect surprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: PhoneIcon,
              title: "Phone",
              content: "+234 8066183684",
              description: "Sunday to Saturday, 6am to 9pm ",
            },
            {
              icon: Mail,
              title: "Email",
              content: "Surprisecall@gmail.com",
              description: "We respond within 24 hours",
            },
            {
              icon: MapPin,
              title: "Office",
              content: "Adiza Estate Garki, FCT Abuja, Nigeria",
              description: "Available for in-person consultations",
            },
          ].map((contact, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <contact.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-purple-400 mb-2">{contact.content}</p>
              <p className="text-gray-400">{contact.description}</p>
            </div>
          ))}
        </div>

        <div
          className="max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Fill Out the Form Below
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="full-name"
                className="text-white font-medium mb-2 block"
              >
                Your Full Name (Mr/Mrs/Ms.)
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 capitalize text-sm">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Recipient Name */}
            <div>
              <label
                htmlFor="recipient-name"
                className="text-white font-medium mb-2 block"
              >
                Recipient's Name (Mr/Mrs/Ms.)
              </label>
              <input
                type="text"
                id="recipientName"
                placeholder="Enter the recipient's name"
                value={formData.recipientName}
                onChange={handleChange}
                className={`w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 ${
                  errors.recipientName ? "border-red-500" : ""
                }`}
              />
              {errors.recipientName && (
                <p className="text-red-500 capitalize text-sm">
                  {errors.recipientName}
                </p>
              )}
            </div>

            {/* Relationship */}
            <div>
              <label
                htmlFor="relationship"
                className="text-white font-medium mb-2 block"
              >
                Your Relationship with the Recipient
              </label>
              <input
                type="text"
                id="relationship"
                placeholder="Enter your relationship (e.g., Friend, Partner)"
                value={formData.relationship}
                onChange={handleChange}
                className={`w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 ${
                  errors.relationship ? "border-red-500" : ""
                }`}
              />
              {errors.relationship && (
                <p className="text-red-500 capitalize text-sm">
                  {errors.relationship}
                </p>
              )}
            </div>

            {/*Recepient Contact */}
            <div>
              <label
                htmlFor="contact"
                className="text-white font-medium mb-2 block"
              >
                Recipient Contact Number
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your contact info"
                value={formData.recipientContact}
                onChange={handleChange}
                className={`w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 ${
                  errors.recipientContact ? "border-red-500" : ""
                }`}
              />
              {errors.recipientContact && (
                <p className="text-red-500 capitalize text-sm">
                  {errors.recipientContact}
                </p>
              )}
            </div>


            {/* Contact */}
            <div>
              <label
                htmlFor="contact"
                className="text-white font-medium mb-2 block"
              >
                Your Contact Information (Phone/Email)
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your contact info"
                value={formData.contact}
                onChange={handleChange}
                className={`w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 ${
                  errors.contact ? "border-red-500" : ""
                }`}
              />
              {errors.contact && (
                <p className="text-red-500 capitalize text-sm">
                  {errors.contact}
                </p>
              )}
            </div>

            {/* Purpose of the Call */}
            <div>
              <label
                htmlFor="call-purpose"
                className="text-white font-medium mb-2 block"
              >
                Purpose of the Call
              </label>
              <input
                type="text"
                id="callPurpose"
                placeholder="Enter the purpose of the call"
                value={formData.callPurpose}
                onChange={handleChange}
                className={`w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 ${
                  errors.callPurpose ? "border-red-500" : ""
                }`}
              />
              {errors.callPurpose && (
                <p className="text-red-500 capitalize text-sm">
                  {errors.callPurpose}
                </p>
              )}
            </div>

            {/* Best Time to Reach the Recipient */}
            <div>
              <label
                htmlFor="best-time"
                className="text-white font-medium mb-2 block"
              >
                Best Time to Reach the Recipient
              </label>
              <input
                type="text"
                id="bestTime"
                placeholder="Enter the best time to call the recipient"
                value={formData.bestTime}
                onChange={handleChange}
                className={`w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 ${
                  errors.bestTime ? "border-red-500" : ""
                }`}
              />
              {errors.bestTime && (
                <p className="text-red-500 capitalize text-sm">
                  {errors.bestTime}
                </p>
              )}
            </div>

            {/* Special Message for the Recipient */}
            <div>
              <label
                htmlFor="special-message"
                className="text-white font-medium mb-2 block"
              >
                A Special Message for the Recipient
              </label>
              <textarea
                id="specialMessage"
                placeholder="Write a message for the recipient"
                rows={4}
                value={formData.specialMessage}
                onChange={handleChange}
                className={`w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 ${
                  errors.specialMessage ? "border-red-500" : ""
                }`}
              />
              {errors.specialMessage && (
                <p className="text-red-500 capitalize text-sm">
                  {errors.specialMessage}
                </p>
              )}
            </div>

            {/* Date to Make the Call */}
            <div>
              <label
                htmlFor="call-date"
                className="text-white font-medium mb-2 block"
              >
                Date to Make the Call
              </label>
              <input
                type="date"
                id="callDate"
                value={formData.callDate}
                onChange={handleChange}
                className={`w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 ${
                  errors.callDate ? "border-red-500" : ""
                }`}
              />
              {errors.callDate && (
                <p className="text-red-500 capitalize text-sm">
                  {errors.callDate}
                </p>
              )}
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
