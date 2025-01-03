// Thêm dòng này để kiểm tra function có chạy không
console.log('Script loaded');

// Render cards trên trang chủ
function renderModuleCards() {
  console.log('Rendering cards...'); // Thêm log để debug
  const moduleCards = document.getElementById('moduleCards');

  if (!moduleCards) {
    console.error('Không tìm thấy element moduleCards');
    return;
  }

  moduleData.forEach(module => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
            <div class="card-number">Module ${module.id}</div>
            <img class="card-image" src="${module.image}" alt="${module.title}">
            <div class="card-content">
                <h3 class="card-title">${module.title}</h3>
                <p class="card-description">${module.description}</p>
            </div>
        `;

    card.addEventListener('click', () => {
      window.location.href = `module.html?id=${module.id}`;
    });

    moduleCards.appendChild(card);
  });
}

// Render nội dung chi tiết module
function renderModuleDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const moduleId = parseInt(urlParams.get('id'));

  const module = moduleData.find(m => m.id === moduleId);
  if (!module) return;

  const contentDiv = document.getElementById('moduleContent');
  contentDiv.innerHTML = `
        <div class="breadcrumb">
            <a href="index.html">Trang chủ</a> / ${module.title}
        </div>
        <div class="module-detail">
            <h1>${module.title}</h1>
            <div class="content">
                ${marked(module.content)}
            </div>
        </div>
    `;
}

// Thêm event listener cho responsive
window.addEventListener('resize', () => {
  // Có thể thêm xử lý đặc biệt cho responsive nếu cần
});

// Gọi function khi document đã load xong
document.addEventListener('DOMContentLoaded', renderModuleCards);

// Khởi chạy các hàm tương ứng với trang
if (document.getElementById('moduleCards')) {
  renderModuleCards();
} else if (document.getElementById('moduleContent')) {
  renderModuleDetail();
}