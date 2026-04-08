<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - mornsun.elec-distributor.com</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 14px;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h1 {
            color: #1a1a1a;
            font-size: 28px;
            margin-bottom: 10px;
            border-bottom: 3px solid #0066cc;
            padding-bottom: 10px;
          }
          .intro {
            background-color: #e7f3ff;
            border-left: 4px solid #0066cc;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
          }
          .intro p {
            margin: 5px 0;
            line-height: 1.6;
          }
          .stats {
            display: flex;
            gap: 20px;
            margin: 20px 0;
          }
          .stat-box {
            flex: 1;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
          }
          .stat-number {
            font-size: 32px;
            font-weight: bold;
            display: block;
          }
          .stat-label {
            font-size: 12px;
            opacity: 0.9;
            margin-top: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: #fff;
          }
          th {
            background-color: #0066cc;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 600;
            position: sticky;
            top: 0;
          }
          tr {
            border-bottom: 1px solid #e0e0e0;
          }
          tr:hover {
            background-color: #f8f9fa;
          }
          td {
            padding: 12px;
          }
          .url-cell {
            color: #0066cc;
            word-break: break-all;
            max-width: 500px;
          }
          .url-cell a {
            color: #0066cc;
            text-decoration: none;
          }
          .url-cell a:hover {
            text-decoration: underline;
          }
          .priority-high {
            color: #28a745;
            font-weight: bold;
          }
          .priority-medium {
            color: #ffc107;
            font-weight: bold;
          }
          .priority-low {
            color: #6c757d;
            font-weight: bold;
          }
          .freq-badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
          }
          .freq-daily {
            background-color: #d4edda;
            color: #155724;
          }
          .freq-weekly {
            background-color: #d1ecf1;
            color: #0c5460;
          }
          .freq-monthly {
            background-color: #fff3cd;
            color: #856404;
          }
          .freq-yearly {
            background-color: #f8d7da;
            color: #721c24;
          }
          footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            text-align: center;
            color: #666;
            font-size: 12px;
          }
          .note {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 12px;
            margin: 15px 0;
            border-radius: 4px;
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>

          <div class="intro">
            <p><strong>Website:</strong> mornsun.elec-distributor.com</p>
            <p><strong>Purpose:</strong> This XML Sitemap is used by search engines to discover and index pages on this website.</p>
            <p><strong>Generated:</strong> 2025-01-23</p>
          </div>

          <div class="stats">
            <div class="stat-box">
              <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
              <span class="stat-label">Total URLs</span>
            </div>
            <div class="stat-box">
              <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority &gt; 0.7])"/></span>
              <span class="stat-label">High Priority Pages</span>
            </div>
            <div class="stat-box">
              <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:changefreq='daily' or sitemap:changefreq='weekly'])"/></span>
              <span class="stat-label">Frequently Updated</span>
            </div>
          </div>

          <div class="note">
            <strong>Note:</strong> This is a human-readable visualization of the XML sitemap. Search engines read the underlying XML data automatically.
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 50%">URL</th>
                <th style="width: 15%">Last Modified</th>
                <th style="width: 15%">Change Frequency</th>
                <th style="width: 10%">Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending"/>
                <tr>
                  <td class="url-cell">
                    <a>
                      <xsl:attribute name="href">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td>
                    <span>
                      <xsl:attribute name="class">
                        <xsl:text>freq-badge freq-</xsl:text>
                        <xsl:value-of select="sitemap:changefreq"/>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </span>
                  </td>
                  <td>
                    <span>
                      <xsl:attribute name="class">
                        <xsl:choose>
                          <xsl:when test="sitemap:priority &gt; 0.7">priority-high</xsl:when>
                          <xsl:when test="sitemap:priority &gt; 0.5">priority-medium</xsl:when>
                          <xsl:otherwise>priority-low</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <footer>
            <p><strong>MORNSUN Power Distributor - LiTong</strong></p>
            <p>Official Authorized Tier 1 Distributor of MORNSUN power solutions</p>
            <p>This sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs and follows the <a href="https://www.sitemaps.org/protocol.html" target="_blank" style="color: #0066cc;">sitemaps.org</a> protocol.</p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
