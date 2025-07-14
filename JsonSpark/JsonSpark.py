#!/usr/bin/env python3
"""
JsonSpark.py
Разворачивает вложенные строковые файлы из JsonSpec.json
в реальную файловую структуру проекта.

• Директория выглядит так:
    <project-root>/
        JsonSpark/
            JsonSpark.py
            JsonSpec.json   ← сюда копируете JSON ассистента
• Скрипт создаёт/обновляет файлы в <project-root>/design, api, infra и т.д.
"""

from pathlib import Path
import json

# соответствие ключ JSON → путь файла относительно корня проекта
MAPPING = {
    "tokens_json":      "design/tokens.json",
    "grid_breakpoints": "design/grid_breakpoints.md",
    "brand_guidelines": "branding/brand_guidelines.md",
    "content_examples": "content/examples.md",
    "openapi_yaml":     "api/openapi.yaml",
    "docker_compose":   "infra/docker-compose.yml",
    "env_example":      "env.example",
    "seed_data":        "data/seed/sample_seed.json",
}

def write_file(root: Path, rel_path: str, content: str) -> None:
    path = root / rel_path
    path.parent.mkdir(parents=True, exist_ok=True)
    action = "Обновлено" if path.exists() else "Создано "
    path.write_text(content, encoding="utf-8")
    print(f"  {action}: {rel_path}")

def process_section(section: dict, root: Path) -> None:
    for key, val in section.items():
        if key in MAPPING and isinstance(val, str):
            write_file(root, MAPPING[key], val)

def main() -> None:
    script_dir = Path(__file__).resolve().parent           # .../JsonSpark
    root_dir   = script_dir.parent                         # корень проекта
    spec_path  = script_dir / "JsonSpec.json"              # теперь JSON лежит рядом со скриптом

    if not spec_path.exists():
        print(f"❌ Не найден {spec_path}. Скопируйте JsonSpec.json рядом с JsonSpark.py.")
        return

    try:
        spec = json.loads(spec_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        print(f"❌ Ошибка JSON: {e}")
        return

    print(f"📂 Корень проекта: {root_dir}\n")

    for sec in ("design", "product", "backend"):
        if isinstance(spec.get(sec), dict):
            process_section(spec[sec], root_dir)

    print("\n✅ Готово! Файлы развернуты или обновлены.")

if __name__ == "__main__":
    main()
