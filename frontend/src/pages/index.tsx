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
    <div className="min-h-screen flex flex-col bg-surface" data-oid="_iy99.k">
      <header
        className="bg-surface border-b border-gray-200"
        data-oid="ej3vcpw"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="iiwrber"
        >
          <div
            className="flex items-center justify-between h-16"
            data-oid="doalxku"
          >
            <div className="flex items-center space-x-3" data-oid="gasoomf">
              <div
                className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center"
                data-oid="y8w6::0"
              >
                <span
                  className="text-white font-bold text-lg"
                  data-oid="_01n-m2"
                >
                  🌴
                </span>
              </div>
              <h1
                className="text-xl font-headline font-bold text-text-primary"
                data-oid="s7lz2y."
              >
                PalmAI
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8" data-oid="hlkk8s0">
        <div className="max-w-7xl mx-auto" data-oid="7yflgl5">
          <div className="text-center mb-12" data-oid="uw.7yio">
            <h1
              className="text-4xl md:text-5xl font-headline font-bold text-text-primary mb-4"
              data-oid="v3zc7wb"
            >
              Откройте тайны ваших ладоней
            </h1>
            <p
              className="text-lg text-text-secondary max-w-2xl mx-auto"
              data-oid="9sel-2x"
            >
              Персональный анализ с использованием современных технологий.
              Получите глубокие инсайты о вашем характере, потенциале и
              жизненном пути.
            </p>
          </div>

          <Card
            variant="elevated"
            className="max-w-2xl mx-auto"
            data-oid="sdtiqof"
          >
            <CardHeader data-oid="n2svr7c">
              <CardTitle data-oid="tes2mt-">Анализ ладоней</CardTitle>
              <p className="text-text-secondary" data-oid="egjnfcr">
                Загрузите четкие фотографии ваших ладоней для персонального
                анализа
              </p>
            </CardHeader>

            <CardContent data-oid="tdhfths">
              <div className="text-center py-8" data-oid="sk_bjxm">
                <p className="text-text-secondary mb-4" data-oid="vvnxp1n">
                  Приложение готово к работе!
                </p>
                <Button size="lg" data-oid="boo61t9">
                  Начать анализ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer
        className="bg-surface-alt border-t border-gray-200 mt-auto"
        data-oid="lnzzcgh"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          data-oid="p6finm0"
        >
          <div className="text-center" data-oid="rwkv33.">
            <p className="text-sm text-text-secondary" data-oid="o0ti3os">
              © 2024 PalmAI. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
