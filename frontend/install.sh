#!/bin/bash

echo "🚀 Установка зависимостей PalmAI Frontend..."

# Проверяем наличие Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не найден. Установите Node.js 18+ и попробуйте снова."
    exit 1
fi

# Проверяем версию Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Требуется Node.js версии 18 или выше. Текущая версия: $(node -v)"
    exit 1
fi

# Устанавливаем зависимости
echo "📦 Установка npm пакетов..."
npm install

# Создаем .env.local если его нет
if [ ! -f .env.local ]; then
    echo "⚙️ Создание .env.local..."
    cp .env.example .env.local
fi

echo "✅ Установка завершена!"
echo ""
echo "🎯 Для запуска разработки:"
echo "   npm run dev"
echo ""
echo "🏗️ Для сборки продакшена:"
echo "   npm run build"
echo "   npm start"