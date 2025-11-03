// 示例书籍数据
const books = [
  {
    id: 1,
    title: "三体",
    author: "刘慈欣",
    description: "刘慈欣的科幻巨著，讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。小说以气势宏大的叙事和深刻的哲学思考著称，是中国科幻文学的里程碑之作。",
    tags: ["科幻", "刘慈欣", "雨果奖", "硬科幻"],
    cover: "images/three-body.jpg",
    publisher: "重庆出版社",
    year: 2008,
    rating: 4.8,
    isPopular: true,
    category: "scifi"
  },
  {
    id: 2,
    title: "活着",
    author: "余华",
    description: "余华的代表作，讲述了一个人历尽世间沧桑和磨难的一生，亦将中国大半个世纪的社会变迁凝缩其间。小说以朴素的语言和深刻的情感打动无数读者，展现了生命的坚韧与尊严。",
    tags: ["文学", "余华", "人生", "当代文学"],
    cover: "images/to-live.jpg",
    publisher: "作家出版社",
    year: 1993,
    rating: 4.7,
    isPopular: true,
    category: "fiction"
  },
  {
    id: 3,
    title: "百年孤独",
    author: "加西亚·马尔克斯",
    description: "加西亚·马尔克斯创作的长篇小说，是魔幻现实主义的经典作品，描写了布恩迪亚家族七代人的传奇故事。小说以其独特的叙事风格和丰富的想象力，成为世界文学的瑰宝。",
    tags: ["魔幻现实主义", "马尔克斯", "诺贝尔奖", "拉美文学"],
    cover: "images/hundred-loneliness.jpg",
    publisher: "南海出版公司",
    year: 1967,
    rating: 4.9,
    isPopular: true,
    category: "fiction"
  },
  {
    id: 4,
    title: "小王子",
    author: "安托万·德·圣-埃克苏佩里",
    description: "法国作家安托万·德·圣-埃克苏佩里创作的著名儿童文学短篇小说，以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中所经历的各种冒险。",
    tags: ["童话", "哲理", "法国文学", "经典"],
    cover: "images/the-little-prince.jpg",
    publisher: "人民文学出版社",
    year: 1943,
    rating: 4.8,
    isPopular: true,
    category: "fiction"
  },
  {
    id: 5,
    title: "1984",
    author: "乔治·奥威尔",
    description: "英国作家乔治·奥威尔创作的一部反乌托邦小说，刻画了一个令人感到窒息的恐怖世界。小说对极权主义政权和监控社会的描绘具有深刻的警示意义。",
    tags: ["反乌托邦", "政治小说", "乔治·奥威尔", "经典"],
    cover: "images/1984.jpg",
    publisher: "辽宁人民出版社",
    year: 1949,
    rating: 4.7,
    isPopular: false,
    category: "fiction"
  },
  {
    id: 6,
    title: "红楼梦",
    author: "曹雪芹",
    description: "中国古典四大名著之首，清代作家曹雪芹创作的章回体长篇小说，以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉、林黛玉、薛宝钗的爱情婚姻故事为主线，描绘了一批举止见识出于须眉之上的闺阁佳人的人生百态。",
    tags: ["古典文学", "四大名著", "曹雪芹", "经典"],
    cover: "images/reddream.jpg",
    publisher: "人民文学出版社",
    year: 1791,
    rating: 4.9,
    isPopular: true,
    category: "fiction"
  },
  {
    id: 7,
    title: "追风筝的人",
    author: "卡勒德·胡赛尼",
    description: "美籍阿富汗作家卡勒德·胡赛尼的第一部长篇小说，讲述了一个关于友谊、背叛和救赎的故事。小说以阿富汗的历史变迁为背景，情感真挚动人。",
    tags: ["文学", "友谊", "救赎", "外国文学"],
    cover: "images/kite-runner.jpg",
    publisher: "上海人民出版社",
    year: 2003,
    rating: 4.6,
    isPopular: false,
    category: "fiction"
  },
  {
    id: 8,
    title: "人类简史",
    author: "尤瓦尔·赫拉利",
    description: "以色列历史学家尤瓦尔·赫拉利创作的历史类著作，讲述了从十万年前有生命迹象开始到21世纪资本、科技交织的人类发展史。",
    tags: ["历史", "科普", "人类学", "社会学"],
    cover: "images/sapiens.jpg",
    publisher: "中信出版社",
    year: 2014,
    rating: 4.7,
    isPopular: true,
    category: "science"
  },
  {
    id: 9,
    title: "白夜行",
    author: "东野圭吾",
    description: "日本作家东野圭吾创作的长篇小说，讲述了一对有着悲惨命运的少年少女，19年来以相当残酷、孤独、单纯的灵魂相爱却无法相守的故事。",
    tags: ["悬疑", "推理", "东野圭吾", "日本文学"],
    cover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNlOGY0ZjgiLz48dGV4dCB4PSIxNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNGE3YjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4kTm9JbWFnZTwvdGV4dD48L3N2Zz4=",
    publisher: "南海出版公司",
    year: 1999,
    rating: 4.8,
    isPopular: false,
    category: "mystery"
  },
  {
    id: 10,
    title: "沉思录",
    author: "马可·奥勒留",
    description: "古罗马皇帝马可·奥勒留所著的哲学随笔集，是斯多葛派哲学的重要典籍。书中阐述了作者对自然、人生、社会的深刻思考。",
    tags: ["哲学", "古典", "斯多葛", "人生思考"],
    cover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNlOGY0ZjgiLz48dGV4dCB4PSIxNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNGE3YjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4kTm9JbWFnZTwvdGV4dD48L3N2Zz4=",
    publisher: "中央编译出版社",
    year: 180,
    rating: 4.5,
    isPopular: false,
    category: "philosophy"
  }
];

