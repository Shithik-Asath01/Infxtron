const EVENTS_DATA = [
  {
    name: "Paper Presentation",
    title: "Paper Presentation",
    imgURL: "/imgs/tech/6.png",
    studName: "Asath",
    phone: "+91 1111111",
    status: "Registartion Open",
    additonals: (
      <a
        target="_blank"
        href="https://drive.google.com/drive/folders/1B_bE0cwAyEb6qlJ1MPMa0NpQ14tzGc7b"
      >
        <h6
          style={{
            marginTop: 28,
            cursor: "pointer",
            fontSize: 21,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "rgb(192, 58, 255)",
          }}
        >
          <img
            width="38"
            src="/imgs/drive.png"
            alt="google-drive"
            className="eventIcon"
            style={{ borderRadius: 0 }}
          />
          &nbsp;&nbsp;Upload Your PPT
        </h6>
      </a>
    ),
    description: [
      {
        heading: "Topics",
        info: [
          "AI in daily life",
          "The future of transportation",
          "AI in education",
          "ML for productivity",
          "Blockchain for data analytics",
          "Data-driven consumer experience",
          "Your innovative ideas",
        ],
      },
      {
        heading: "Rules",
        info: [
          "Presentation should be done in English",
          "Team should comprise of only 3 members",
          "Individual participation is also encouraged",
          "Maximum 7 min is provided for each presentation (5 min presentation, 2 min Q&A session)",
          "All participants are allowed to use a maximum of 12 slides",
        ],
      },
      {
        additonal: (
          <p style={{ margin: "12px 0" }}>
            <i style={{ color: "orange" }} className="bx bxs-notepad"></i>{" "}
            <strong>Note:</strong> Slight Modifications can be made for the
            competitive matches based on the registration count.
          </p>
        ),
      },
    ],
    co_ordinators: [
      "Shyam Kumar A",
      "Kirupa D",
      "Aravind G",
      "Janani P",
      "Arun KH",
      "Sachin R",
    ],
  },
];

export default EVENTS_DATA;