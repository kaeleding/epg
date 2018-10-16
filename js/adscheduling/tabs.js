document.querySelectorAll("#nav li").forEach(function(navEl) {
  navEl.onclick = function() {
    toggleTab(this.id, this.dataset.target);
  };
});

function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function(navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
    }
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function(tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}

var file = document.getElementById("fileup");
file.onchange = function() {
  if (file.files.length > 0) {
    document.getElementById("filename").innerHTML = file.files[0].name;
  }
};

var dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", function(event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");
});