// 当前用户状态
let currentUser = null;
let isLoginMode = true;
let currentPage = 'home';
let selectedTags = [];

// DOM元素
const authModal = document.getElementById('authModal');
const modalTitle = document.getElementById('modalTitle');
const authForm = document.getElementById('authForm');
const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
const submitAuth = document.getElementById('submitAuth');
const switchAuthMode = document.getElementById('switchAuthMode');
const closeModal = document.getElementById('closeModal');
const loginButton = document.getElementById('loginButton');
const userInfo = document.getElementById('userInfo');
const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');
const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const searchResultsGrid = document.getElementById('searchResultsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const homePage = document.getElementById('home-page');
const homeLink = document.getElementById('homeLink');
const footerHomeLink = document.getElementById('footerHomeLink');
const popularBooksPage = document.getElementById('popularBooksPage');
const popularLink = document.getElementById('popularLink');
const footerPopularLink = document.getElementById('footerPopularLink');
const popularBooksGrid = document.getElementById('popularBooksGrid');
const categoriesPage = document.getElementById('categoriesPage');
const categoriesLink = document.getElementById('categoriesLink');
const footerCategoriesLink = document.getElementById('footerCategoriesLink');
const uploadPage = document.getElementById('uploadPage');
const uploadLink = document.getElementById('uploadLink');
const footerUploadLink = document.getElementById('footerUploadLink');
const bookUploadForm = document.getElementById('bookUploadForm');
const bookDetailPage = document.getElementById('bookDetailPage');
const bookDetail = document.getElementById('bookDetail');
const backFromSearch = document.getElementById('backFromSearch');
const backFromPopular = document.getElementById('backFromPopular');
const backFromCategories = document.getElementById('backFromCategories');
const backFromUpload = document.getElementById('backFromUpload');
const backFromDetail = document.getElementById('backFromDetail');
const fileUploadArea = document.getElementById('fileUploadArea');
const bookCover = document.getElementById('bookCover');
const tagInput = document.getElementById('tagInput');
const tagInputField = document.getElementById('tagInputField');
const imagePreview = document.getElementById('imagePreview');
const previewImage = document.getElementById('previewImage');
const removeImage = document.getElementById('removeImage');
const cancelUpload = document.getElementById('cancelUpload');
const uploadProgress = document.getElementById('uploadProgress');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const showUploadForm = document.getElementById('showUploadForm');
const categoryCards = document.querySelectorAll('.category-card');

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
  renderBooks();
  setupEventListeners();
});

