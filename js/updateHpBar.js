// currentHp, maxHp, turn
export default function updateHpBar(currentHp, maxHp, turn) {
  const player = document.getElementById('player-hp');
  const computer = document.getElementById('computer-hp');
  const percentage = (currentHp / maxHp) * 100;
  const min = Math.min(percentage, 100);

  if (turn === 0) {
    player.style.width = min + '%';
    player.innerText = Math.floor(min) + '%';

    // if (percentage > 100) {
    //   computer.style.width = 100 + '%';
    // }
  } else {
    computer.style.width = min + '%';
    computer.innerText = Math.floor(min) + '%';

    // if (percentage > 100) {
    //   computer.style.width = 100 + '%';
    // }
  }
}
