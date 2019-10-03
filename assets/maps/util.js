
export const collisionMapGenerator = (array) => {
  return array.map(value => {
    switch(value) {
      case 1:
        return 2;
      case 2: 
        return 1;
      case 3: 
        return 3;
      case 4:
        return 4;
      case 5:
        return 5;
      case 7: 
        return 6;
      case 8:
        return 9;
      case 10:
        return 7;
      case 12:
        return 8;
      case 15:
        return 4;
      case 16:
        return 4;
      default:
        return 0;
    }
  })
}
