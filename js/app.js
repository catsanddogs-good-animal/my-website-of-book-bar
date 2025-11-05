    // 初始化书籍数据
    function initializeBooks() {
      const books = [
        {
          id: 1,
          title: '三体',
          author: '刘慈欣',
          description: '《三体》是刘慈欣创作的系列长篇科幻小说，讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。小说以气势宏大的叙事和深刻的哲学思考著称，是中国科幻文学的里程碑之作。',
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
          tags: ['历史', '科普', '人类学', '社会学'],
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
      
      // 更新结果计数
      resultsCount.textContent = `找到 ${results.length} 个结果 (关键词: "${query}")`;
      
      // 清空结果网格
      searchResultsGrid.innerHTML = '';
      
      // 显示或隐藏无结果消息
      const noResults = document.getElementById('noResults');
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
    
    // 获取所有书籍数据
    function getAllBooks() {
      return [
        {
          id: 1,
          title: '三体',
          author: '刘慈欣',
          description: '《三体》是刘慈欣创作的系列长篇科幻小说，讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。小说以气势宏大的叙事和深刻的哲学思考著称，是中国科幻文学的里程碑之作。',
          tags: ['科幻', '小说', '中国文学', '雨果奖'],
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
          tags: ['文学', '中国文学', '经典', '人生'],
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
          tags: ['历史', '科普', '人类学', '社会学'],
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
      
      if (!book) return;
      
      const bookDetailContainer = document.getElementById('bookDetailContainer');
      bookDetailContainer.innerHTML = createBookDetailHTML(book);
      
      // 设置评分星星的交互
      setupRatingStars();
      
      // 设置评论表单提交
      setupReviewForm(bookId);
      
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
                <span>出版社: ${book.publisher}</span>
              </div>
              <div class="book-meta-item">
                <i class="fas fa-calendar-alt"></i>
                <span>出版年份: ${book.year}</span>
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
              <button class="action-button primary" id="addToBookshelf">添加到书架</button>
              <button class="action-button" id="shareBook">分享</button>
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
            </div>
            
            <div class="user-rating">
              <h4>我的评分</h4>
              <div class="rating-input">
                <label>评分:</label>
                <div class="rating-stars" id="userRatingStars">
                  ${generateEditableStars(0)}
                </div>
                <span id="userRatingText">尚未评分</span>
              </div>
            </div>
          </div>
          
          <div class="reviews-list">
            <h3>读者评论</h3>
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
              '<p>暂无评论，快来发表第一条评论吧！</p>'
            }
          </div>
          
          <div class="review-form">
            <h4>发表评论</h4>
            <form id="reviewForm">
              <div class="form-group">
                <div class="rating-input">
                  <label>评分:</label>
                  <div class="rating-stars" id="reviewRatingStars">
                    ${generateEditableStars(0)}
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea class="form-control" id="reviewComment" placeholder="写下您的评论..." rows="4" required></textarea>
              </div>
              <button type="submit" class="submit-review">提交评论</button>
            </form>
          </div>
        </div>
      `;
    }
    
    // 生成星星HTML
    function generateStars(rating) {
      if (rating === '暂无评分') return '<span>暂无评分</span>';
      
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
        starsHTML += `<i class="fas fa-star star" data-rating="${i}"></i>`;
      }
      return starsHTML;
    }
    
    // 设置评分星星交互
    function setupRatingStars() {
      const starContainers = document.querySelectorAll('.rating-stars:not(.user-rating .rating-stars)');
      
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
            updateRatingText(currentRating);
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
        ratingText.textContent = rating > 0 ? `已评分: ${rating} 星` : '尚未评分';
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
          
          if (comment === '') {
            alert('请输入评论内容');
            return;
          }
          
          // 这里应该发送到服务器，这里只是模拟
          const newReview = {
            user: '当前用户',
            rating: rating,
            comment: comment,
            date: new Date().toISOString().split('T')[0]
          };
          
          // 在实际应用中，这里应该更新服务器数据
          alert('评论提交成功！');
          reviewForm.reset();
          resetStars();
        });
      }
    }
    
    // 获取选中的评分
    function getSelectedRating() {
      const activeStars = document.querySelectorAll('.rating-stars .star.active');
      return activeStars.length;
    }
    
    // 重置星星
    function resetStars() {
      const stars = document.querySelectorAll('.rating-stars .star[data-rating]');
      stars.forEach(star => {
        star.classList.remove('active');
        star.classList.remove('fas');
        star.classList.add('far');
      });
      updateRatingText(0);
    }
    
    // 显示页面
    function showPage(pageId) {
      // 隐藏所有页面
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      
      // 显示目标页面
      document.getElementById(pageId).classList.add('active');
    }
          // 初始化搜索功能
      setupSearchFunctionality();
      
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
        
        // 点击标签搜索
        if (e.target.classList.contains('tag') && e.target.hasAttribute('data-tag')) {
          const tag = e.target.getAttribute('data-tag');
          document.getElementById('searchInput').value = tag;
          performSearch();
        }
      });
      
      // 设置返回按钮
      document.getElementById('backFromDetail').addEventListener('click', function() {
        const previousPage = localStorage.getItem('previousPage') || 'home-page';
        showPage(previousPage);
      });