export function calcTileType(index, boardSize) {
  const list = [
    'top-left',
    'top-right',
    'top',
    'bottom-left',
    'bottom-right',
    'bottom',
    'right',
    'left',
    'center'
]
  return list[index];
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}


