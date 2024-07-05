
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const numBlossoms = 50;
const blossoms = [];


for (let i = 0; i < numBlossoms; i++) {
  blossoms.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10, 
    speed: Math.random() * 4 + 1,  
  });
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  blossoms.forEach(blossom => {
    
    ctx.fillStyle = '#FFC0CB';
    ctx.beginPath();
    ctx.arc(blossom.x, blossom.y, blossom.size, 0, Math.PI * 2);
    ctx.fill();

    
    blossom.y += blossom.speed;

    
    if (blossom.y > canvas.height + blossom.size) {
      blossom.y = -blossom.size;
      blossom.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}


animate();