setTimeout(() => {
  const elem = document.querySelector("h1.my-name");
  const icon = document.querySelector("img#banner-icon");
  const name = elem.innerHTML;
  const blinker = `<span class="bg-zinc-400 w-0.5 h-4/5 inline-block mb-[-5px] ml-2"></span>`;
  let count = 1;

  elem.innerHTML = name.split("")[0];
  let addDelay = setInterval(() => {
    if (name.split.length > 1) {
      elem.innerHTML = elem.innerHTML.replace(blinker, "") + name.split("")[count] + blinker;
    }
    
    if (elem.innerHTML.replace(blinker, "") === name) {
      elem.innerHTML = elem.innerHTML.replace(blinker, "") + blinker;
      icon.classList.remove("animate__fadeIn");
      icon.classList.add("wavehand");
      clearInterval(addDelay);
    } else {
      count += 1; 
    }
  }, 150);
}, 950);

(() => {
  const elem = document.querySelectorAll(".animate__animated");
  (() => {
    elem.forEach((e) => {
      if (e.parentNode !== document.querySelector("div.banner")) {
        e.classList.add("animhide");
      }
    });
  })();
  $(window).on('DOMContentLoaded load resize scroll', () => {
    elem.forEach((e) => {
      const rect = e.getBoundingClientRect();
      if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= $(window).height() && rect.right <= $(window).width()) {
        e.classList.remove("animhide");
      }
    });
  });
})();

(() => {
  const down = document.querySelector("div.banner div.downarrow");
  down.onclick = function() {
    window.location.href = '#contents';
  };
})();

$(document).ready(async function () {
  await loadFull(tsParticles);
  $("#bgparticles")
    .particles()
    .init(
      {
        fpsLimit: 40,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: [],
            },
            onHover: {
              enable: true,
              mode: [],
              parallax: {
                enable: true,
                force: 10,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
          },
        },
        particles: {
          color: {
            value: ["#77eaf1", "#6befa5"]
          },
          links: {
            enable: false,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 150,
          },
          opacity: {
            value: {
              min: 0.6,
              max: 1.0
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }, (o) => {}
    );
});