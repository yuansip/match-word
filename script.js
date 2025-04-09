// 单词库（按教育阶段分类）
const wordLibraries = {
    primary: {
        1: [
            { english: 'apple', chinese: '苹果' },
            { english: 'banana', chinese: '香蕉' },
            { english: 'cat', chinese: '猫' },
            { english: 'dog', chinese: '狗' },
            { english: 'book', chinese: '书本' },
            { english: 'pen', chinese: '钢笔' },
            { english: 'sun', chinese: '太阳' },
            { english: 'moon', chinese: '月亮' }
        ],
        2: [
            { english: 'orange', chinese: '橙子' },
            { english: 'grape', chinese: '葡萄' },
            { english: 'bird', chinese: '鸟' },
            { english: 'fish', chinese: '鱼' },
            { english: 'pencil', chinese: '铅笔' },
            { english: 'paper', chinese: '纸张' },
            { english: 'star', chinese: '星星' },
            { english: 'cloud', chinese: '云' }
        ],
        3: [
            { english: 'computer', chinese: '电脑' },
            { english: 'phone', chinese: '电话' },
            { english: 'table', chinese: '桌子' },
            { english: 'chair', chinese: '椅子' },
            { english: 'window', chinese: '窗户' },
            { english: 'door', chinese: '门' },
            { english: 'tree', chinese: '树' },
            { english: 'flower', chinese: '花' }
        ],
        4: [
            { english: 'school', chinese: '学校' },
            { english: 'teacher', chinese: '老师' },
            { english: 'student', chinese: '学生' },
            { english: 'classroom', chinese: '教室' },
            { english: 'library', chinese: '图书馆' },
            { english: 'playground', chinese: '操场' },
            { english: 'cafeteria', chinese: '食堂' },
            { english: 'gym', chinese: '体育馆' }
        ],
        5: [
            { english: 'science', chinese: '科学' },
            { english: 'math', chinese: '数学' },
            { english: 'history', chinese: '历史' },
            { english: 'geography', chinese: '地理' },
            { english: 'music', chinese: '音乐' },
            { english: 'art', chinese: '美术' },
            { english: 'sports', chinese: '运动' },
            { english: 'computer', chinese: '计算机' }
        ],
        6: [
            { english: 'universe', chinese: '宇宙' },
            { english: 'planet', chinese: '行星' },
            { english: 'galaxy', chinese: '星系' },
            { english: 'astronaut', chinese: '宇航员' },
            { english: 'satellite', chinese: '卫星' },
            { english: 'telescope', chinese: '望远镜' },
            { english: 'meteor', chinese: '流星' },
            { english: 'comet', chinese: '彗星' }
        ]
    },
    junior: {
        1: [
            { english: 'adventure', chinese: '冒险' },
            { english: 'discover', chinese: '发现' },
            { english: 'explore', chinese: '探索' },
            { english: 'journey', chinese: '旅程' },
            { english: 'mystery', chinese: '神秘' },
            { english: 'secret', chinese: '秘密' },
            { english: 'treasure', chinese: '宝藏' },
            { english: 'map', chinese: '地图' }
        ],
        2: [
            { english: 'environment', chinese: '环境' },
            { english: 'pollution', chinese: '污染' },
            { english: 'recycle', chinese: '回收' },
            { english: 'protect', chinese: '保护' },
            { english: 'climate', chinese: '气候' },
            { english: 'weather', chinese: '天气' },
            { english: 'energy', chinese: '能源' },
            { english: 'resource', chinese: '资源' }
        ],
        3: [
            { english: 'technology', chinese: '技术' },
            { english: 'innovation', chinese: '创新' },
            { english: 'invention', chinese: '发明' },
            { english: 'device', chinese: '设备' },
            { english: 'software', chinese: '软件' },
            { english: 'hardware', chinese: '硬件' },
            { english: 'network', chinese: '网络' },
            { english: 'digital', chinese: '数字的' }
        ]
    },
    senior: {
        1: [
            { english: 'philosophy', chinese: '哲学' },
            { english: 'ethics', chinese: '伦理学' },
            { english: 'logic', chinese: '逻辑' },
            { english: 'reason', chinese: '理性' },
            { english: 'wisdom', chinese: '智慧' },
            { english: 'truth', chinese: '真理' },
            { english: 'justice', chinese: '正义' },
            { english: 'virtue', chinese: '美德' }
        ],
        2: [
            { english: 'economics', chinese: '经济学' },
            { english: 'market', chinese: '市场' },
            { english: 'trade', chinese: '贸易' },
            { english: 'investment', chinese: '投资' },
            { english: 'finance', chinese: '金融' },
            { english: 'currency', chinese: '货币' },
            { english: 'profit', chinese: '利润' },
            { english: 'business', chinese: '商业' }
        ],
        3: [
            { english: 'psychology', chinese: '心理学' },
            { english: 'behavior', chinese: '行为' },
            { english: 'emotion', chinese: '情绪' },
            { english: 'personality', chinese: '性格' },
            { english: 'memory', chinese: '记忆' },
            { english: 'learning', chinese: '学习' },
            { english: 'motivation', chinese: '动机' },
            { english: 'perception', chinese: '知觉' }
        ]
    }
};

