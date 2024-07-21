document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("survey-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const age = parseFloat(document.getElementById("age").value);
      const gender = document.getElementById("gender").value;
      const heightInCm = parseFloat(document.getElementById("height").value); // Height in cm
      const weightInKg = parseFloat(document.getElementById("weight").value); // Weight in kg

      // Convert height from cm to meters
      const heightInMeters = heightInCm / 100;

      // Get activity level
      let activityLevel = "";
      document
        .querySelectorAll('input[name="activity_level"]:checked')
        .forEach((radio) => {
          activityLevel = radio.value;
        });

      const comments = document.getElementById("comments").value;

      // Calculate BMI, BMR, and Daily Caloric Needs
      function calculateBMI(weight, height) {
        return weight / (height * height);
      }

      function calculateBMR(weight, height, age, gender) {
        const heightInCm = height * 100; // Convert meters to centimeters
        if (gender === "male") {
          return 88.362 + 13.397 * weight + 4.799 * heightInCm - 5.677 * age;
        } else {
          return 447.593 + 9.247 * weight + 3.098 * heightInCm - 4.33 * age;
        }
      }

      function calculateDailyCaloricNeeds(bmr, activityLevel) {
        const activityFactors = {
          sedentary: 1.2,
          lightly_active: 1.375,
          moderately_active: 1.55,
          very_active: 1.725,
          super_active: 1.9,
        };
        return bmr * activityFactors[activityLevel];
      }

      const bmi = calculateBMI(weightInKg, heightInMeters);
      const bmr = calculateBMR(weightInKg, heightInMeters, age, gender);
      const dailyCaloricNeeds = calculateDailyCaloricNeeds(bmr, activityLevel);

      const formData = {
        name,
        email,
        age,
        gender,
        height: heightInCm, // Display height in cm
        weight: weightInKg,
        activityLevel,
        comments,
        bmi: bmi.toFixed(2),
        bmr: bmr.toFixed(2),
        dailyCaloricNeeds: dailyCaloricNeeds.toFixed(2),
      };

      // Store form data in localStorage
      localStorage.setItem("formData", JSON.stringify(formData));

      // Redirect to result page
      window.location.href = "result.html";
    });
});