// 渲染书籍列表
function renderBooks() {
  booksGrid.innerHTML = '';
  
  // 只显示热门书籍
  const popularBooks = books.filter(book => book.isPopular);
  
  popularBooks.forEach(book => {
    const bookCard = createBookCard(book);
    booksGrid.appendChild(bookCard);
  });
}

// 创建书籍卡片
function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';
  bookCard.setAttribute('data-id', book.id);
  bookCard.innerHTML = `
    <img src="${book.cover}" alt="${book.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNlOGY0ZjgiLz48dGV4dCB4PSIxNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNGE3YjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4kTm9JbWFnZTwvdGV4dD48L3N2Zz4='">
    <h3>${book.title}</h3>
    <p>${book.description.substring(0, 100)}...</p>
    <div class="tags">
      ${book.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <a href="#" class="button view-detail" data-id="${book.id}">查看详情</a>
  `;
  return bookCard;
}

// 设置事件监听器
function setupEventListeners() {
  // 登录/注册按钮
  loginButton.addEventListener('click', showAuthModal);
  
  // 关闭模态框
  closeModal.addEventListener('click', hideAuthModal);
  
  // 切换登录/注册模式
  switchAuthMode.addEventListener('click', function(e) {
    e.preventDefault();
    toggleAuthMode();
  });
  
  // 提交认证表单
  authForm.addEventListener('submit', handleAuthSubmit);
  
  // 搜索功能
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // 导航链接
  homeLink.addEventListener('click', function(e) {
    e.preventDefault();
    showPage('home');
  });
  
  footerHomeLink.addEventListener('click', function(e) {
    e.preventDefault();
    showPage('home');
  });
  
  popularLink.addEventListener('click', function(e) {
    e.preventDefault();
    showPage('popular');
  });
  
  footerPopularLink.addEventListener('click', function(e) {
    e.preventDefault();
    showPage('popular');
  });
  
  categoriesLink.addEventListener('click', function(e) {
    e.preventDefault();
    showPage('categories');
  });
  
  footerCategoriesLink.addEventListener('click', function(e) {
    e.preventDefault();
    showPage('categories');
  });
  
  uploadLink.addEventListener('click', function(e) {
    e.preventDefault();
    showPage('upload');
  });
  
  footerUploadLink.addEventListener('click', function(e) {
    e.preventDefault();
    showPage('upload');
  });
  
  showUploadForm.addEventListener('click', function() {
    showPage('upload');
  });
  
  // 返回按钮
  backFromSearch.addEventListener('click', function() {
    showPage('home');
  });
  
  backFromPopular.addEventListener('click', function() {
    showPage('home');
  });
  
  backFromCategories.addEventListener('click', function() {
    showPage('home');
  });
  
  backFromUpload.addEventListener('click', function() {
    showPage('home');
  });
  
  backFromDetail.addEventListener('click', function() {
    if (currentPage === 'detail') {
      showPage('home');
    }
  });
  
  // 分类卡片点击事件
  categoryCards.forEach(card => {
    card.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      showCategoryBooks(category);
    });
  });
  
  // 查看图书详情
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('view-detail')) {
      e.preventDefault();
      const bookId = parseInt(e.target.getAttribute('data-id'));
      showBookDetail(bookId);
    }
    
    // 点击书籍卡片也可以查看详情
    if (e.target.closest('.book-card')) {
      const bookCard = e.target.closest('.book-card');
      const bookId = parseInt(bookCard.getAttribute('data-id'));
      showBookDetail(bookId);
    }
  });
  
  // 上传表单相关事件
  bookUploadForm.addEventListener('submit', handleBookUpload);
  
  fileUploadArea.addEventListener('click', function() {
    bookCover.click();
  });
  
  bookCover.addEventListener('change', function() {
    if (this.files && this.files[0]) {
      const file = this.files[0];
      
      // 验证文件类型和大小
      if (!file.type.match('image.*')) {
        showError('请选择图片文件');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        showError('图片大小不能超过5MB');
        return;
      }
      
      // 显示预览
      const reader = new FileReader();
      reader.onload = function(e) {
        previewImage.src = e.target.result;
        imagePreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
  
  removeImage.addEventListener('click', function() {
    bookCover.value = '';
    imagePreview.style.display = 'none';
  });
  
  cancelUpload.addEventListener('click', function() {
    resetUploadForm();
    showPage('home');
  });
  
  // 标签输入
  tagInputField.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(this.value.trim());
      this.value = '';
    }
  });
  
  tagInputField.addEventListener('blur', function() {
    if (this.value.trim() !== '') {
      addTag(this.value.trim());
      this.value = '';
    }
  });
  
  // 点击模态框外部关闭
  window.addEventListener('click', function(e) {
    if (e.target === authModal) {
      hideAuthModal();
    }
  });
}

