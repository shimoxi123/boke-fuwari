import type { APIRoute } from 'astro';
import { baiduAnalyticsConfig } from '@/config';
import { getSiteOverview, getRealtimeData, getLast7DaysRange } from '@/utils/baidu-analytics';

export const GET: APIRoute = async ({ url }) => {
  // 检查配置
  if (!baiduAnalyticsConfig.enable || !baiduAnalyticsConfig.siteId) {
    return new Response(JSON.stringify({ 
      error: '百度统计未配置或未启用' 
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const searchParams = url.searchParams;
  const type = searchParams.get('type') || 'overview';
  const startDate = searchParams.get('start_date');
  const endDate = searchParams.get('end_date');

  try {
    let data;

    switch (type) {
      case 'overview':
        const dateRange = startDate && endDate 
          ? { startDate, endDate }
          : getLast7DaysRange();
        data = await getSiteOverview(
          baiduAnalyticsConfig.siteId, 
          dateRange.startDate, 
          dateRange.endDate
        );
        break;
      
      case 'realtime':
        data = await getRealtimeData(baiduAnalyticsConfig.siteId);
        break;
      
      default:
        return new Response(JSON.stringify({ 
          error: '不支持的数据类型' 
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        });
    }

    return new Response(JSON.stringify({
      success: true,
      data: data,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // 缓存5分钟
      },
    });

  } catch (error) {
    console.error('百度统计API错误:', error);
    
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : '获取统计数据失败',
      success: false
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};