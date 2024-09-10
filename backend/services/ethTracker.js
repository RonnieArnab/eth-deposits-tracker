const decodePubkey = (data) => {
  return `0x${data.slice(0, 96)}`;
};

module.exports = { decodePubkey };
