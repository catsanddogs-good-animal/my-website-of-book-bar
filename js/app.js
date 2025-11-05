// 封面页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取封面页面和按钮
    const coverPage = document.getElementById('cover-page');
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
    const guestButton = document.getElementById('guestButton');
    const mainWebsite = document.getElementById('main-website');
    const authModal = document.getElementById('authModal');
    const modalTitle = document.getElementById('modalTitle');
    const authSwitch = document.getElementById('switchAuth');
    const authForm = document.getElementById('authForm');
    const authSubmit = document.getElementById('authSubmit');
    const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
    const closeModal = document.getElementById('closeModal');
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    const logoutButton = document.getElementById('logoutButton');
    
    // 初始化页面状态
    let isLoginMode = false;
    
    // 注册按钮点击事件
    registerButton.addEventListener('click', function() {
        isLoginMode = false;
        modalTitle.textContent = '注册';
        authSubmit.textContent = '注册';
        authSwitch.textContent = '已有账号？';
        confirmPasswordGroup.style.display = 'block';
        authModal.style.display = 'flex';
    });
    
    // 登录按钮点击事件
    loginButton.addEventListener('click', function() {
        isLoginMode = true;
        modalTitle.textContent = '登录';
        authSubmit.textContent = '登录';
        authSwitch.textContent = '没有账号？';
        confirmPasswordGroup.style.display = 'none';
        authModal.style.display = 'flex';
    });
    
    // 访客按钮点击事件
    guestButton.addEventListener('click', function() {
        coverPage.classList.add('hidden');
        mainWebsite.style.display = 'block';
        // 设置访客用户信息
        userAvatar.textContent = 'G';
        userName.textContent = '访客';
        // 初始化书籍数据
        initializeBooks();
        // 初始化搜索功能
        setupSearchFunctionality();
    });
    
    // 切换登录/注册模式
    authSwitch.addEventListener('click', function(e) {
        e.preventDefault();
        isLoginMode = !isLoginMode;
        
        if (isLoginMode) {
            modalTitle.textContent = '登录';
            authSubmit.textContent = '登录';
            authSwitch.textContent = '没有账号？';
            confirmPasswordGroup.style.display = 'none';
        } else {
            modalTitle.textContent = '注册';
            authSubmit.textContent = '注册';
            authSwitch.textContent = '已有账号？';
            confirmPasswordGroup.style.display = 'block';
        }
    });
    
    // 关闭模态框
    closeModal.addEventListener('click', function() {
        authModal.style.display = 'none';
    });
    
    // 表单提交
    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // 简单验证
        if (!username || !email || !password) {
            alert('请填写所有必填字段');
            return;
        }
        
        if (!isLoginMode) {
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                alert('两次输入的密码不一致');
                return;
            }
        }
        
        // 模拟登录/注册成功
        userAvatar.textContent = username.charAt(0).toUpperCase();
        userName.textContent = username;
        
        // 关闭模态框和封面页面
        authModal.style.display = 'none';
        coverPage.classList.add('hidden');
        mainWebsite.style.display = 'block';
        
        alert(isLoginMode ? '登录成功！' : '注册成功！');
        
        // 初始化书籍数据
        initializeBooks();
        // 初始化搜索功能
        setupSearchFunctionality();
    });
    
    // 退出登录
    logoutButton.addEventListener('click', function() {
        if (confirm('确定要退出登录吗？')) {
            coverPage.classList.remove('hidden');
            mainWebsite.style.display = 'none';
        }
    });
    
    // 页面导航功能
    const navLinks = document.querySelectorAll('.nav-link, .back-button, .upload-button, .cancel-button');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            if (targetPage) {
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                
                document.getElementById(targetPage).classList.add('active');
                
                // 如果切换到热门书籍页面，重新渲染
                if (targetPage === 'popular-page') {
                    renderPopularBooks();
                }
            }
        });
    });
    
    // 初始化标签页面
    initializeTags();
    
    // 首页标签点击事件
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tag') && e.target.hasAttribute('data-tag')) {
            const tag = e.target.getAttribute('data-tag');
            document.getElementById('searchInput').value = tag;
            performSearch();
        }
    });

    // 为书籍卡片添加点击事件
    document.addEventListener('click', function(e) {
        // 点击书籍卡片查看详情
        if (e.target.closest('.book-card')) {
            const bookCard = e.target.closest('.book-card');
            const bookId = parseInt(bookCard.getAttribute('data-id') || '1');
            showBookDetail(bookId);
        }
        
        // 点击查看详情按钮
        if (e.target.classList.contains('view-detail-btn')) {
            const bookId = parseInt(e.target.getAttribute('data-id'));
            showBookDetail(bookId);
        }
    });
    
    // 设置返回按钮
    document.getElementById('backFromDetail').addEventListener('click', function() {
        const previousPage = localStorage.getItem('previousPage') || 'home-page';
        showPage(previousPage);
    });
});

