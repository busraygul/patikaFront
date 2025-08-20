
const taskInputDOM = document.querySelector("#taskInput")
const taskListDOM = document.querySelector("#taskList")
const toastStackDOM = document.querySelector("#toastStack")

let tasks = []; // tüm görevleri burada tutacağız
const STORAGE_KEY = "todo-items";

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));//localStorage te sadece string tutulduğu için stringfy() yaptık
}

function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  tasks = data ? JSON.parse(data) : [];
}
function renderTasks() {
  taskList.innerHTML = ""; // eski listeyi temizle

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center justify-content-between";
    if (task.done) li.classList.add("completed");
    li.dataset.id = task.id;

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = task.text;

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-sm btn-outline-danger";
    delBtn.textContent = "✕";

    li.append(span, delBtn);
    taskList.prepend(li);
  });
}


// Bir görev elemanı (li) üreten yardımcı fonksiyon
function createTaskElement(text) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center justify-content-between";//bootstrap kullandım.


  // soldaki bölüm: checkbox + metin
  const left = document.createElement("div");
  left.className = "d-flex align-items-center gap-2";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input m-0";
  

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  left.append(checkbox, span);

  // sağdaki bölüm: sil butonu
  const delBtn = document.createElement("button");
  delBtn.className = "btn btn-sm btn-outline-danger";
  delBtn.type = "button";
  delBtn.textContent = "✕"; // örnekteki “x” görünümü

  li.append(left, delBtn);
  return li;
}

function addTask() {
  const value = taskInputDOM.value.trim(); //trim olmazsa kullanıcı boş veri ekleyebiliyor.trim() fonk. boşlukları siliyor
  if (!value) {
    showToast("Boş görev ekleyemezsiniz.", "warning");
    taskInputDOM.focus(); //görev eklendikten sonra tekrar tıklamaya gerek kalmıyor. 
    return;
  }
  const newTask = {
    id: Date.now(),   // benzersiz id
    text: value,
    done: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  // const li = createTaskElement(value);
  // taskListDOM.appendChild(li);

  taskInputDOM.value = "";
  taskInputDOM.focus();
  showToast("Listeye eklendi.", "success");
}

// Enter ile ekleme
taskInputDOM.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});


// Liste üzerinde event delegation:
// - checkbox'a tıklanınca tamamlandı durumunu değiştir
// - sil butonuna tıklanınca o öğeyi kaldır

taskListDOM.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const id = Number(li.dataset.id);

  // Eğer butona basıldıysa -> sil
  if (e.target.matches("button")) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
    // li.remove();
    showToast("Öğe silindi.", "danger");
    return;
  }

  // Tamamlandı toggle (li'nin herhangi yerine basınca)
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
    saveTasks();
    renderTasks();
    showToast(task.done ? "Tamamlandı işaretlendi." : "Tamamlandı kaldırıldı.", "info");
  }

});

// onclick="addTask()" kullanılabilsin diye global alana aç
window.addTask = addTask;


function showToast(message, type = "info") {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = `
    <div class="toast align-items-center text-bg-${type} border-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Kapat"></button>
      </div>
    </div>
  `
  const toastEl = wrapper.firstElementChild;
  toastStackDOM.appendChild(toastEl);

  // 2.2 saniye sonra kendiliğinden kaybolsun
  const t = new bootstrap.Toast(toastEl, { delay: 2200 });
  t.show();

  toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
}
loadTasks(); // Sayfa açıldığında localStorage’dan daha önce kaydedilen görevleri okudu
renderTasks(); //listeyi ekrana bastı

