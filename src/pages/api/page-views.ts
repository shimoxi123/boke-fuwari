import type { APIRoute } from 'astro';
import { baiduAnalyticsConfig } from '@/config';
import { getPageViews, getLast7DaysRange } from '@/utils/baidu-analytics';

export const GET: APIRoute = async ({ url }) => {
  // 检查配置
  if (!baiduAnalyticsConfig.enable || !baiduAnalyticsConfig.siteId) {
    return new Response(JSON.stringify({ 
      error: '百度统计未配置或未启用',
      views: 0
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const searchParams = url.searchParams;
  const pageUrl = searchParams.get('url');
  const startDate = searchParams.get('start_date');
  const endDate = searchParams.get('end_date');

  if (!pageUrl) {
    return new Response(JSON.stringify({ 
      error: '缺少页面URL参数',
      views: 0
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const dateRange = startDate && endDate 
      ? { startDate, endDate }
      : getLast7DaysRange();
    
    const views = await getPageViews(
      baiduAnalyticsConfig.siteId, 
      pageUrl,
      dateRange.startDate, 
      dateRange.endDate
    );

    return new Response(JSON.stringify({
      success: true,
      views: views,
      url: pageUrl,
      dateRange: dateRange,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // 缓存5分钟
      },
    });

  } catch (error) {
    console.error('获取页面访问量失败:', error);
    
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : '获取页面访问量失败',
      success: false,
      views: 0
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};