class WordMatchingGame {
    constructor() {
        this.gameBoard = document.getElementById('gameBoard');
        this.startButton = document.getElementById('startButton');
        this.scoreElement = document.getElementById('score');
        this.educationLevel = document.getElementById('educationLevel');
        this.grade = document.getElementById('grade');
        this.settingsToggle = document.getElementById('settingsToggle');
        this.settingsContent = document.getElementById('settingsContent');
        this.enableSound = document.getElementById('enableSound');
        this.enableEffect = document.getElementById('enableEffect');
        this.speechRate = document.getElementById('speechRate');
        this.volume = document.getElementById('volume');
        this.rateValue = document.getElementById('rateValue');
        this.volumeValue = document.getElementById('volumeValue');
        this.csvFile = document.getElementById('csvFile');
        this.headerLeft = document.querySelector('.header-left');
        
        this.score = 0;
        this.cards = [];
        this.selectedCards = [];
        this.matchedPairs = 0;
        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.failedWords = new Set(); // 存储配对失败的单词
        
        // 创建音效音频对象
        //this.matchSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
        this.matchSound = new Audio('correct.wav');
        this.matchSound.volume = 0.5;
        
        // 创建配对失败音效
        //this.mismatchSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3');
        this.mismatchSound = new Audio('fail.wav');
        this.mismatchSound.volume = 0.5;
        
        this.currentLevel = 1;
        this.totalLevels = 1;
        this.wordsPerLevel = 8;
        this.currentWords = [];
        
        // 创建关卡显示元素
        this.levelDisplay = document.createElement('div');
        this.levelDisplay.className = 'level-display';
        this.headerLeft.appendChild(this.levelDisplay);
        
        // 初始化弹窗元素
        this.modal = document.getElementById('modal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalMessage = document.getElementById('modalMessage');
        this.modalButton = document.getElementById('modalButton');
        this.modalClose = document.querySelector('.modal-close');
        
        this.initializeEventListeners();
        
        // 添加文件导入事件监听
        this.csvFile.addEventListener('change', (event) => this.handleFileImport(event));
    }

    initializeEventListeners() {
        this.startButton.addEventListener('click', () => this.startGame());
        this.educationLevel.addEventListener('change', () => this.updateGradeOptions());
        this.settingsToggle.addEventListener('click', () => this.toggleSettings());
        this.enableSound.addEventListener('change', () => this.updateSoundSettings());
        this.enableEffect.addEventListener('change', () => this.updateEffectSettings());
        this.speechRate.addEventListener('input', () => this.updateRateValue());
        this.volume.addEventListener('input', () => this.updateVolumeValue());
        
        // 初始化进度条颜色
        this.updateRateValue();
        this.updateVolumeValue();
        
        // 添加点击外部区域关闭菜单的事件监听
        document.addEventListener('click', (event) => {
            const isClickInside = this.settingsContent.contains(event.target) || 
                                this.settingsToggle.contains(event.target);
            if (!isClickInside && this.settingsContent.classList.contains('active')) {
                this.toggleSettings();
            }
        });
        
        // 绑定弹窗事件
        this.modalButton.addEventListener('click', () => this.hideModal());
        this.modalClose.addEventListener('click', () => this.hideModal());
    }

    updateSoundSettings() {
        // 更新发音设置
        if (!this.enableSound.checked && this.speechSynthesis.speaking) {
            this.speechSynthesis.cancel();
        }
    }

    updateEffectSettings() {
        // 更新音效设置
        if (!this.enableEffect.checked) {
            this.matchSound.pause();
            this.matchSound.currentTime = 0;
            this.mismatchSound.pause();
            this.mismatchSound.currentTime = 0;
        }
    }

    speakWord(word) {
        // 如果发音被禁用，直接返回
        if (!this.enableSound.checked) return;
        
        // 检查是否是英文单词（通过检查是否包含中文字符）
        if (/[\u4e00-\u9fa5]/.test(word)) return;
        
        // 如果当前正在播放，先停止
        if (this.speechSynthesis.speaking) {
            this.speechSynthesis.cancel();
        }

        // 创建新的语音合成
        this.utterance = new SpeechSynthesisUtterance(word);
        
        // 设置语音参数
        this.utterance.lang = 'en-US'; // 设置为英语
        this.utterance.rate = parseFloat(this.speechRate.value); // 使用设置的语速
        this.utterance.pitch = 1.2; // 提高音调，使声音更女性化
        this.utterance.volume = parseFloat(this.volume.value); // 使用设置的音量
        
        // 获取可用的语音列表
        const voices = this.speechSynthesis.getVoices();
        
        // 选择英语女声
        const femaleVoice = voices.find(voice => 
            voice.lang.includes('en') && voice.name.includes('Female')
        );
        
        // 如果找到女声就使用，否则使用默认声音
        if (femaleVoice) {
            this.utterance.voice = femaleVoice;
        }
        
        // 播放语音
        this.speechSynthesis.speak(this.utterance);
    }

    checkMatch() {
        if (this.selectedCards.length === 2) {
            const [card1, card2] = this.selectedCards;
            const word1 = card1.dataset.english;
            const word2 = card2.dataset.english;
            
            // 检查是否是有效的配对
            const isMatch = word1 === word2 && !(card1 === card2);
            
            if (isMatch) {
                // 如果配对成功，从失败单词集合中移除
                this.failedWords.delete({english: word1, chinese: card1.dataset.chinese});
                // 播放配对成功音效
                if (this.enableEffect.checked) {
                    this.matchSound.currentTime = 0;
                    this.matchSound.play();
                }
                
                // 添加匹配动画
                card1.classList.add('matched');
                card2.classList.add('matched');
                
                this.matchedPairs++;
                this.score += 10;
                this.scoreElement.textContent = this.score;
                
                // 检查游戏是否结束
                setTimeout(() => {
                    this.checkGameEnd();
                }, 500);
            } else {
                // 播放配对失败音效
                if (this.enableEffect.checked) {
                    this.mismatchSound.currentTime = 0;
                    this.mismatchSound.play();
                }
                
                // 添加晃动动画
                card1.classList.add('mismatch');
                card2.classList.add('mismatch');
                
                // 记录配对失败的单词
                if (card1.dataset.type === 'english') {
                    this.failedWords.add({english: card1.dataset.english, chinese: card1.dataset.chinese});
                } else {
                    this.failedWords.add({english: card2.dataset.english, chinese: card2.dataset.chinese});
                }
                
                setTimeout(() => {
                    card1.classList.remove('selected', 'mismatch');
                    card2.classList.remove('selected', 'mismatch');
                }, 1000);
            }
            
            this.selectedCards = [];
        }
    }

    toggleSettings() {
        this.settingsToggle.classList.toggle('active');
        this.settingsContent.classList.toggle('active');
    }

    updateSettings() {
        // 更新显示的值
        this.rateValue.textContent = this.speechRate.value;
        this.volumeValue.textContent = this.volume.value;
    }

    updateGradeOptions() {
        const level = this.educationLevel.value;
        const gradeSelect = this.grade;
        const currentValue = gradeSelect.value;
        
        // 清空现有选项
        gradeSelect.innerHTML = '';
        
        // 添加所有可用的年级
        Object.keys(wordLibraries[level]).forEach(grade => {
            const option = document.createElement('option');
            option.value = grade;
            option.textContent = grade;
            gradeSelect.appendChild(option);
        });
        
        // 恢复之前的选择
        if (currentValue && wordLibraries[level][currentValue]) {
            gradeSelect.value = currentValue;
        }
    }

    getRandomWords(words, count) {
        if (!words || words.length < count) {
            return null;
        }
        
        const shuffled = [...words].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    startGame() {
        // 如果游戏已经结束，重置游戏状态
        if (this.gameEnded) {
            this.gameEnded = false;
            this.currentLevel = 1;
            this.matchedPairs = 0;
            this.selectedCards = [];
            this.failedWords.clear(); // 清空失败单词记录
            this.startButton.textContent = '游戏进行中...';
            this.startButton.disabled = true;
            this.startLevel();
            return;
        }

        // 获取当前选择的教育阶段和年级
        const level = this.educationLevel.value;
        const grade = this.grade.value;

        // 检查是否有可用的单词
        if (!wordLibraries[level] || !wordLibraries[level][grade]) {
            this.showModal('提示', '当前选择的年级没有可用的单词，请先导入单词或选择其他年级！');
            return;
        }

        // 获取当前年级的单词
        const allWords = wordLibraries[level][grade];
        if (!allWords || allWords.length === 0) {
            this.showModal('提示', '当前选择的年级没有可用的单词，请先导入单词或选择其他年级！');
            return;
        }

        // 计算总关卡数
        this.totalLevels = Math.ceil(allWords.length / this.wordsPerLevel);
        this.currentLevel = 1;
        this.currentWords = allWords;
        this.matchedPairs = 0;
        this.selectedCards = [];
        this.score = 0;
        this.scoreElement.textContent = this.score;
        this.startButton.textContent = '游戏进行中...';
        this.startButton.disabled = true;
        
        // 开始第一关
        this.startLevel();
    }

    startLevel() {
        // 更新关卡显示
        this.levelDisplay.textContent = `第 ${this.currentLevel} 关 / 共 ${this.totalLevels} 关`;
        
        // 获取当前关卡的单词
        const startIndex = (this.currentLevel - 1) * this.wordsPerLevel;
        const levelWords = this.currentWords.slice(startIndex, startIndex + this.wordsPerLevel);
        
        if (levelWords.length === 0) {
            alert('游戏结束！');
            return;
        }

        // 清空游戏板
        this.gameBoard.innerHTML = '';
        
        // 创建英文和中文卡片
        const allCards = [];
        
        // 添加英文卡片
        levelWords.forEach((word) => {
            const card = document.createElement('div');
            card.className = 'word-card';
            card.textContent = word.english;
            card.dataset.english = word.english;
            card.dataset.chinese = word.chinese;
            card.dataset.type = 'english';
            card.addEventListener('click', () => this.handleCardClick(card));
            card.addEventListener('mouseenter', () => this.speakWord(word.english));
            allCards.push(card);
        });
        
        // 添加中文卡片
        levelWords.forEach((word) => {
            const card = document.createElement('div');
            card.className = 'word-card';
            card.textContent = word.chinese;
            card.dataset.english = word.english;
            card.dataset.chinese = word.chinese;
            card.dataset.type = 'chinese';
            card.addEventListener('click', () => this.handleCardClick(card));
            allCards.push(card);
        });
        
        // 打乱卡片顺序
        this.shuffleArray(allCards);
        
        // 添加卡片到游戏板并设置网格位置
        allCards.forEach((card, index) => {
            // 根据打乱后的顺序动态设置网格位置
            card.style.gridColumn = (index % 4) + 1;
            card.style.gridRow = Math.floor(index / 4) + 1;
            this.gameBoard.appendChild(card);
        });

        // 重置游戏状态
        this.score = 0;
        this.scoreElement.textContent = this.score;
        this.selectedCards = [];
        this.matchedPairs = 0;
        this.startButton.textContent = '重新开始';
        this.startButton.disabled = false;
    }

    createWordPairs(wordLibrary) {
        const selectedWords = [];
        const usedIndices = new Set();
        
        while (selectedWords.length < 16) {
            const randomIndex = Math.floor(Math.random() * wordLibrary.length);
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                selectedWords.push(wordLibrary[randomIndex].english);
                selectedWords.push(wordLibrary[randomIndex].chinese);
            }
        }
        
        return selectedWords;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    createCard(word, index) {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.dataset.word = word;
        card.dataset.index = index;
        card.textContent = word;
        
        // 设置固定的网格位置
        const row = Math.floor(index / 4) + 1;
        const col = (index % 4) + 1;
        card.style.gridRow = row;
        card.style.gridColumn = col;
        
        // 添加鼠标事件监听器
        card.addEventListener('mouseenter', () => this.speakWord(word));
        card.addEventListener('click', () => this.handleCardClick(card));
        return card;
    }

    handleCardClick(card) {
        if (this.selectedCards.length === 2 || card.classList.contains('matched')) return;
        
        card.classList.add('selected');
        this.selectedCards.push(card);
        
        if (this.selectedCards.length === 2) {
            this.checkMatch();
        }
    }

    updateRateValue() {
        const value = this.speechRate.value;
        this.rateValue.textContent = value;
        this.speechRate.style.setProperty('--range-progress', `${(value - 0.5) / 1.5 * 100}%`);
    }

    updateVolumeValue() {
        const value = this.volume.value;
        this.volumeValue.textContent = value;
        this.volume.style.setProperty('--range-progress', `${value * 100}%`);
    }

    checkGameEnd() {
        // 获取当前关卡的单词数量
        const startIndex = (this.currentLevel - 1) * this.wordsPerLevel;
        const currentLevelWords = this.currentWords.slice(startIndex, startIndex + this.wordsPerLevel);
        const currentLevelWordCount = currentLevelWords.length;
        
        // 判断是否完成当前关卡（匹配数等于当前关卡实际单词数）
        if (this.matchedPairs === currentLevelWordCount) {
            if (this.currentLevel < this.totalLevels) {
                this.showModal(
                    '恭喜过关！',
                    `你已完成第 ${this.currentLevel} 关！准备进入下一关...`,
                    '继续'
                );
                setTimeout(() => {
                    this.currentLevel++;
                    this.startLevel();
                }, 1000);
            } else {
                // 游戏完全结束
                this.gameEnded = true;
                
                // 如果有配对失败的单词，创建复习关卡
                if (this.failedWords.size > 0) {
                    this.showModal(
                        '复习关卡',
                        '你有一些配对失败的单词需要复习，现在进入复习关卡！',
                        '开始复习'
                    );
                    
                    // 将失败单词转换为数组并设置为当前单词
                    this.currentWords = Array.from(this.failedWords);
                    this.totalLevels = Math.ceil(this.currentWords.length / this.wordsPerLevel);
                    this.currentLevel = 1;
                    this.failedWords.clear(); // 清空失败单词集合
                    this.gameEnded = false; // 重置游戏状态
                    
                    setTimeout(() => {
                        this.startLevel(); // 开始复习关卡
                    }, 1000);
                } else {
                    // 复习关卡完成
                    this.showModal('恭喜完成！', '太棒了！你已经成功掌握了所有需要复习的单词。继续保持，让我们开始新的挑战吧！', '开始新游戏');
                    this.startButton.textContent = '开始游戏';
                    this.startButton.disabled = false;
                    this.levelDisplay.textContent = '';
                    this.gameEnded = true;
                }
            }
        }
    }

    handleFileImport(event) {
        const file = event.target.files[0];
        if (!file) return;

        // 从文件名解析教育阶段和年级
        const fileName = file.name.replace('.csv', '');
        const [educationLevel, grade] = fileName.split('-');
        
        if (!educationLevel || !grade) {
            alert('文件名格式错误！请使用"教育阶段-年级.csv"的格式，例如"二年-第一单元.csv"');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target.result;
                const rows = content.split('\n').map(row => row.trim()).filter(row => row);
                const wordPairs = rows.map(row => {
                    const [english, chinese] = row.split(',').map(cell => cell.trim());
                    return { english, chinese };
                });

                // 验证数据格式
                if (!wordPairs.every(pair => pair.english && pair.chinese)) {
                    throw new Error('CSV格式错误！每行必须包含英文和中文，用逗号分隔');
                }

                // 更新单词库
                if (!wordLibraries[educationLevel]) {
                    wordLibraries[educationLevel] = {};
                }
                wordLibraries[educationLevel][grade] = wordPairs;

                // 更新教育阶段选项
                this.updateEducationLevelOptions();
                
                // 更新年级选项
                this.updateGradeOptions();

                alert('单词导入成功！');
            } catch (error) {
                alert(error.message);
            }
        };

        reader.onerror = () => {
            alert('文件读取失败！');
        };

        reader.readAsText(file);
    }

    updateEducationLevelOptions() {
        const educationLevelSelect = this.educationLevel;
        const currentValue = educationLevelSelect.value;
        
        // 清空现有选项
        educationLevelSelect.innerHTML = '';
        
        // 添加所有可用的教育阶段
        Object.keys(wordLibraries).forEach(level => {
            const option = document.createElement('option');
            option.value = level;
            option.textContent = this.getEducationLevelName(level);
            educationLevelSelect.appendChild(option);
        });
        
        // 恢复之前的选择
        if (currentValue && wordLibraries[currentValue]) {
            educationLevelSelect.value = currentValue;
        }
    }

    getEducationLevelName(level) {
        const levelNames = {
            primary: '小学',
            junior: '初中',
            senior: '高中'
        };
        return levelNames[level] || level;
    }

    // 显示弹窗
    showModal(title, message, buttonText = '确定') {
        this.modalTitle.textContent = title;
        this.modalMessage.textContent = message;
        this.modalButton.textContent = buttonText;
        this.modal.classList.add('show');
    }
    
    // 隐藏弹窗
    hideModal() {
        this.modal.classList.remove('show');
    }
}

// 初始化游戏
const game = new WordMatchingGame();
