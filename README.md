# Brain-games

<p align="center"> 
    <a href="https://github.com/lexx6/frontend-project-44/actions">
        <img src="https://github.com/lexx6/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg">
    </a>
    <a href="https://codeclimate.com/github/lexx6/frontend-project-44/maintainability">
        <img src="https://api.codeclimate.com/v1/badges/6b43786b54e81dba6cf8/maintainability">
    </a>
</p>

## Навигация

- [Игры разума](#brain-games)
  - [Навигация](#навигация)
  - [Технологии](#технологии)
  - [Описание](#описание)
    - [Список игр](#список-игр)
  - [Установка](#установка)
  - [Использование](#использование)
    - [Brain-calc](#brain-calc-игра-калькулятор)
    - [Brain-even](#brain-even-игра-четноенечетное-число)
    - [Brain-gcd](#brain-gcd-игра-наибольший-общий-делитель)
    - [Brain-prime](#brain-prime-игра-простое-ли-число)
    - [Brain-progression](#brain-progression-игра-подставь-недостающее-число)
  - [Структура проекта](#структура-проекта)
  - [Лицензия](#лицензия)

## Технологии

<p align="center">
  <a href="https://github.com/topics/javascript">
    <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" style="border-radius: 5px;">
  </a>
  <a href="https://github.com/nodejs">
    <img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" style="border-radius: 5px;">
  </a>
  <a href="https://github.com/anseki/readline-sync">
    <img alt="Readline Sync" src="https://img.shields.io/badge/Readline Sync-181818?style=for-the-badge&logo=slashdot&logoColor=white" style="border-radius: 5px;">
  </a>
  <a href="https://github.com/eslint/eslint">
    <img alt="ESLint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" style="border-radius: 5px;">
  </a>
</p>

## Описание

Первый проект курса **Frontend-разработка** [Hexlet](https://ru.hexlet.io/courses-frontend-development).

**Brain-games** - Набор консольных математических игр для начальных проверок знаний по математике. Каждая игра знакомится с пользователем по имени, задает определенный математический вопрос, пользователю требуется дать 3 правильных ответа подряд. В случае ошибки игра останавливается и нужно начать игру заного.

### Список игр

- [Brain-calc (Игра калькулятор)](#brain-calc-игра-калькулятор)
- [Brain-even (Игра четное\нечетное число)](#brain-even-игра-четноенечетное-число)
- [Brain-gcd (Игра наибольший общий делитель)](#brain-gcd-игра-наибольший-общий-делитель)
- [Brain-prime (Игра простое ли число)](#brain-prime-игра-простое-ли-число)
- [Brain-progression (Игра подставь недостающее число)](#brain-progression-игра-подставь-недостающее-число)

## Установка

Перед установкой игр проверьте наличие установленных Node.js и npm!

Для запуска необходимо предварительно установить данный проект:

1. Склонируйте репозиторий запустив команду:

```bash
>> git clone https://github.com/lexx6/frontend-project-44.git
```

2. Установите проект поочередно запустив команды:

```bash
>> make install
>> make publish
>> npm link
```

3. Запустите любую из игры с помощью комманд указанных [ниже](#использование).

## Использование

### Brain-calc (Игра калькулятор)

Команда запуска: `brain-calc`

[![asciicast](https://asciinema.org/a/Sk0Udevrk66XCx9pG29lu665m.svg)](https://asciinema.org/a/Sk0Udevrk66XCx9pG29lu665m)

### Brain-even (Игра четное\нечетное число)

Команда запуска: `brain-even`

[![asciicast](https://asciinema.org/a/hnJGMD6Z6WYAEuTLjDVz27k7v.svg)](https://asciinema.org/a/hnJGMD6Z6WYAEuTLjDVz27k7v)

### Brain-gcd (Игра наибольший общий делитель)

Команда запуска: `brain-gcd`

[![asciicast](https://asciinema.org/a/2SNHX0ZLAtLAYbZUVP6VVdwvw.svg)](https://asciinema.org/a/2SNHX0ZLAtLAYbZUVP6VVdwvw)

### Brain-prime (Игра простое ли число)

Команда запуска: `brain-prime`

[![asciicast](https://asciinema.org/a/wnwJWMyHGfs4DuitrSnhvj18L.svg)](https://asciinema.org/a/wnwJWMyHGfs4DuitrSnhvj18L)

### Brain-progression (Игра подставь недостающее число)

Команда запуска: `brain-progression`

[![asciicast](https://asciinema.org/a/tE2cDuiLEdvI6RDF4Z0ecifgk.svg)](https://asciinema.org/a/tE2cDuiLEdvI6RDF4Z0ecifgk)

## Структура проекта

```bash
.
├── ./src
│   ├── ./src/bin # Бинарные файлы - служат для запуска
│   │   ├── ./src/bin/brain-calc.js
│   │   ├── ./src/bin/brain-even.js
│   │   ├── ./src/bin/brain-games.js
│   │   ├── ./src/bin/brain-gcd.js
│   │   ├── ./src/bin/brain-prime.js
│   │   └── ./src/bin/brain-progression.js
│   ├── ./src/games # Основной код каждой игры
│   │   ├── ./src/games/brain-calc.js
│   │   ├── ./src/games/brain-even.js
│   │   ├── ./src/games/brain-games.js
│   │   ├── ./src/games/brain-gcd.js
│   │   ├── ./src/games/brain-prime.js
│   │   └── ./src/games/brain-progression.js
│   ├── ./src/lib # Библиотеки основных функций
│   │   ├── ./src/lib/calculation.js
│   │   ├── ./src/lib/engine.js # Основной алгоритм игр
│   │   ├── ./src/lib/evenOdd.js
│   │   ├── ./src/lib/gcd.js
│   │   ├── ./src/lib/greating.js
│   │   ├── ./src/lib/prime.js
│   │   ├── ./src/lib/randomArbitrary.js
│   │   └── ./src/lib/randomSym.js
│   └── ./src/cli.js
├── ./Makefile
├── ./README.md
├── ./package-lock.json
├── ./package.json # npm зависимости
```

## Лицензия

Лицензия MIT.

Copyright (c) 2023 Rakityanskiy Ilya