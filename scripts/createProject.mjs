import fs from "node:fs";
import path from "node:path";

const projectName = process.argv[2];

if (!projectName) {
  console.error("Ошибка: укажи название проекта.");
  console.error("");
  console.error("Пример:");
  console.error("npm run create:project 01-fetch");
  process.exit(1);
}

const rootDir = process.cwd();
const templateDir = path.join(rootDir, "_templates", "vite-react-ts");
const targetDir = path.join(rootDir, projectName);

const ignoredNames = new Set(["node_modules", "dist", ".git"]);

if (!fs.existsSync(templateDir)) {
  console.error(`Ошибка: шаблон не найден.`);
  console.error(`Ожидаемый путь: ${templateDir}`);
  process.exit(1);
}

if (fs.existsSync(targetDir)) {
  console.error(`Ошибка: папка "${projectName}" уже существует.`);
  process.exit(1);
}

fs.cpSync(templateDir, targetDir, {
  recursive: true,
  filter: (source) => {
    const name = path.basename(source);

    return !ignoredNames.has(name);
  },
});

const updateJsonFile = (filePath, updater) => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  updater(json);

  fs.writeFileSync(filePath, `${JSON.stringify(json, null, 2)}\n`);
};

updateJsonFile(path.join(targetDir, "package.json"), (packageJson) => {
  packageJson.name = projectName;
});

updateJsonFile(path.join(targetDir, "package-lock.json"), (packageLockJson) => {
  packageLockJson.name = projectName;

  if (packageLockJson.packages?.[""]) {
    packageLockJson.packages[""].name = projectName;
  }
});

console.log("");
console.log(`Проект "${projectName}" успешно создан.`);
console.log("");
console.log("Дальше выполни:");
console.log(`cd ${projectName}`);
console.log("npm install");
console.log("npm run dev");
console.log("");
