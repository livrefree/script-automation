# Script Automation

Script de automação feito para reunir 3 scripts de automatizações e 1 de YouTube Music em um painel único e facilitador.

## 🚀 Como usar

### Bookmarklet (Recomendado)
Crie um novo bookmark no seu navegador com o seguinte código:

```javascript
javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/livrefree/script-automation@main/script.js';document.body.appendChild(s);})();
```

### Console Browser
Cole o código diretamente no console do seu navegador (F12):

```javascript
fetch('https://cdn.jsdelivr.net/gh/livrefree/script-automation@main/script.js').then(r=>r.text()).then(eval);
```

## 🎯 Funcionalidades

- **Quizizz** - Bypass e automação para Quizizz
- **Redação** - Bypass para correção de redações
- **Khan Academy** - Bypass para Khan Academy
- **Music** - Integração YouTube for Music

## 🔐 Senha Padrão

A senha padrão é: **free**

## 📱 Interface

- Painel fixo no canto inferior direito
- Design minimalista com tema escuro
- Menu de opções após autenticação
- Remoção automática do painel ao executar um script

## ⚙️ Personalização

Edite o arquivo `script.js` para:
- Alterar a senha
- Adicionar novos scripts
- Modificar o design

## 📄 Licença

MIT License

## 👤 Autor

**livrefree** - [@livrefree](https://github.com/livrefree)

---

⭐ Se gostou, considere dar uma estrela!