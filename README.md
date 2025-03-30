# 📦 WhatsApp Backend para Render.com

Este projeto é um backend em Node.js com whatsapp-web.js, pronto para rodar no Render.com.

---

## 🚀 Como fazer o deploy

1. Acesse https://render.com e crie uma conta ou faça login.
2. Clique em "New + > Web Service"
3. Conecte com seu repositório GitHub ou faça upload do projeto
4. Render vai identificar o render.yaml e configurar automaticamente

---

## 🌐 Endpoints disponíveis

- GET /qr → Retorna QR ou status
- GET /reset-session → Reseta a sessão atual
- POST /send → Envia mensagens para uma lista

---

## ⚠️ Importante

Esta versão usa Puppeteer completo com Chromium incluído.
