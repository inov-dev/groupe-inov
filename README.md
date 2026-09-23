# Site du Groupe INOV

Site vitrine du Groupe INOV, publié sur [groupe-inov.com](https://groupe-inov.com/) avec GitHub Pages.

## Modifier le contenu

Les textes se trouvent dans `inov-statique/content/`, le menu et les réglages dans `inov-statique/config/`, et les images dans `inov-statique/public/images/`.

## Vérifier localement

```bash
cd inov-statique
npm ci
npm run build
```

Le site exporté se trouve dans `inov-statique/out/`. Chaque mise à jour de `main` lance la publication via `.github/workflows/deploy.yml`.

Le site adapte le thème Bookworm Light sous licence MIT ; la licence d'origine est conservée dans `inov-statique/LICENSE`.
