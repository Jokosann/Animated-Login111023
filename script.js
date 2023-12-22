const container = document.getElementById("container"),
	registerBtn = document.getElementById("register"),
	loginBtn = document.getElementById("login");

container.addEventListener("click", (e) => {
	if (e.target == registerBtn) {
		container.classList.add("active");
	} else if (e.target == loginBtn) {
		container.classList.remove("active");
	}
});
