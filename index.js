const bars = document.querySelector(".bars");
const times = document.querySelector(".times");
const list1= document.querySelector(".list1");
const list2 = document.querySelector(".list2");
let arr=["bars","times","list1","list2"]

bars.addEventListener("click", () => {
    list1.classList.add("active");
    list2.classList.add("active");
    bars.classList.add("active");
	times.classList.add("active");
});
times.addEventListener("click", () => {
	list1.classList.remove("active");
	list2.classList.remove("active");
	bars.classList.remove("active");
	times.classList.remove("active");
});
