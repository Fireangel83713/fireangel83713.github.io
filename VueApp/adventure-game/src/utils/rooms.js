const rooms = require("@/data/rooms.json");

export function getRoomData() {
  return rooms;
}

export function getRoomById(id) {
  const room = rooms.find((room) => room.id === id);
  if (room) {
    return room;
  } else {
    throw new Error(`Could not find room with id ${id}`);
  }
}