// 初始化书籍数据
function initializeBooks() {
    const books = [
        {
            id: 1,
            title: '三体',
            author: '刘慈欣',
            description: '《三体》是刘慈欣创作的系列长篇科幻小说，讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。小说以气势宏大的叙事和深刻的哲学思考著称，是中国科幻文学的里程碑之作。其第一部经过刘宇昆翻译后获得了第73届雨果奖最佳长篇小说奖。',
            tags: ['科幻', '小说', '中国文学'],
            image: 'images/three-body.jpg',
            publisher: '重庆出版社',
            year: 2008,
            rating: 4.8,
            reviews: [
                { user: '科幻迷', rating: 5, comment: '震撼人心的科幻巨作！', date: '2023-01-15' },
                { user: '书虫', rating: 4, comment: '想象力丰富，但有些部分比较晦涩', date: '2023-02-20' }
            ]
        },
        {
            id: 2,
            title: '活着',
            author: '余华',
            description: '《活着》是作家余华的代表作之一，讲述了在大时代背景下，随着内战、三反五反、大跃进、文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。',
            tags: ['文学', '中国文学', '经典'],
            image: 'images/to-live.jpg',
            publisher: '作家出版社',
            year: 1993,
            rating: 4.7,
            reviews: [
                { user: '文学爱好者', rating: 5, comment: '感人至深，让人思考生命的意义', date: '2023-03-10' }
            ]
        },
        {
            id: 3,
            title: '百年孤独',
            author: '加西亚·马尔克斯',
            description: '《百年孤独》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是魔幻现实主义的代表作，描写了布恩迪亚家族七代人的传奇故事。',
            tags: ['文学', '魔幻现实主义', '经典'],
            image: 'images/hundred-loneliness.jpg',
            publisher: '南海出版公司',
            year: 1967,
            rating: 4.9,
            reviews: [
                { user: '文学评论家', rating: 5, comment: '魔幻现实主义的巅峰之作', date: '2023-04-05' }
            ]
        },
        {
            id: 4,
            title: '小王子',
            author: '安托万·德·圣-埃克苏佩里',
            description: '《小王子》是法国作家安托万·德·圣-埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。',
            tags: ['童话', '经典', '法国文学'],
            image: 'images/the-little-prince.jpg',
            publisher: '人民文学出版社',
            year: 1943,
            rating: 4.8,
            reviews: []
        },
        {
            id: 5,
            title: '1984',
            author: '乔治·奥威尔',
            description: '《1984》是英国作家乔治·奥威尔创作的一部反乌托邦小说，刻画了一个令人感到窒息的恐怖世界，在假想的未来社会中，独裁者以追逐权力为最终目标，人性被强权彻底扼杀，自由被彻底剥夺，思想受到严酷钳制，人民的生活陷入了极度贫困，下层人民的人生变成了单调乏味的循环。',
            tags: ['反乌托邦', '政治小说', '经典'],
            image: 'images/1984.jpg',
            publisher: '辽宁人民出版社',
            year: 1949,
            rating: 4.7,
            reviews: []
        },
        {
            id: 6,
            title: '红楼梦',
            author: '曹雪芹',
            description: '《红楼梦》是中国古典四大名著之首，清代作家曹雪芹创作的章回体长篇小说，以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉、林黛玉、薛宝钗的爱情婚姻故事为主线，描绘了一批举止见识出于须眉之上的闺阁佳人的人生百态。',
            tags: ['古典文学', '四大名著', '经典'],
            image: 'images/reddream.jpg',
            publisher: '人民文学出版社',
            year: 1791,
            rating: 4.9,
            reviews: []
        },
        {
            id: 7,
            title: '追风筝的人',
            author: '卡勒德·胡赛尼',
            description: '《追风筝的人》是美籍阿富汗作家卡勒德·胡赛尼的第一部长篇小说，讲述了一个关于友谊、背叛和救赎的故事。小说以阿富汗的历史变迁为背景，情感真挚动人。',
            tags: ['文学', '友谊', '救赎', '外国文学'],
            image: 'images/kite-runner.jpg',
            publisher: '上海人民出版社',
            year: 2003,
            rating: 4.6,
            reviews: []
        },
        {
            id: 8,
            title: '人类简史',
            author: '尤瓦尔·赫拉利',
            description: '《人类简史》是以色列历史学家尤瓦尔·赫拉利创作的历史类著作，讲述了人类从石器时代至21世纪的演化与发展史。',
            tags: ['历史', '科普', '社会学'],
            image: 'images/sapiens.jpg',
            publisher: '中信出版社',
            year: 2014,
            rating: 4.7,
            reviews: []
        },
        {
            id: 9,
            title: '白夜行',
            author: '东野圭吾',
            description: '《白夜行》是日本作家东野圭吾创作的长篇小说，讲述了一对有着悲惨命运的少年少女，19年来以相当残酷、孤独、单纯的灵魂相爱却无法相守的故事。',
            tags: ['悬疑', '推理', '日本文学'],
            image: 'images/white-night.jpg',
            publisher: '南海出版公司',
            year: 1999,
            rating: 4.8,
            reviews: []
        },
        {
            id: 10,
            title: '沉思录',
            author: '马可·奥勒留',
            description: '《沉思录》是古罗马皇帝马可·奥勒留所著的哲学随笔集，是斯多葛派哲学的重要典籍。书中阐述了作者对自然、人生、社会的深刻思考。',
            tags: ['哲学', '古典', '斯多葛', '人生思考'],
            image: 'images/meditations.jpg',
            publisher: '中央编译出版社',
            year: 180,
            rating: 4.5,
            reviews: []
        }
    ];
    
    // 渲染书籍到首页
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = '';
    
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.setAttribute('data-id', book.id);
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNlOGY0ZjgiLz48dGV4dCB4PSIxNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNGE3YjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4kTm9JbWFnZTwvdGV4dD48L3N2Zz4='">
            <h3>${book.title}</h3>
            <p>${book.description.substring(0, 100)}...</p>
            <div class="tags">
                ${book.tags.map(tag => `<span class="tag" data-tag="${tag}">${tag}</span>`).join('')}
            </div>
            <button class="button view-detail-btn" data-id="${book.id}">查看详情</button>
        `;
        booksGrid.appendChild(bookCard);
    });
    
    // 渲染热门书籍页面
    renderPopularBooks();
}

// 渲染热门书籍页面
function renderPopularBooks() {
    const popularBooks = [
        {
            id: 1,
            title: '三体',
            author: '刘慈欣',
            description: '《三体》是刘慈欣创作的系列长篇科幻小说，讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。',
            tags: ['科幻', '小说', '中国文学'],
            image: 'images/three-body.jpg'
        },
        {
            id: 2,
            title: '活着',
            author: '余华',
            description: '《活着》是作家余华的代表作之一，讲述了在大时代背景下，随着内战、三反五反、大跃进、文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。',
            tags: ['文学', '中国文学', '经典'],
            image: 'images/to-live.jpg'
        },
        {
            id: 3,
            title: '百年孤独',
            author: '加西亚·马尔克斯',
            description: '《百年孤独》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是魔幻现实主义的代表作，描写了布恩迪亚家族七代人的传奇故事。',
            tags: ['文学', '魔幻现实主义', '经典'],
            image: 'images/hundred-loneliness.jpg'
        },
        {
            id: 4,
            title: '小王子',
            author: '安托万·德·圣-埃克苏佩里',
            description: '《小王子》是法国作家安托万·德·圣-埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。',
            tags: ['童话', '经典', '法国文学'],
            image: 'images/the-little-prince.jpg'
        },
        {
            id: 5,
            title: '红楼梦',
            author: '曹雪芹',
            description: '《红楼梦》是中国古典四大名著之首，清代作家曹雪芹创作的章回体长篇小说，以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉、林黛玉、薛宝钗的爱情婚姻故事为主线，描绘了一批举止见识出于须眉之上的闺阁佳人的人生百态。',
            tags: ['古典文学', '四大名著', '经典'],
            image: 'images/reddream.jpg'
        },
        {
            id: 6,
            title: '人类简史',
            author: '尤瓦尔·赫拉利',
            description: '《人类简史》是以色列历史学家尤瓦尔·赫拉利创作的历史类著作，讲述了人类从石器时代至21世纪的演化与发展史。',
            tags: ['历史', '科普', '社会学'],
            image: 'images/sapiens.jpg'
        }
    ];
    
    const popularBooksGrid = document.getElementById('popularBooksGrid');
    popularBooksGrid.innerHTML = '';
    
    popularBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.setAttribute('data-id', book.id);
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNlOGY0ZjgiLz48dGV4dCB4PSIxNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNGE3YjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4kTm9JbWFnZTwvdGV4dD48L3N2Zz4='">
            <h3>${book.title}</h3>
            <p>${book.description.substring(0, 100)}...</p>
            <div class="tags">
                ${book.tags.map(tag => `<span class="tag" data-tag="${tag}">${tag}</span>`).join('')}
            </div>
            <button class="button view-detail-btn" data-id="${book.id}">查看详情</button>
        `;
        popularBooksGrid.appendChild(bookCard);
    });
}

