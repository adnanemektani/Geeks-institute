function Contact() {
  return (
    <div className="py-16 text-center bg-white">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-10">Have any questions? Send us a message and we'll get back to you as soon as possible.</p>

      <div className="bg-white shadow-md rounded-xl p-8 max-w-2xl mx-auto text-left">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <div className="flex gap-6">
          <p className="text-gray-500 w-1/2">Have any questions? Send us a message and we'll get back to you as soon as possible.</p>
          <div className="flex flex-col gap-4 w-1/2">
            <input type="email" placeholder="Email Address" className="border rounded-lg p-3 w-full" />
            <textarea placeholder="Your Message" className="border rounded-lg p-3 w-full h-32" />
            <button className="bg-red-500 text-white py-3 rounded-lg font-semibold">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact