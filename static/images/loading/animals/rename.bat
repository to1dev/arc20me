@echo off
setlocal enabledelayedexpansion

REM Set the initial counter
set count=1

REM Loop through all SVG files in the current directory sorted by name
for /f "tokens=*" %%f in ('dir /b /on *.gif') do (
    REM Get the file extension (which is .svg)
    set ext=%%~xf

    REM Rename the file
    ren "%%f" "!count!!ext!"

    REM Increment the counter
    set /a count+=1
)

endlocal
