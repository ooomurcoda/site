document.addEventListener('DOMContentLoaded', function() {
    const contactsSection = document.getElementById('contacts');

    const contactLinks = [
        {
            type: 'telegram',
            iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg',
            title: 'Канал',
            url: 'https://t.me/murcoda',
            description: 'Подписывайтесь на наш Telegram‑канал'
        },
        {
            type: 'chat',
            iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg',
            title: 'Чат',
            url: 'https://t.me/+H1bh_TL7xzxkODIy',
            description: 'Присоединяйтесь к нашему чату'
        },
        {
            type: 'bot',
            iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/botframework.svg',
            title: 'Бот',
            url: 'https://murcodabot.t.me',
            description: 'Наш бот'
        },
        {
            type: 'manager',
            iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trello.svg',
            title: 'Менеджер',
            url: 'https://murcodaagent.t.me',
            description: 'Свяжитесь с менеджером'
        },
        {
            type: 'vk',
            iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vk.svg',
            title: 'Сообщество',
            url: 'vk.com/MurCoda',
            description: 'Наша группа ВКонтакте'
        },
        {
            type: 'donate',
            iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/donationalerts.svg',
            title: 'Донат',
            url: 'https://www.donationalerts.com/r/murcoda',
            description: 'Поддержите нас финансово'
        },
        {
            type: 'github',
            iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg',
            title: 'Организация',
            url: 'GitHub.com/ooomurcoda',
            description: 'Наш GitHub'
        },
        {
            type: 'channel',
            iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg',
            title: 'Канал',
            url: 'https://max.ru/join/XOrT6VxufmDlvM6OVyEjN37T4i1MPediJiPD3HlZQVo',
            description: 'Наш канал'
        },
        {
            type: 'email',
            iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg',
            title: 'Почта',
            url: 'mailto:murcoda@ro.ru',
            description: 'Напишите нам на почту'
        }
    ];

    contactLinks.forEach(link => {
        const contactItem = document.createElement('div');
        contactItem.className = `contact-item ${link.type}`;


        contactItem.innerHTML = `
            <img src="${link.iconUrl}" alt="${link.title}" class="contact-icon">
            <div class="contact-info">
                <h3>${link.title}</h3>
                <a href="${link.url}" target="_blank">${link.url.replace(/^(https?:\/\/)?(mailto:)?/, '')}</a>
                <p>${link.description}</p>
            </div>
        `;

        contactsSection.appendChild(contactItem);
    });
});