// 完善搜索功能
function setupSearchFunctionality() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// 执行搜索
function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    
    if (query === '') {
        alert('请输入搜索关键词');
        return;
    }
    
    // 搜索书籍
    const books = getAllBooks();
    const results = books.filter(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.tags.some(tag => tag.toLowerCase().includes(query)) ||
        book.description.toLowerCase().includes(query)
    );
    
    // 显示搜索结果
    displaySearchResults(results, query);
}

// 显示搜索结果
function displaySearchResults(results, query) {
    const searchResultsGrid = document.getElementById('searchResultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    
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
    showPage('search-results-page');
}

// 获取所有书籍数据（包含完整信息）
function getAllBooks() {
    return [
        {
            id: 1,
            title: '三体',
            author: '刘慈欣',
            description: '《三体》是刘慈欣创作的系列长篇科幻小说，讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。小说以气势宏大的叙事和深刻的哲学思考著称，是中国科幻文学的里程碑之作。其第一部经过刘宇昆翻译后获得了第73届雨果奖最佳长篇小说奖。',
            tags: ['科幻', '小说', '中国文学', '雨果奖', '刘慈欣'],
            image: 'images/three-body.jpg',
            publisher: '重庆出版社',
            year: 2008,
            rating: 4.8,
            reviews: [
                { 
                    user: '科幻迷', 
                    rating: 5, 
                    comment: '这本书彻底改变了我对科幻小说的认知！宏大的宇宙观和深刻的人文思考完美结合，让人读后久久不能平静。', 
                    date: '2023-01-15' 
                },
                { 
                    user: '书虫小王', 
                    rating: 4, 
                    comment: '想象力非常丰富，黑暗森林理论令人震撼。不过有些科学概念对普通读者来说可能比较难懂。', 
                    date: '2023-02-20' 
                },
                { 
                    user: '星空探索者', 
                    rating: 5, 
                    comment: '中国科幻的巅峰之作！不仅故事精彩，更引发了对人类文明和宇宙道德的深刻思考。', 
                    date: '2023-03-10' 
                }
            ]
        },
        {
            id: 2,
            title: '活着',
            author: '余华',
            description: '《活着》是作家余华的代表作之一，讲述了在大时代背景下，随着内战、三反五反、大跃进、文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。小说以朴实的语言展现了生命的坚韧与尊严。',
            tags: ['文学', '中国文学', '经典', '人生', '余华'],
            image: 'images/to-live.jpg',
            publisher: '作家出版社',
            year: 1993,
            rating: 4.7,
            reviews: [
                { 
                    user: '文学爱好者', 
                    rating: 5, 
                    comment: '感人至深，让人思考生命的意义。读完后久久不能平静，福贵的一生让人唏嘘不已。', 
                    date: '2023-03-10' 
                },
                { 
                    user: '沉思者', 
                    rating: 4, 
                    comment: '虽然故事很悲惨，但从中能感受到生命的顽强。余华的文字朴实却有力量。', 
                    date: '2023-04-15' 
                }
            ]
        },
        {
            id: 3,
            title: '百年孤独',
            author: '加西亚·马尔克斯',
            description: '《百年孤独》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，是魔幻现实主义的代表作，描写了布恩迪亚家族七代人的传奇故事。小说融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界。',
            tags: ['文学', '魔幻现实主义', '经典', '诺贝尔文学奖', '拉美文学'],
            image: 'images/hundred-loneliness.jpg',
            publisher: '南海出版公司',
            year: 1967,
            rating: 4.9,
            reviews: [
                { 
                    user: '文学评论家', 
                    rating: 5, 
                    comment: '魔幻现实主义的巅峰之作！马尔克斯用他神奇的笔触创造了一个既真实又梦幻的世界。', 
                    date: '2023-04-05' 
                },
                { 
                    user: '书海漫游', 
                    rating: 5, 
                    comment: '读了三遍，每次都有新的感悟。布恩迪亚家族的命运就像一场华丽的梦境。', 
                    date: '2023-05-20' 
                }
            ]
        },
        {
            id: 4,
            title: '小王子',
            author: '安托万·德·圣-埃克苏佩里',
            description: '《小王子》是法国作家安托万·德·圣-埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目和愚妄，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。',
            tags: ['童话', '经典', '法国文学', '哲理', '儿童文学'],
            image: 'images/the-little-prince.jpg',
            publisher: '人民文学出版社',
            year: 1943,
            rating: 4.8,
            reviews: [
                { 
                    user: '心灵读者', 
                    rating: 5, 
                    comment: '一本写给大人的童话书。每次读都有新的感悟，关于爱、责任和成长。', 
                    date: '2023-06-01' 
                }
            ]
        },
        {
            id: 5,
            title: '1984',
            author: '乔治·奥威尔',
            description: '《1984》是英国作家乔治·奥威尔创作的一部反乌托邦小说，刻画了一个令人感到窒息的恐怖世界，在假想的未来社会中，独裁者以追逐权力为最终目标，人性被强权彻底扼杀，自由被彻底剥夺，思想受到严酷钳制，人民的生活陷入了极度贫困，下层人民的人生变成了单调乏味的循环。这部小说与英国作家赫胥黎的《美丽新世界》、俄国作家扎米亚金的《我们》并称反乌托邦的三部代表作。',
            tags: ['反乌托邦', '政治小说', '经典', '乔治·奥威尔', '英国文学'],
            image: 'images/1984.jpg',
            publisher: '辽宁人民出版社',
            year: 1949,
            rating: 4.7,
            reviews: []
        },
        {
            id: 6,
            title: '红楼梦',
            author: '曹雪芹',
            description: '《红楼梦》是中国古典四大名著之首，清代作家曹雪芹创作的章回体长篇小说，又名《石头记》。小说以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉、林黛玉、薛宝钗的爱情婚姻故事为主线，描绘了一批举止见识出于须眉之上的闺阁佳人的人生百态，展现了真正的人性美和悲剧美，可以说是一部从各个角度展现女性美以及中国古代社会世态百相的史诗性著作。',
            tags: ['古典文学', '四大名著', '经典', '曹雪芹', '中国古典'],
            image: 'images/reddream.jpg',
            publisher: '人民文学出版社',
            year: 1791,
            rating: 4.9,
            reviews: [
                { 
                    user: '红学爱好者', 
                    rating: 5, 
                    comment: '中国古典小说的巅峰！每次重读都能发现新的细节，人物塑造栩栩如生。', 
                    date: '2023-07-10' 
                }
            ]
        },
        {
            id: 7,
            title: '追风筝的人',
            author: '卡勒德·胡赛尼',
            description: '《追风筝的人》是美籍阿富汗作家卡勒德·胡赛尼的第一部长篇小说，讲述了一个关于友谊、背叛和救赎的故事。小说以阿富汗的历史变迁为背景，情感真挚动人。全书围绕风筝与阿富汗的两个少年之间展开，一个富家少年与家中仆人关于风筝的故事，关于人性的背叛与救赎。',
            tags: ['文学', '友谊', '救赎', '外国文学', '卡勒德·胡赛尼'],
            image: 'images/kite-runner.jpg',
            publisher: '上海人民出版社',
            year: 2003,
            rating: 4.6,
            reviews: []
        },
        {
            id: 8,
            title: '人类简史',
            author: '尤瓦尔·赫拉利',
            description: '《人类简史：从动物到上帝》是以色列历史学家尤瓦尔·赫拉利创作的历史类著作，讲述了从十万年前有生命迹象开始到21世纪资本、科技交织的人类发展史。该书将人类历史分为四个阶段：认知革命、农业革命、人类的融合统一与科学革命，理清影响人类发展的重大脉络。',
            tags: ['历史', '科普', '人类学', '社会学', '尤瓦尔·赫拉利'],
            image: 'images/sapiens.jpg',
            publisher: '中信出版社',
            year: 2014,
            rating: 4.7,
            reviews: []
        },
        {
            id: 9,
            title: '白夜行',
            author: '东野圭吾',
            description: '《白夜行》是日本作家东野圭吾创作的长篇小说，讲述了一对有着悲惨命运的少年少女，19年来以相当残酷、孤独、单纯的灵魂相爱却无法相守的故事。小说将无望却坚守的凄凉爱情和执著而缜密的冷静推理完美结合，被众多东饭视作东野圭吾作品中的无冕之王。',
            tags: ['悬疑', '推理', '日本文学', '东野圭吾', '小说'],
            image: 'images/white-night.jpg',
            publisher: '南海出版公司',
            year: 1999,
            rating: 4.8,
            reviews: []
        },
        {
            id: 10,
            title: '沉思录',
            author: '马可·奥勒留',
            description: '《沉思录》是古罗马皇帝马可·奥勒留所著的哲学随笔集，是斯多葛派哲学的重要典籍。书中阐述了作者对自然、人生、社会的深刻思考。马可·奥勒留在书中阐述了灵魂与死亡的关系，解析了个人的德行、个人的解脱以及个人对社会的责任，要求常常自省以达到内心的平静，要摒弃一切无用和琐屑的思想、正直地思考。',
            tags: ['哲学', '古典', '斯多葛', '人生思考', '马可·奥勒留'],
            image: 'images/meditations.jpg',
            publisher: '中央编译出版社',
            year: 180,
            rating: 4.5,
            reviews: []
        }
    ];
}

// 创建书籍卡片
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.setAttribute('data-id', book.id);
    bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNlOGY0ZjgiLz48dGV4dCB4PSIxNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNGE3YjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4kTm9JbWFnZTwvdGV4dD48L3N2Zz4='">
        <h3>${book.title}</h3>
        <p>${book.description.substring(0, 100)}...</p>
        <div class="tags">
            ${book.tags.map(tag => `<span class="tag" data-tag="${tag}">${tag}</span>`).join('')}
        </div>
        <button class="button view-detail-btn" data-id="${book.id}">查看详情</button>
    `;
    return bookCard;
}

// 显示图书详情
function showBookDetail(bookId) {
    const books = getAllBooks();
    const book = books.find(b => b.id === bookId);
    
    if (!book) {
        alert('未找到该图书信息');
        return;
    }
    
    const bookDetailContainer = document.getElementById('bookDetailContainer');
    bookDetailContainer.innerHTML = createBookDetailHTML(book);
    
    // 设置评分星星的交互
    setupRatingStars();
    
    // 设置评论表单提交
    setupReviewForm(bookId);
    
    // 设置返回按钮
    document.getElementById('backFromDetail').addEventListener('click', function() {
        // 返回到之前的页面
        const previousPage = localStorage.getItem('previousPage') || 'home-page';
        showPage(previousPage);
    });
    
    // 显示详情页面
    showPage('book-detail-page');
}

// 创建图书详情HTML
function createBookDetailHTML(book) {
    const averageRating = book.reviews.length > 0 
        ? (book.reviews.reduce((sum, review) => sum + review.rating, 0) / book.reviews.length).toFixed(1)
        : '暂无评分';
    
    return `
        <div class="book-detail-header">
            <div class="book-cover-large">
                <img src="${book.image}" alt="${book.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNlOGY0ZjgiLz48dGV4dCB4PSIxNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNGE3YjlkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4kTm9JbWFnZTwvdGV4dD48L3N2Zz4='">
            </div>
            <div class="book-info">
                <h1 class="book-title-large">${book.title}</h1>
                <p class="book-author-large">${book.author}</p>
                <div class="book-meta">
                    <div class="book-meta-item">
                        <i class="fas fa-star"></i>
                        <span>评分: ${averageRating}/5.0</span>
                    </div>
                    <div class="book-meta-item">
                        <i class="fas fa-building"></i>
                        <span>${book.publisher}</span>
                    </div>
                    <div class="book-meta-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${book.year}年</span>
                    </div>
                    <div class="book-meta-item">
                        <i class="fas fa-comment"></i>
                        <span>${book.reviews.length} 条评论</span>
                    </div>
                </div>
                <div class="tags">
                    ${book.tags.map(tag => `<span class="tag" data-tag="${tag}">${tag}</span>`).join('')}
                </div>
                <div class="book-description">
                    <p>${book.description}</p>
                </div>
                <div class="book-actions">
                    <button class="action-button primary" id="addToBookshelf">
                        <i class="fas fa-plus"></i>添加到书架
                    </button>
                    <button class="action-button" id="shareBook">
                        <i class="fas fa-share-alt"></i>分享图书
                    </button>
                </div>
            </div>
        </div>
        <div class="book-reviews">
            <div class="rating-section">
                <div class="rating-overview">
                    <div class="average-rating">
                        <div class="rating-score">${averageRating}</div>
                        <div class="rating-stars">
                            ${generateStars(averageRating)}
                        </div>
                        <div>${book.reviews.length} 条评论</div>
                    </div>
                    <div class="user-rating">
                        <h4>我的评价</h4>
                        <div class="rating-input">
                            <label>评分:</label>
                            <div class="rating-stars" id="userRatingStars">
                                ${generateEditableStars(0)}
                            </div>
                            <span id="userRatingText">点击星星评分</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="reviews-list">
                <h3>读者评论 (${book.reviews.length})</h3>
                ${book.reviews.length > 0 ? 
                    book.reviews.map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <span class="review-author">${review.user}</span>
                                <div>
                                    <span class="review-rating">${generateStars(review.rating)}</span>
                                    <span class="review-date">${review.date}</span>
                                </div>
                            </div>
                            <div class="review-content">
                                <p>${review.comment}</p>
                            </div>
                        </div>
                    `).join('') : 
                    '<div class="no-results" style="display: block; grid-column: 1 / -1;">' +
                        '<i class="fas fa-comment-slash"></i>' +
                        '<p>暂无评论，快来发表第一条评论吧！</p>' +
                    '</div>'
                }
            </div>
            
            <div class="review-form">
                <h4>发表我的评论</h4>
                <form id="reviewForm">
                    <div class="form-group">
                        <div class="rating-input">
                            <label>我的评分:</label>
                            <div class="rating-stars" id="reviewRatingStars">
                                ${generateEditableStars(0)}
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="reviewComment" placeholder="分享您对这本书的看法...（不少于20字）" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-review">
                        <i class="fas fa-paper-plane"></i>提交评论
                    </button>
                </form>
            </div>
        </div>
    `;
}

// 生成星星HTML
function generateStars(rating) {
    if (rating === '暂无评分') {
        return '<span style="color: #6c757d; font-size: 14px;">暂无评分</span>';
    }
    
    const numRating = parseFloat(rating);
    const fullStars = Math.floor(numRating);
    const halfStar = numRating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star star active"></i>';
        } else if (i === fullStars + 1 && halfStar) {
            starsHTML += '<i class="fas fa-star-half-alt star active"></i>';
        } else {
            starsHTML += '<i class="far fa-star star"></i>';
        }
    }
    
    return starsHTML;
}

