function updateContent(section) {
    // Define the lorem ipsum text for each section
    const content = {
      home: `<h2>Creating New Gaming Experiences</h2><p>Zyramede Interactive is a studio focused on assisting writers in creating products for gamers and non-gamers that use the unique benefits of the digital medium.</p><p><h2>About Us</h2></p><p>At Zyramede Interactive we are dedicated to exploring and expanding the limits of humanity's forays into the digital space. Our team is focused on pushing the boundaries of what's possible, driven by curiosity and the spirit of progress. Created in the early 2020's, Zyramede Interactive aims to lead the way in hybridization of computers, humans, and media.</p>`,
      projects: `<h2>Our Projects</h2><p>At Zyramede Interactive, our projects are the heart of our quest for discovery. Focusing on experimental and hybrid projects, each project aims to further the database of media.</p><p><h2>In Progress</h2></p><p>River - An educational visual novel designed with the concept of Mirrors, Windows, and Sliding Glass Doors. An introduction to another world.</p><p><img src="images/River.png" alt="River" class="project-img"></p><p><h2>Other Projects</h2></p><p>Raydance - A retro inspired movement shooter that utilizes ray casting. A blend of old and new.</p><p><img src="images/raydance.png" alt="Raydance" class="project-img"></p><button type="button" class="full-width-button">Download Raydance</button><p>Spacefort Andromeda - An educational game, designed to improve player response time and colaborative skills. Based on real training simulators.</p><p><img src="images/spacefort.png" alt="Spacefort" class="project-img"></p>`,
      work: `<h2>Work with Zyramede Interactive</h2><p>Join us as we embark on this exciting journey into the unknown. If you think you have a project that would benefit from colaborating with Zyramede Interactive, feel free to reach out. Our fees work on a sliding scale, with more interesting projects and the financial situation of the artist taken into account. We accept projects at our discretion.</p>`
    };
  
    // Update the content area
    document.getElementById('content').innerHTML = content[section] || '';
  
    // Update the active class on the navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    document.getElementById(section).classList.add('active');
  }
  
  // Set the default content to 'home' on page load
  document.addEventListener('DOMContentLoaded', function() {
    updateContent('home');
  });
  
  function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.play();
  }
  
  function resetAndPlaySound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0; // Reset the sound to the start
    }
  }
  
  // Attach the sounds to the nav items for click and hover
  document.querySelectorAll('.nav-item').forEach(navItem => {
    navItem.addEventListener('mouseenter', () => resetAndPlaySound('nav-hover-sound'));
    navItem.addEventListener('click', () => resetAndPlaySound('nav-click-sound'));
  });
  