// 显示认证模态框
function showAuthModal() {
  if (currentUser) {
    // 如果已登录，显示用户菜单或执行登出
    if (confirm('确定要退出登录吗？')) {
      logout();
    }
  } else {
    authModal.style.display = 'flex';
  }
}

// 隐藏认证模态框
function hideAuthModal() {
  authModal.style.display = 'none';
  authForm.reset();
}

// 切换登录/注册模式
function toggleAuthMode() {
  isLoginMode = !isLoginMode;
  
  if (isLoginMode) {
    modalTitle.textContent = '登录';
    submitAuth.textContent = '登录';
    switchAuthMode.textContent = '还没有账号？立即注册';
    confirmPasswordGroup.style.display = 'none';
  } else {
    modalTitle.textContent = '注册';
    submitAuth.textContent = '注册';
    switchAuthMode.textContent = '已有账号？立即登录';
    confirmPasswordGroup.style.display = 'block';
  }
}

// 处理认证表单提交
function handleAuthSubmit(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (!isLoginMode) {
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      alert('两次输入的密码不一致！');
      return;
    }
    
    // 模拟注册
    currentUser = {
      username: username,
      avatar: username.charAt(0).toUpperCase()
    };
    
    alert('注册成功！');
  } else {
    // 模拟登录
    currentUser = {
      username: username,
      avatar: username.charAt(0).toUpperCase()
    };
    
    alert('登录成功！');
  }
  
  updateUserInterface();
  hideAuthModal();
}

// 登出
function logout() {
  currentUser = null;
  updateUserInterface();
}

// 更新用户界面
function updateUserInterface() {
  if (currentUser) {
    loginButton.textContent = '退出登录';
    userInfo.style.display = 'flex';
    userAvatar.textContent = currentUser.avatar;
    userName.textContent = currentUser.username;
  } else {
    loginButton.textContent = '登录/注册';
    userInfo.style.display = 'none';
  }
}

// 执行搜索
function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  
  if (query === '') {
    alert('请输入搜索关键词');
    return;
  }
  
  // 搜索书籍
  const results = books.filter(book => 
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) ||
    book.tags.some(tag => tag.toLowerCase().includes(query))
  );
  
  // 显示搜索结果
  displaySearchResults(results, query);
}

// 显示搜索结果
function displaySearchResults(results, query) {
  // 更新结果计数
  resultsCount.textContent = `找到 ${results.length} 个结果 (关键词: "${query}")`;
  
  // 清空结果网格
  searchResultsGrid.innerHTML = '';
  
  // 显示或隐藏无结果消息
  if (results.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    
    // 添加结果到网格
    results.forEach(book => {
      const bookCard = createBookCard(book);
      searchResultsGrid.appendChild(bookCard);
    });
  }
  
  // 显示搜索结果页面
  showPage('search');
}

