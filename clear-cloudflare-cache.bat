@echo off
REM Cloudflare Cache Purge Script for sitemap.xml
REM 使用说明：请先设置您的 CLOUDFLARE_API_TOKEN 和 CLOUDFLARE_ZONE_ID

echo ========================================
echo Cloudflare Cache Purge - sitemap.xml
echo ========================================
echo.

REM 检查是否设置了环境变量
if "%CLOUDFLARE_API_TOKEN%"=="" (
    echo [错误] 请先设置 CLOUDFLARE_API_TOKEN 环境变量
    echo.
    echo 设置方法：
    echo set CLOUDFLARE_API_TOKEN=your_api_token_here
    echo.
    pause
    exit /b 1
)

if "%CLOUDFLARE_ZONE_ID%"=="" (
    echo [错误] 请先设置 CLOUDFLARE_ZONE_ID 环境变量
    echo.
    echo 设置方法：
    echo set CLOUDFLARE_ZONE_ID=your_zone_id_here
    echo.
    pause
    exit /b 1
)

echo [信息] 正在清除 sitemap.xml 缓存...
echo.

curl -X POST "https://api.cloudflare.com/client/v4/zones/%CLOUDFLARE_ZONE_ID%/purge_cache" ^
  -H "Authorization: Bearer %CLOUDFLARE_API_TOKEN%" ^
  -H "Content-Type: application/json" ^
  --data "{\"files\":[\"https://mornsun.elec-distributor.com/sitemap.xml\",\"https://mornsun.elec-distributor.com/sitemap.xsl\"]}"

echo.
echo ========================================
echo [完成] 缓存清除请求已发送
echo ========================================
echo.
echo 请等待1-2分钟后访问：
echo https://mornsun.elec-distributor.com/sitemap.xml
echo.
pause
