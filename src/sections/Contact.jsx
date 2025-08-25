"use client";

import React from 'react'

import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen font-mono flex items-center justify-center py-20">
      <div >
        <h2>
          Get in touch
        </h2>
        <form className="space-y-6">
          <div className="relative">
            <input
            id="name"
            name="name"
            placeholder="Name..."
            type="text"
            required
            className=""
            />
          </div>
          <div className="relative">
            <input></input>
          </div>
          <div className="relative">
            <textarea id="message" type="message"/>
          </div>
        </form>
        <button>{" "}Sending{" "}</button>
      </div>
    </section>
  )
}

export default Contact
