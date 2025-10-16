export default function WhyChoose() {
  const features = [
    {
      title: "Curated Content",
      desc: "Hand-picked resources from top educators and industry experts",
      icon: (<lord-icon
    src="https://cdn.lordicon.com/rrbmabsx.json"
    trigger="hover"
    stroke="bold"
    colors="primary:#155dfc,secondary:#155dfc">
</lord-icon>),
      color: "bg-blue-100",
    },
    {
      title: "Real-time Updates",
      desc: "Get instant notifications about new opportunities and events",
      icon: (<lord-icon
    src="https://cdn.lordicon.com/apmrcxtj.json"
    trigger="hover"
    stroke="bold"
    colors="primary:#155dfc,secondary:#155dfc">
</lord-icon>),
      color: "bg-green-100",
    },
    {
      title: "Community Driven",
      desc: "Connect with fellow students and share knowledge",
      icon: (<lord-icon
  src="https://cdn.lordicon.com/rpviwvwn.json"
  trigger="hover"
  colors="primary:#155dfc,secondary:#155dfc"
  width="60"
  height="60"
  stroke="bold"
></lord-icon>),
      color: "bg-purple-100",
    },
  ];

  return (
    <section className="bg-[linear-gradient(to_left_bottom,#d000ff,#00d4ff)] py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[3rem] font-bold text-black mb-1">
          Why Choose Resource.CS?
        </h2>
        <p className="text-black text-[1.2rem] font-[500] mb-7">
          Everything you need to excel in your Computer Science journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${item.color} text-2xl`}
              >
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-[600] text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-black font-[400]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
