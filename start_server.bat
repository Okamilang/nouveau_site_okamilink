@echo off
cd /d "%~dp0"
title Serveur Local Okamilink
echo Nettoyage des processus fantomes...
taskkill /F /IM node.exe /T >nul 2>&1
taskkill /F /IM esbuild.exe /T >nul 2>&1
echo Lancement du serveur de developpement Okamilink...
echo.
npm run dev
pause