// 显示热门书籍页面
function showPopularBooks() {
  // 清空热门书籍网格
  popularBooksGrid.innerHTML = '';
  
  // 获取所有热门书籍
  const popularBooks = books.filter(book => book.isPopular);
  
  // 添加热门书籍到网格
  popularBooks.forEach(book => {
    const bookCard = createBookCard(book);
    popularBooksGrid.appendChild(bookCard);
  });
}

// 显示分类书籍
function showCategoryBooks(category) {
  // 清空搜索结果网格
  searchResultsGrid.innerHTML = '';
  
  // 获取分类书籍
  const categoryBooks = books.filter(book => book.category === category);
  
  // 更新结果计数
  resultsCount.textContent = `找到 ${categoryBooks.length} 个结果`;
  
  // 显示或隐藏无结果消息
  if (categoryBooks.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    
    // 添加结果到网格
    categoryBooks.forEach(book => {
      const bookCard = createBookCard(book);
      searchResultsGrid.appendChild(bookCard);
    });
  }
  
  // 显示搜索结果页面
  showPage('search');
}

// 显示页面
function showPage(page) {
  // 隐藏所有页面
  homePage.style.display = 'none';
  searchResults.style.display = 'none';
  popularBooksPage.style.display = 'none';
  categoriesPage.style.display = 'none';
  uploadPage.style.display = 'none';
  bookDetailPage.style.display = 'none';
  
  // 显示指定页面
  switch(page) {
    case 'home':
      homePage.style.display = 'block';
      currentPage = 'home';
      break;
    case 'search':
      searchResults.style.display = 'block';
      currentPage = 'search';
      break;
    case 'popular':
      showPopularBooks();
      popularBooksPage.style.display = 'block';
      currentPage = 'popular';
      break;
    case 'categories':
      categoriesPage.style.display = 'block';
      currentPage = 'categories';
      break;
    case 'upload':
      uploadPage.style.display = 'block';
      currentPage = 'upload';
      break;
    case 'detail':
      bookDetailPage.style.display = 'block';
      currentPage = 'detail';
      break;
  }
}

// 添加标签
function addTag(tagText) {
  if (tagText === '') return;
  
  if (selectedTags.length >= 10) {
    showError('最多只能添加10个标签');
    return;
  }
  
  if (selectedTags.includes(tagText)) {
    showError('该标签已存在');
    return;
  }
  
  selectedTags.push(tagText);
  renderTags();
}

// 移除标签
function removeTag(tagText) {
  selectedTags = selectedTags.filter(tag => tag !== tagText);
  renderTags();
}

// 渲染标签
function renderTags() {
  // 清除现有标签
  const existingTags = tagInput.querySelectorAll('.tag-item');
  existingTags.forEach(tag => tag.remove());
  
  // 添加新标签
  selectedTags.forEach(tag => {
    const tagElement = document.createElement('div');
    tagElement.className = 'tag-item';
    tagElement.innerHTML = `
      ${tag}
      <button type="button" class="tag-remove" data-tag="${tag}">&times;</button>
    `;
    tagInput.insertBefore(tagElement, tagInputField);
  });
  
  // 添加移除标签的事件监听
  tagInput.querySelectorAll('.tag-remove').forEach(button => {
    button.addEventListener('click', function() {
      removeTag(this.getAttribute('data-tag'));
    });
  });
}

// 处理图书上传
function handleBookUpload(e) {
  e.preventDefault();
  
  // 隐藏之前的消息
  hideMessages();
  
  // 验证表单
  if (!validateForm()) {
    return;
  }
  
  // 显示上传进度
  uploadProgress.style.display = 'block';
  
  // 模拟上传过程
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // 上传完成
      setTimeout(() => {
        completeUpload();
      }, 500);
    }
    
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
  }, 200);
}

