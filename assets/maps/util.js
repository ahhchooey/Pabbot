
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
        return 8;
      case 5:
        return 4;
      case 6:
        return 9;
      case 7:
        return 5;
      case 9:
        return 6;
      case 10:
        return 4;
      case 11:
        return 12;
      case 13:
        return 10;
      case 14:
        return 7;
      case 15:
        return 11;
      case 19:
      case 20:
        return 4;
      case 21:
      case 22:
        return 13;
      case 24:
        return 14;
      default:
        return 0;
    }
  })
}
