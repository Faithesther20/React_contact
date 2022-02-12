const contacts = [
  {
    id: 1,
    name: "Daniel Kolenda",
    imgURL: "https://www.pngkey.com/png/full/658-6589017_daniel-kolenda.png",
    phone: "+123 456 789",
    email: "d@kolenda.com"
  },
  {
    id: 2,
    name: "Pst W.F Kumuyi",
    imgURL:
      "data:image/jpeg;base64,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",
    phone: "+987 654 321",
    email: "wf@Kumuyi.com"
  },
  {
    id: 3,
    name: "Pst Paul washer",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbUfdRLW1LtSZ6nR1yW4SR7s-2111kwuQRQ&usqp=CAU",
    phone: "+918 372 574",
    email: "gmail@paul.com"
  }
];

export default contacts;
