const Room = require("../Models/Room");

// exports.default = room = [
//   {
//     roomName: "Deluxe Room 1",
//     roomId: "R001",
//     price: 8000,
//     category: "Deluxe",
//     images: [
//       "https://example.com/image1.jpg",
//       "https://example.com/image2.jpg",
//     ],
//   },
//   {
//     roomName: "Standard Room 2",
//     roomId: "R002",
//     price: 6000,
//     category: "Standard",
//     images: [
//       "https://example.com/image3.jpg",
//       "https://example.com/image4.jpg",
//     ],
//   },
//   {
//     roomName: "Suite Room 3",
//     roomId: "R003",
//     price: 15000,
//     category: "Suite",
//     images: [
//       "https://example.com/image5.jpg",
//       "https://example.com/image6.jpg",
//     ],
//   },
//   {
//     roomName: "Deluxe Room 4",
//     roomId: "R004",
//     price: 9000,
//     category: "Deluxe",
//     images: [
//       "https://example.com/image7.jpg",
//       "https://example.com/image8.jpg",
//     ],
//   },
//   {
//     roomName: "Standard Room 5",
//     roomId: "R005",
//     price: 7000,
//     category: "Standard",
//     images: [
//       "https://example.com/image9.jpg",
//       "https://example.com/image10.jpg",
//     ],
//   },
//   {
//     roomName: "Suite Room 6",
//     roomId: "R006",
//     price: 18000,
//     category: "Suite",
//     images: [
//       "https://example.com/image11.jpg",
//       "https://example.com/image12.jpg",
//     ],
//   },
//   {
//     roomName: "Deluxe Room 7",
//     roomId: "R007",
//     price: 9500,
//     category: "Deluxe",
//     images: [
//       "https://example.com/image13.jpg",
//       "https://example.com/image14.jpg",
//     ],
//   },
//   {
//     roomName: "Standard Room 8",
//     roomId: "R008",
//     price: 6500,
//     category: "Standard",
//     images: [
//       "https://example.com/image15.jpg",
//       "https://example.com/image16.jpg",
//     ],
//   },
//   {
//     roomName: "Suite Room 9",
//     roomId: "R009",
//     price: 20000,
//     category: "Suite",
//     images: [
//       "https://example.com/image17.jpg",
//       "https://example.com/image18.jpg",
//     ],
//   },
//   {
//     roomName: "Deluxe Room 10",
//     roomId: "R010",
//     price: 8500,
//     category: "Deluxe",
//     images: [
//       "https://example.com/image19.jpg",
//       "https://example.com/image20.jpg",
//     ],
//   },
//   {
//     roomName: "Standard Room 11",
//     roomId: "R011",
//     price: 6000,
//     category: "Standard",
//     images: [
//       "https://example.com/image21.jpg",
//       "https://example.com/image22.jpg",
//     ],
//   },
//   {
//     roomName: "Suite Room 12",
//     roomId: "R012",
//     price: 19000,
//     category: "Suite",
//     images: [
//       "https://example.com/image23.jpg",
//       "https://example.com/image24.jpg",
//     ],
//   },
//   {
//     roomName: "Deluxe Room 13",
//     roomId: "R013",
//     price: 9000,
//     category: "Deluxe",
//     images: [
//       "https://example.com/image25.jpg",
//       "https://example.com/image26.jpg",
//     ],
//   },
//   {
//     roomName: "Standard Room 14",
//     roomId: "R014",
//     price: 7000,
//     category: "Standard",
//     images: [
//       "https://example.com/image27.jpg",
//       "https://example.com/image28.jpg",
//     ],
//   },
//   {
//     roomName: "Suite Room 15",
//     roomId: "R015",
//     price: 21000,
//     category: "Suite",
//     images: [
//       "https://example.com/image29.jpg",
//       "https://example.com/image30.jpg",
//     ],
//   },
//   {
//     roomName: "Deluxe Room 16",
//     roomId: "R016",
//     price: 9800,
//     category: "Deluxe",
//     images: [
//       "https://example.com/image31.jpg",
//       "https://example.com/image32.jpg",
//     ],
//   },
//   {
//     roomName: "Standard Room 17",
//     roomId: "R017",
//     price: 6800,
//     category: "Standard",
//     images: [
//       "https://example.com/image33.jpg",
//       "https://example.com/image34.jpg",
//     ],
//   },
//   {
//     roomName: "Suite Room 18",
//     roomId: "R018",
//     price: 24000,
//     category: "Suite",
//     images: [
//       "https://example.com/image35.jpg",
//       "https://example.com/image36.jpg",
//     ],
//   },
//   {
//     roomName: "Deluxe Room 19",
//     roomId: "R019",
//     price: 9200,
//     category: "Deluxe",
//     images: [
//       "https://example.com/image37.jpg",
//       "https://example.com/image38.jpg",
//     ],
//   },
//   {
//     roomName: "Standard Room 20",
//     roomId: "R020",
//     price: 6200,
//     category: "Standard",
//     images: [
//       "https://example.com/image39.jpg",
//       "https://example.com/image40.jpg",
//     ],
//   },
// ];

exports.createRoom = async (req, res) => {
  try {
    const { roomName, roomId, price, category, images, bookedBy, bookedAt } =
      req.body;

    const room = new Room({
      roomName,
      roomId,
      price,
      category,
      images,
      bookedBy,
      bookedAt,
    });

    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
