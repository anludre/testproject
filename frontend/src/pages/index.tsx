import React from "react";
import { Button } from "../components/atoms/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/atoms/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface" data-oid="la.wvfk">
      <header
        className="bg-surface border-b border-gray-200"
        data-oid="sk-koch"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="ovhg6dy"
        >
          <div
            className="flex items-center justify-between h-16"
            data-oid="z44g8v_"
          >
            <div className="flex items-center space-x-3" data-oid="xbxa124">
              <div
                className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center"
                data-oid="ihe:m1z"
              >
                <span
                  className="text-white font-bold text-lg"
                  data-oid="orfl-i3"
                >
                  🌴
                </span>
              </div>
              <h1
                className="text-xl font-headline font-bold text-text-primary"
                data-oid="csupds-"
              >
                PalmAI
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8" data-oid="qhi59jk">
        <div className="max-w-7xl mx-auto" data-oid="ojgpdx1">
          <div className="text-center mb-12" data-oid="x4wzt:v">
            <h1
              className="text-4xl md:text-5xl font-headline font-bold text-text-primary mb-4"
              data-oid="34.fcys"
            >
              Откройте тайны ваших ладоней
            </h1>
            <p
              className="text-lg text-text-secondary max-w-2xl mx-auto"
              data-oid="augpsi5"
            >
              Персональный анализ с использованием современных технологий.
              Получите глубокие инсайты о вашем характере, потенциале и
              жизненном пути.
            </p>
          </div>

          <Card
            variant="elevated"
            className="max-w-2xl mx-auto"
            data-oid="6te7.lh"
          >
            <CardHeader data-oid="h2zdtko">
              <CardTitle data-oid=":_vajey">Анализ ладоней</CardTitle>
              <p className="text-text-secondary" data-oid="k6oug.w">
                Загрузите четкие фотографии ваших ладоней для персонального
                анализа
              </p>
            </CardHeader>

            <CardContent data-oid="k0:pig5">
              <div className="text-center py-8" data-oid="rlm5q16">
                <p className="text-text-secondary mb-4" data-oid="4qjozfk">
                  Приложение готово к работе!
                </p>
                <Button size="lg" data-oid="8w:wnyc">
                  Начать анализ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer
        className="bg-surface-alt border-t border-gray-200 mt-auto"
        data-oid="cr42ol4"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          data-oid="ukzr4o:"
        >
          <div className="text-center" data-oid="au_::e4">
            <p className="text-sm text-text-secondary" data-oid="vf095dq">
              © 2024 PalmAI. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
