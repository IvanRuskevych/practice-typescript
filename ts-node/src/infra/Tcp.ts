import express from "express";
import { useExpressServer } from "routing-controllers";

import { IService } from "../types/services";
import { controllers } from "../app/domain";
import { middlewares } from "../app/middlewares";

export class Tcp implements IService {
  private static instance: Tcp; // Посилання на єдиний екземпляр класу з типом Tcp

  private routePrefix = "/api"; // префікс для маршрутів API
  public server = express();

  // Конструктор, що реалізує шаблон Singleton для класу Tcp
  constructor() {
    // Якщо екземпляр ще не створено, зберігаємо посилання на поточний екземпляр
    if (!Tcp.instance) Tcp.instance = this;
    return Tcp.instance;
  }

  // Метод для ініціалізації сервісу
  async init() {
    const { server, routePrefix } = this;
    server.use(express.json());

    // Використовуємо бібліотеку routing-controllers для налаштування маршрутів
    useExpressServer(server, {
      routePrefix,
      controllers,
      middlewares,
      cors: true,
      defaultErrorHandler: true,
      // Відключаємо вбудовану валідацію, щоб ми могли перевірити DTO самі всередині контролера
      validation: false,
    });

    // Повертаємо Promise, який успішно виконується, коли сервер починає слухати порт
    return new Promise<boolean>((resolve, _reject) => {
      server.listen(4000, () => {
        console.log("Tcp service started on port 4000");

        return resolve(true);
      });
    });
  }
}
