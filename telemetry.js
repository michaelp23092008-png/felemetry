fetch("track.json")
  .then(r => r.json())
  .then(data => {

      const canvas = document.getElementById("trackMap");
      const ctx = canvas.getContext("2d");

      console.log("drawing points:", data.length);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();

      const scale = 10;

      data.forEach((p, i) => {

          const x = p.X * scale + 100;
          const y = p.Y * scale + 100;

          console.log(x, y);

          if (i === 0) {
              ctx.moveTo(x, y);
          } else {
              ctx.lineTo(x, y);
          }

      });

      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.stroke();

  })
  .catch(err => console.log("ERROR:", err));