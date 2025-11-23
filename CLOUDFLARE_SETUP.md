# Cloudflare Pages 配置指南

## 已完成的配置

✅ 已创建 `_headers` 文件 - 设置XML文件的正确MIME类型  
✅ 已创建 `_redirects` 文件 - 确保静态文件优先提供  
✅ 已推送到GitHub - Cloudflare Pages会自动部署

## 清除缓存方法

### 方法1：使用提供的批处理脚本（推荐）

1. **获取Cloudflare凭据**

   登录 Cloudflare 控制面板获取：
   
   - **API Token**: 
     - 访问: https://dash.cloudflare.com/profile/api-tokens
     - 点击 "Create Token"
     - 使用模板 "Edit zone DNS" 或创建自定义token
     - 权限至少需要: `Zone > Cache Purge > Purge`
   
   - **Zone ID**:
     - 访问: https://dash.cloudflare.com
     - 选择您的域名 `mornsun.elec-distributor.com`
     - 在右侧栏找到 "Zone ID" 并复制

2. **设置环境变量并运行脚本**

   ```cmd
   set CLOUDFLARE_API_TOKEN=your_api_token_here
   set CLOUDFLARE_ZONE_ID=your_zone_id_here
   clear-cloudflare-cache.bat
   ```

### 方法2：Cloudflare控制面板手动操作

1. 访问 https://dash.cloudflare.com
2. 选择域名 `mornsun.elec-distributor.com`
3. 点击左侧 "Caching" → "Configuration"
4. 点击 "Purge Everything" 或使用 "Custom Purge" 输入具体URL

### 方法3：使用curl命令

```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/YOUR_ZONE_ID/purge_cache" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"files":["https://mornsun.elec-distributor.com/sitemap.xml"]}'
```

## 验证修复

等待部署完成并清除缓存后（约2-5分钟），访问：

https://mornsun.elec-distributor.com/sitemap.xml

应该显示XML格式的网站地图，而不是网站首页。

## 故障排查

如果sitemap.xml仍然显示首页：

1. 确认Cloudflare Pages部署已完成（检查 Pages 控制面板）
2. 确认已清除缓存
3. 尝试在浏览器无痕模式访问
4. 检查响应头中的 `Content-Type` 应为 `application/xml`
