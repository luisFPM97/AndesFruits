# 🔒 INSTRUCCIONES DE SEGURIDAD - ANDES FRUITS

## ⚠️ ACCIONES INMEDIATAS REQUERIDAS

### 1. Verificar Estado de Git

**Si el archivo `.env` ya fue subido al repositorio:**

```bash
# Verificar si .env está en el historial de Git
git log --all --full-history -- .env

# Si aparece en el historial, debe ser eliminado completamente:
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all

# Luego forzar el push
git push origin --force --all
```

### 2. Rotar Credenciales Expuestas

**Las siguientes credenciales fueron encontradas en texto plano y DEBEN ser cambiadas:**

- ✅ **Web3Forms API Key:** `cf29c7be-710b-448b-a92a-3c8716b092f9`
  - Acción: Regenerar en https://web3forms.com/
  
- ✅ **Email:** `admin@luiscodev.com`
  - Acción: Cambiar password inmediatamente

- ✅ **Password:** `bxawaixnlajtxonk`
  - Acción: Generar nuevo app password

- ✅ **API Key alternativa en Confirmacion.jsx:** `f7dc8472-34bf-44ca-b03b-cf62bc68aef7`
  - Acción: Regenerar esta clave también

---

## ✅ CAMBIOS IMPLEMENTADOS

### Archivos Creados:
1. ✅ `.env.example` - Template para variables de entorno
2. ✅ Actualizado `.gitignore` - Ahora incluye `.env`
3. ✅ Actualizado `.env` - Formato correcto con VITE_ prefix

### Componentes Actualizados:
Los siguientes componentes ahora usan `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`:

- ✅ `src/component/Contact.jsx`
- ✅ `src/component/Pqrs.jsx`
- ✅ `src/component/modalContact/ModalContact.jsx`
- ✅ `src/component/comprobantes/componentes/Confirmacion.jsx`

---

## 📋 CONFIGURACIÓN PARA NUEVOS DESARROLLADORES

### Paso 1: Copiar el archivo de ejemplo
```bash
cp .env.example .env
```

### Paso 2: Solicitar credenciales
Contactar al administrador del proyecto para obtener:
- Web3Forms API Key
- Credenciales de email (si aplica)
- Otras claves de API necesarias

### Paso 3: Completar el archivo .env
Editar `.env` y reemplazar los valores `your_*_here` con las credenciales reales.

### Paso 4: Verificar
```bash
# Asegurarse de que .env NO está trackeado por Git
git status

# .env NO debe aparecer en la lista de cambios
# Si aparece, verificar .gitignore
```

---

## 🛡️ MEJORES PRÁCTICAS

### DO ✅
- ✅ Usar variables de entorno para TODAS las credenciales
- ✅ Mantener `.env.example` actualizado (sin valores reales)
- ✅ Rotar credenciales periódicamente
- ✅ Usar diferentes credenciales para dev/staging/prod
- ✅ Verificar que `.env` está en `.gitignore`

### DON'T ❌
- ❌ NUNCA subir el archivo `.env` al repositorio
- ❌ NUNCA compartir credenciales por Slack/Email
- ❌ NUNCA hardcodear API keys en el código
- ❌ NUNCA commitear archivos con credenciales
- ❌ NUNCA usar las mismas credenciales en prod y dev

---

## 🔍 AUDITORÍA DE SEGURIDAD

### Verificar que no hay secretos en el código:
```bash
# Buscar posibles API keys hardcodeadas
grep -r "api.*key" src/ --include="*.jsx" --include="*.js"

# Buscar patrones de tokens
grep -r "[0-9a-f]{32,}" src/ --include="*.jsx" --include="*.js"

# Buscar passwords
grep -r "password.*=" src/ --include="*.jsx" --include="*.js"
```

### Herramientas recomendadas:
- **git-secrets:** Previene commits con credenciales
- **truffleHog:** Busca secretos en el historial de Git
- **GitGuardian:** Monitoreo continuo de secretos

```bash
# Instalar git-secrets
git secrets --install
git secrets --register-aws
```

---

## 📊 ESTADO ACTUAL

| Item | Estado | Acción Requerida |
|------|--------|------------------|
| `.env.example` creado | ✅ | - |
| `.gitignore` actualizado | ✅ | - |
| `.env` con formato correcto | ✅ | - |
| API Keys migradas a env vars | ✅ | - |
| Componentes actualizados | ✅ | - |
| Credenciales rotadas | ⏳ | **PENDIENTE - URGENTE** |
| `.env` eliminado de Git history | ⏳ | **PENDIENTE - URGENTE** |
| Auditoría de seguridad completa | ⏳ | Pendiente |

---

## 🚨 EN CASO DE EXPOSICIÓN DE CREDENCIALES

Si descubres que las credenciales fueron expuestas públicamente:

1. **Inmediatamente:** Rotar TODAS las credenciales
2. Revisar logs de acceso para detectar uso no autorizado
3. Notificar al equipo de seguridad
4. Documentar el incidente
5. Implementar medidas adicionales de seguridad

---

## 📞 CONTACTO

Para dudas sobre seguridad o acceso a credenciales:
- **Administrador:** [Contacto del admin]
- **Urgencias de seguridad:** [Email/Slack de emergencias]

---

**Última actualización:** 26 de Enero de 2026  
**Próxima revisión:** Después de rotar credenciales
