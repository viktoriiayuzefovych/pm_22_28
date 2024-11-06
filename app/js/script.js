document.querySelectorAll(".skill-item").forEach((skill) => {
    const progress = skill.querySelector(".progress");
  
    const width = progress.style.width; // Наприклад, "80%"
  
    progress.style.setProperty("--progress-width", width);
});
  document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill-item");
  
    skills.forEach((skill, index) => {
      setTimeout(() => {
        skill.classList.add("visible"); // Додаємо клас видимості
      }, index * 300); // Затримка для кожного елемента
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach((progressBar) => {
      const width = progressBar.style.width; // Отримуємо задану ширину
      progressBar.style.width = "0"; // Задаємо початкову ширину 0
      setTimeout(() => {
        progressBar.style.width = width; // Відновлюємо ширину для анімації
      }, 100); // Затримка для початку анімації
    });
  });
  
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
    fetch('http://localhost:5000/data')
        .then(response => response.json())
        .then(data => {
          console.log(data);
           // Робота з секцією 'skills'
           /*const skillsContainer = document.getElementById('skills');
           const skillsHTML = data.skills.map(skill => `
               <div class="skill-item">
                 <div class="d-flex">
                   <span class="marker"></span>
                   <p class="skill">${skill.name}</p>
                 </div>
                 <div class="progress-bar">
                   <div class="progress" style="width: ${skill.progress}"></div>
                 </div>
               </div>
           `).join('');
           skillsContainer.innerHTML = skillsHTML;*/

           const referencesContainer = document.getElementById('referen');
           const referencesHTML = data.references.map(ref => `
                 <div class="first-comp" style="background-color: #425055;">
                            <h3 style="color: #fff; font-size: 1.3rem; letter-spacing: 0.06rem; text-transform: uppercase;">${ref.name}</h3>
                            <p>${ref.address}</p>
                            <span>${ref.phone}</span><a href="tel:+1-970-533-3393">+1-970-533-3393</a> 
                            <span>${ref.email}</span><a href="https://www.yourwebsite.com">www.yourwebsite.com</a>
                        </div>
               </div>
           `).join('');
           referencesContainer.innerHTML = referencesHTML;
 
           // Після завантаження даних ініціюємо анімації
           setProgressWidth();
           animateSkillBoxVisibility();
           animateProgressBars();
           animateShapes();
   })
  });