// 生成可编辑的星星
function generateEditableStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        const isActive = i <= rating;
        starsHTML += `<i class="${isActive ? 'fas' : 'far'} fa-star star" data-rating="${i}"></i>`;
    }
    return starsHTML;
}

// 设置评分星星交互
function setupRatingStars() {
    const starContainers = document.querySelectorAll('#userRatingStars, #reviewRatingStars');
    
    starContainers.forEach(container => {
        const stars = container.querySelectorAll('.star[data-rating]');
        let currentRating = 0;
        
        stars.forEach(star => {
            star.addEventListener('mouseover', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                highlightStars(stars, rating);
            });
            
            star.addEventListener('click', function() {
                currentRating = parseInt(this.getAttribute('data-rating'));
                highlightStars(stars, currentRating);
                if (container.id === 'userRatingStars') {
                    updateRatingText(currentRating);
                }
            });
        });
        
        container.addEventListener('mouseleave', function() {
            highlightStars(stars, currentRating);
        });
    });
}

// 高亮星星
function highlightStars(stars, rating) {
    stars.forEach(star => {
        const starRating = parseInt(star.getAttribute('data-rating'));
        if (starRating <= rating) {
            star.classList.add('active');
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('active');
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

// 更新评分文本
function updateRatingText(rating) {
    const ratingText = document.getElementById('userRatingText');
    if (ratingText) {
        const ratingTexts = ['点击星星评分', '很差', '较差', '一般', '推荐', '力荐'];
        ratingText.textContent = ratingTexts[rating] || `已评分: ${rating} 星`;
        ratingText.style.color = rating > 0 ? '#2c3e50' : '#6c757d';
        ratingText.style.fontWeight = rating > 0 ? '600' : 'normal';
    }
}

// 设置评论表单
function setupReviewForm(bookId) {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const rating = getSelectedRating();
            const comment = document.getElementById('reviewComment').value.trim();
            
            if (rating === 0) {
                alert('请选择评分');
                return;
            }
            
            if (comment.length < 20) {
                alert('评论内容至少需要20个字');
                return;
            }
            
            // 模拟提交评论
            const newReview = {
                user: '当前用户',
                rating: rating,
                comment: comment,
                date: new Date().toISOString().split('T')[0]
            };
            
            // 在实际应用中，这里应该发送到服务器
            alert('评论提交成功！感谢您的分享。');
            reviewForm.reset();
            resetStars();
            
            // 模拟刷新评论列表
            setTimeout(() => {
                showBookDetail(bookId);
            }, 1000);
        });
    }
}

// 获取选中的评分
function getSelectedRating() {
    const activeStars = document.querySelectorAll('#reviewRatingStars .star.active');
    return activeStars.length;
}

// 重置星星
function resetStars() {
    const stars = document.querySelectorAll('#reviewRatingStars .star[data-rating]');
    stars.forEach(star => {
        star.classList.remove('active');
        star.classList.remove('fas');
        star.classList.add('far');
    });
}

// 显示页面
function showPage(pageId) {
    // 保存当前页面状态
    const currentPage = document.querySelector('.page.active');
    if (currentPage && currentPage.id !== pageId) {
        localStorage.setItem('previousPage', currentPage.id);
    }
    
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById(pageId).classList.add('active');
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 初始化标签页面
function initializeTags() {
    const tags = [
        { name: '科幻', count: 3, icon: 'fas fa-rocket' },
        { name: '文学', count: 6, icon: 'fas fa-book' },
        { name: '悬疑', count: 1, icon: 'fas fa-search' },
        { name: '历史', count: 1, icon: 'fas fa-landmark' },
        { name: '心理学', count: 0, icon: 'fas fa-brain' },
        { name: '哲学', count: 1, icon: 'fas fa-atom' },
        { name: '传记', count: 0, icon: 'fas fa-user' },
        { name: '经典', count: 6, icon: 'fas fa-crown' },
        { name: '当代文学', count: 1, icon: 'fas fa-pen-fancy' },
        { name: '推理', count: 1, icon: 'fas fa-puzzle-piece' },
        { name: '中国文学', count: 3, icon: 'fas fa-feather' },
        { name: '外国文学', count: 2, icon: 'fas fa-globe' }
    ];
    
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = '';
    
    tags.forEach(tag => {
        const tagCard = document.createElement('div');
        tagCard.className = 'tag-card';
        tagCard.setAttribute('data-tag', tag.name);
        tagCard.innerHTML = `
            <div class="tag-icon">
                <i class="${tag.icon}"></i>
            </div>
            <h3>${tag.name}</h3>
            <p class="tag-count">${tag.count} 本书</p>
        `;
        
        // 添加点击事件
        tagCard.addEventListener('click', function() {
            const tagName = this.getAttribute('data-tag');
            document.getElementById('searchInput').value = tagName;
            performSearch();
        });
        
        tagsContainer.appendChild(tagCard);
    });
}