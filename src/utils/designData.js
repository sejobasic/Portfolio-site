const photos = [
  require('../assets/layr.png'),
  require('../assets/layr.png'),
  require('../assets/layr.png'),
  require('../assets/layr.png'),
  require('../assets/layr.png')
]

const imageData = [photos, photos, photos, photos]

// points on the grid
// first value is row start, second value is how many rows it spans
// third value is column start, fourth value is how many columns it spans
const points = [
  [11, 2, 12, 2],
  [18, 6, 7, 1],
  [29, 5, 12, 3],
  [16, 10, 13, 3],
  [30, 14, 5, 2],
]
export { imageData, points}