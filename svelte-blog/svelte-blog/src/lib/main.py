import sqlite3

# Создаем подключение к базе данных
db = sqlite3.connect('database.db')

# Создаем курсор для выполнения SQL-запросов
cursor = db.cursor()

# Создаем таблицу "Posts"
cursor.execute('''CREATE TABLE IF NOT EXISTS Posts (
                    id INTEGER PRIMARY KEY,
                    userId INTEGER,
                    title TEXT,
                    body TEXT,
                    mainImage TEXT
                )''')

# Сохраняем изменения в базе данных
db.commit()

# Закрываем соединение с базой данных
db.close()
