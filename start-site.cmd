@echo off
cd /d "%~dp0"

if not exist "index.html" (
  echo Website files are missing. Running the offline build...
  call npm.cmd run build:static
  if errorlevel 1 (
    echo Build failed.
    pause
    exit /b 1
  )
)

start "" "%~dp0index.html"
exit /b 0