// 验证表单
function validateForm() {
  const title = document.getElementById('bookTitle').value.trim();
  const author = document.getElementById('bookAuthor').value.trim();
  const description = document.getElementById('bookDescription').value.trim();
  
  if (title === '') {
    showError('请输入书名');
    return false;
  }
  
  if (author === '') {
    showError('请输入作者');
    return false;
  }
  
  if (description === '') {
    showError('请输入内容简介');
    return false;
  }
  
  if (description.length < 20) {
    showError('内容简介至少需要20个字符');
    return false;
  }
  
  return true;
}

// 完成上传
function completeUpload() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const publisher = document.getElementById('bookPublisher').value;
  const year = document.getElementById('bookYear').value;
  const description = document.getElementById('bookDescription').value;
  
  // 创建新图书对象
  const newBook = {
    id: books.length + 1,
    title: title,
    author: author,
    description: description,
    tags: [...selectedTags],
    cover: previewImage.src || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNlOGY0ZjgiLz48dGV4dCB4PSIxNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNGE3YjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4kTm9JbWFnZTwvdGV4dD48L3N2Zz4=',
    publisher: publisher,
    year: year,
    rating: 4.5,
    isPopular: false,
    category: "fiction"
  };
  
  // 添加到书籍列表
  books.push(newBook);
  
  // 重新渲染书籍列表
  renderBooks();
  
  // 显示成功消息
  successMessage.style.display = 'block';
  uploadProgress.style.display = 'none';
  
  // 重置表单
  setTimeout(() => {
    resetUploadForm();
    showPage('home');
    successMessage.style.display = 'none';
  }, 2000);
}

// 重置上传表单
function resetUploadForm() {
  bookUploadForm.reset();
  selectedTags = [];
  renderTags();
  imagePreview.style.display = 'none';
  hideMessages();
}

// 显示错误消息
function showError(message) {
  errorText.textContent = message;
  errorMessage.style.display = 'block';
}

// 隐藏所有消息
function hideMessages() {
  errorMessage.style.display = 'none';
  successMessage.style.display = 'none';
  uploadProgress.style.display = 'none';
}

// 显示图书详情
function showBookDetail(bookId) {
  const book = books.find(b => b.id === bookId);
  
  if (!book) return;
  
  bookDetail.innerHTML = `
    <div class="book-detail-header">
      <div class="book-cover">
        <img src="${book.cover}" alt="${book.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNlOGY0ZjgiLz48dGV4dCB4PSIxNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNGE3YjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4kTm9JbWFnZTwvdGV4dD48L3N2Zz4='">
      </div>
      <div class="book-info">
        <h1 class="book-title">${book.title}</h1>
        <p class="book-author">${book.author}</p>
        <div class="book-meta">
          <div class="book-meta-item">
            <i class="fas fa-star"></i>
            <span>评分: ${book.rating}/5.0</span>
          </div>
          <div class="book-meta-item">
            <i class="fas fa-building"></i>
            <span>出版社: ${book.publisher}</span>
          </div>
          <div class="book-meta-item">
            <i class="fas fa-calendar-alt"></i>
            <span>出版年份: ${book.year}</span>
          </div>
        </div>
        <div class="tags">
          ${book.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="book-description">
          <p>${book.description}</p>
        </div>
        <div class="book-actions">
          <button class="action-button primary">添加到书架</button>
          <button class="action-button">分享</button>
        </div>
      </div>
    </div>
    <div class="book-reviews">
      <h3>读者评论</h3>
      <div class="review-item">
        <div class="review-header">
          <span class="review-author">书友123</span>
          <span class="review-date">2023-05-10</span>
        </div>
        <div class="review-content">
          <p>这本书写得非常精彩，我一口气读完了。强烈推荐！</p>
        </div>
      </div>
      <div class="review-item">
        <div class="review-header">
          <span class="review-author">阅读爱好者</span>
          <span class="review-date">2023-04-22</span>
        </div>
        <div class="review-content">
          <p>作者的文笔优美，故事情节引人入胜，值得反复阅读。</p>
        </div>
      </div>
      <div class="review-form">
        <h4>发表评论</h4>
        <form>
          <div class="form-group">
            <textarea class="form-control" placeholder="写下您的评论..." rows="4"></textarea>
          </div>
          <button type="submit" class="submit-button">提交评论</button>
        </form>
      </div>
    </div>
  `;
  
  showPage('detail');
}
// 在 setupEventListeners 函数中添加新的事件监听
function setupEventListeners() {
  // ... 已有代码 ...
  
  // 导航链接
  document.getElementById('categoriesLink').addEventListener('click', function(e) {
    e.preventDefault();
    showPage('categories');
  });
  
  document.getElementById('popularLink').addEventListener('click', function(e) {
    e.preventDefault();
    showPage('popularTags');
  });
  
  document.getElementById('uploadLink').addEventListener('click', function(e) {
    e.preventDefault();
    showPage('upload');
  });
  
  // 返回按钮
  document.getElementById('backFromCategories').addEventListener('click', function() {
    showPage('home');
  });
  
  document.getElementById('backFromTags').addEventListener('click', function() {
    showPage('home');
  });
  
  document.getElementById('backFromUpload').addEventListener('click', function() {
    showPage('home');
  });
  
  // 分类卡片点击事件
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      showCategoryBooks(category);
    });
  });
  
  // 标签点击事件
  document.querySelectorAll('.tag-large').forEach(tag => {
    tag.addEventListener('click', function() {
      const tagName = this.getAttribute('data-tag');
      showBooksByTag(tagName);
    });
  });
  
  // ... 其他已有代码 ...
}

