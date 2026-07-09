@echo off
cd /d "%~dp0"
title Arret Serveur Okamilink
echo Fermeture du serveur local et des processus en arriere-plan...
echo.
taskkill /F /IM node.exe /T >nul 2>&1
taskkill /F /IM esbuild.exe /T >nul 2>&1
echo.
echo Le serveur a ete completement arrete. (Le cache est libere)
echo.
pause
