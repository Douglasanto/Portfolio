import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    try {
      emailjs.send(
        "service_4fg2ktm",
        "template_vdz1y8k",
        templateParams,
        "INz1rHYLNY63ws6oZ"
      );
      alert("Email enviado com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      alert("Ocorreu um erro ao enviar o email.");
    }
  };
  const isFormValid = formData.name && formData.email && formData.message;
  return (
    <>
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg border-2 border-[#323232] shadow-effect relative">
        <h2 className="font-bold text-lg text-center text-gray-800 mb-6">
          Entre em Contato
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 mt-2 border-none outline-none rounded-2xl bg-[#ccc] transition ease-in-out shadow-inset duration-300 focus:bg-white focus:scale-105 focus:shadow-custom"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label
              className="block text-gray-600 font-semibold"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 mt-2 border-none outline-none rounded-2xl bg-[#ccc] transition ease-in-out shadow-inset duration-300 focus:bg-white focus:scale-105 focus:shadow-custom"
              placeholder="Seu e-mail"
            />
          </div>

          <div>
            <label
              className="block text-gray-600 font-semibold"
              htmlFor="message"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 mt-2 border-none outline-none rounded-2xl bg-[#ccc] transition ease-in-out shadow-inset duration-300 focus:bg-white focus:scale-105 focus:shadow-custom"
              placeholder="Sua mensagem"
            />
          </div>

          <button type="submit" disabled={!isFormValid} className="oauthButton">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Forms;
