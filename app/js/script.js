//import { name } from "browser-sync";
const openButtons = document.getElementsByClassName('open-info-btn');
const infoBoxes = document.getElementsByClassName('open-info-box');
const mainInfoBoxes = document.getElementsByClassName('main-info-box');
const progressBars = document.getElementsByClassName('mn-progress-bar');

Array.from(openButtons).forEach((openButton, index) => {
  openButton.addEventListener('click', () => showOrHide(openButton, infoBoxes[index], mainInfoBoxes[index]));
});

function setProgressWidth() {
  document.querySelectorAll(".skill-item").forEach((skillBox) => {
    const progress = skillBox.querySelector(".progress");
    const width = progress.style.width; // Наприклад, "55%"
    progress.style.setProperty("--progress-width", width); // Зберігаємо ширину у CSS-змінній
  });
}

function animateSkillBoxVisibility() {
  const skillBoxes = document.querySelectorAll(".skill-item");
  
  skillBoxes.forEach((skillBox, index) => {
    setTimeout(() => {
      skillBox.classList.add("visible"); // Додаємо клас видимості
    }, index * 300); // Затримка для кожного елемента
  });
}
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress");
  
  progressBars.forEach((progressBar) => {
    const width = progressBar.style.width; // Отримуємо початкову ширину
    progressBar.style.width = "0"; // Спочатку встановлюємо ширину 0
    setTimeout(() => {
      progressBar.style.width = width; // Відновлюємо початкову ширину для анімації
    }, 100); // Затримка перед початком анімації
  });
}

  
  const btnRoll = document.getElementsByClassName("roll");
  const blockRoll = document.getElementsByClassName("roll-block");
  Array.from(btnRoll).forEach((btn, index) => {
    btn.addEventListener("click", () => showOrHide(blockRoll[index]));
  });
  function showOrHide(block) {
    if (block.style.maxHeight) {
      block.style.maxHeight = null;
    } else {
      block.style.maxHeight = "300vh";
    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/data')
        .then(response => response.json())
        .then(data => {
          console.log(data);

          const profileContainer = document.getElementById('profile');
          const profileHTML = data.profile.map(proff => `
              <span style="font-weight: 800; font-style: italic; font-size: 1.4rem; letter-spacing: 0.06rem;color: #425055;">${proff.name}</span> <span style="font-weight:300; font-size: 1.4rem; letter-spacing: 0.06rem; color: #425055;">${proff.text}</span>                  
                        
          `).join('');
          profileContainer.innerHTML = profileHTML;
          console.log(profileHTML);

           const skillsContainer = document.getElementById('skills');
           const skillsHTML = data.skills.map(skill => `
            <div class="skill-item">
                                    <span>${skill.name}</span>
                                <div class="progress-bar">
                                    <div class="progress" style="width: ${skill.progress}"></div>
                                </div>
                            </div>
           `).join('');
           skillsContainer.innerHTML = skillsHTML;

           const referencesContainer = document.getElementById('referen');
           const referencesHTML = data.referen.map(ref => `
            <div class="first-comp">
                            <h3> ${ref.name}</h3>
                            <p>${ref.address}</p>
                            <span>Tel:</span><a href="tel:${ref.phone}">${ref.phone}</a> 
                            <span>Email:</span><a href="https://${ref.email}">${ref.email}</a>
            </div>
                
           `).join('');
           referencesContainer.innerHTML = referencesHTML;

           setProgressWidth();
           animateSkillBoxVisibility();
           animateProgressBars();
    })
  });