// 显示页面
function showPage(page) {
  // 隐藏所有页面
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('categoriesPage').style.display = 'none';
  document.getElementById('popularTagsPage').style.display = 'none';
  document.getElementById('uploadPage').style.display = 'none';
  
  // 显示指定页面
  switch(page) {
    case 'home':
      document.getElementById('home-page').style.display = 'block';
      break;
    case 'categories':
      document.getElementById('categoriesPage').style.display = 'block';
      break;
    case 'popularTags':
      document.getElementById('popularTagsPage').style.display = 'block';
      break;
    case 'upload':
      document.getElementById('uploadPage').style.display = 'block';
      break;
  }
}

// 显示分类书籍
function showCategoryBooks(category) {
  const categoryBooks = books.filter(book => book.category === category);
  displaySearchResults(categoryBooks, `分类: ${getCategoryName(category)}`);
}

// 根据标签显示书籍
function showBooksByTag(tagName) {
  const taggedBooks = books.filter(book => book.tags.includes(tagName));
  
  // 更新结果标题
  document.getElementById('tagResultsTitle').textContent = `标签: ${tagName}`;
  document.getElementById('tagResultsCount').textContent = `找到 ${taggedBooks.length} 个结果`;
  
  // 清空结果网格
  const tagResultsGrid = document.getElementById('tagResultsGrid');
  tagResultsGrid.innerHTML = '';
  
  // 显示或隐藏无结果消息
  const tagNoResults = document.getElementById('tagNoResults');
  if (taggedBooks.length === 0) {
    tagNoResults.style.display = 'block';
  } else {
    tagNoResults.style.display = 'none';
    
    // 添加结果到网格
    taggedBooks.forEach(book => {
      const bookCard = createBookCard(book);
      tagResultsGrid.appendChild(bookCard);
    });
  }
  
  // 显示搜索结果
  document.getElementById('tagResults').style.display = 'block';
}

// 获取分类名称
function getCategoryName(category) {
  const categoryNames = {
    'fiction': '文学小说',
    'scifi': '科幻奇幻',
    'mystery': '悬疑推理',
    'history': '历史传记',
    'science': '科普读物',
    'philosophy': '哲学心理'
  };
  return categoryNames[category] || category;
}

// 页面加载时检查登录状态
document.addEventListener('DOMContentLoaded', function() {
  const currentUser = localStorage.getItem('currentUser');
  if (!currentUser) {
    window.location.href = 'cover.html';
  } else {
    renderBooks();
    setupEventListeners();
  }
});