
"use strict";

const SELECTORS = {
  menuContainer: ".section-center",     // Menü kartlarının yerleştirileceği alan
  buttonContainer: ".btn-container",    // Butonların olduğu alan
};


const menu = [
    {
        id:1,
        title: "Traditional Turkish Breakfast",
        category:"Breakfast",
        price: 750,
        img: "breakfast.jpg",
        desc: "A rich selection of cheeses, olives, fresh bread, tomatoes, cucumbers, and eggs served with tea. "
    },{
        id:2,
        title: "Menemen",
        category:"Breakfast",
        price: 200,
        img: "menemen.jpg",
        desc: "Scrambled eggs cooked with tomatoes, green peppers, and spices for a hearty start."
    },{
        id:3,
        title: "Urfa Kebab",
        category:"Kebabs",
        price: 600,
        img: "urfa.jpeg",
        desc: "Mild and flavorful minced lamb kebab, grilled to tender perfection for those who prefer a gentle taste. "
    },{
        id:4,
        title: "Iskender Kebab",
        category:"Kebabs",
        price: 650,
        img: "iskender.jpg",
        desc: "Thinly sliced döner meat layered over crispy pita bread, drizzled with tomato sauce and served with yogurt. "
    },{
        id:5,
        title: "Mantı",
        category:"House Specials",
        price: 300,
        img: "manti.jpg",
        desc: "Delicate handmade dumplings filled with seasoned minced meat, topped with garlic yogurt and butter sauce. "
    },{
        id:6,
        title: "Karnıyarık",
        category:"House Specials",
        price: 300,
        img: "karniyarik.jpg",
        desc: "Eggplant stuffed with minced lamb, onions, tomatoes, and herbs, baked to perfection.  "
    }
]

// function formatPriceTRY(n) { 
//   return new Intl.NumberFormat("tr-TR", {
//     style: "currency",
//     currency: "TRY"
//   }).format(n);
// }
//bu daha basit kullanımı
function formatPriceTRY(n) {
  return "₺" + Number(n).toFixed(2);
}

function itemToHTML({ title, price, img, desc }) {
  return `
  <div class="menu-items col-lg-6 col-sm-12">
    <img src="${img}" alt="${title}" class="photo" loading="lazy" />
    <div class="menu-info">
      <header>
        <h4>${title}</h4>
        <h4 class="price">${formatPriceTRY(price)}</h4>
      </header>
      <p class="item-text">${desc}</p>
    </div>
  </div>`;
}

function renderMenu(items) {
  const container = document.querySelector(SELECTORS.menuContainer);
  if (!container) return console.error("menuContainer bulunamadı!");
  container.innerHTML = items.map(itemToHTML).join("");
}

function wireButtons() {
  const btnWrap = document.querySelector(SELECTORS.buttonContainer);//tüm butonları btnWrap içinde topladı
  if (!btnWrap) return console.error("buttonContainer bulunamadı!");

  btnWrap.addEventListener("click", (e) => { //tek tek butonlara listener eklemek yerine btnWraple hepsine aynı anda ekledi
    const btn = e.target.closest("button");
    if (!btn) return;

    const label = btn.textContent.trim(); // All, Breakfast, Kebabs, House Specials
    const items = label === "All" ? menu : menu.filter(m => m.category === label);
    renderMenu(items);

    // aktif sınıfı görselleştirme
    [...btnWrap.querySelectorAll("button")].forEach(b => b.classList.remove("active"));//listelenen hepsini siler 
    btn.classList.add("active");//sonra seçilen kategoriye göre tekrar ekrana yazdırılır
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menu);   // başlangıçta hepsini göster
  wireButtons();      // butonları bağla
});



