const hideActivityBtn = document.querySelectorAll(".activity__btn");
const customerActivities = document.querySelector(".customer__activities");

hideActivityBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    customerActivities.classList.add("hide__activity-box");
  });
});
