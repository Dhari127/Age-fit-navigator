document.addEventListener("DOMContentLoaded", function () {
  const formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    document.getElementById("result-name").textContent = formData.name;
    document.getElementById("result-email").textContent = formData.email;
    document.getElementById("result-age").textContent = formData.age;
    document.getElementById("result-gender").textContent = formData.gender;
    document.getElementById(
      "result-height"
    ).textContent = `${formData.height} cm`;
    document.getElementById(
      "result-weight"
    ).textContent = `${formData.weight} kg`;
    document.getElementById("result-activity-level").textContent =
      formData.activityLevel;
    document.getElementById("result-comments").textContent = formData.comments;
    document.getElementById("result-bmi").textContent = formData.bmi;
    document.getElementById(
      "result-bmr"
    ).textContent = `${formData.bmr} calories/day`;
    document.getElementById(
      "result-daily-caloric-needs"
    ).textContent = `${formData.dailyCaloricNeeds} calories/day`;
  }
});

function goBack() {
  window.location.href = "form.html"; // Redirect back to the form page
}

function goslides() {
  window.location.href = "index2.html";
}

function gotracker() {
  window.location.href = "./Tracker/index2.html";
}
