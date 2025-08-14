/**
 * 百度统计API工具类
 * 用于获取网站统计数据
 */

import { baiduAnalyticsConfig } from '@/config';

// 百度统计API基础URL
const BAIDU_API_BASE_URL = 'https://openapi.baidu.com/rest/2.0/tongji';

/**
 * 获取访问令牌
 */
async function getAccessToken(): Promise<string> {
  const { apiKey, secretKey } = baiduAnalyticsConfig;
  
  if (!apiKey || !secretKey) {
    throw new Error('百度统计API密钥未配置');
  }

  const tokenUrl = `https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=${apiKey}&client_secret=${secretKey}`;
  
  try {
    const response = await fetch(tokenUrl);
    const data = await response.json();
    
    if (data.error) {
      throw new Error(`获取访问令牌失败: ${data.error_description}`);
    }
    
    return data.access_token;
  } catch (error) {
    console.error('获取百度统计访问令牌失败:', error);
    throw error;
  }
}

/**
 * 获取网站概览数据
 */
export async function getSiteOverview(siteId: string, startDate: string, endDate: string) {
  try {
    const accessToken = await getAccessToken();
    
    const params = new URLSearchParams({
      access_token: accessToken,
      site_id: siteId,
      method: 'overview/getTimeTrendRpt',
      start_date: startDate,
      end_date: endDate,
      metrics: 'pv_count,visitor_count,ip_count'
    });

    const response = await fetch(`${BAIDU_API_BASE_URL}/report/getData?${params}`);
    const data = await response.json();
    
    if (data.header?.status !== 0) {
      throw new Error(`API请求失败: ${data.header?.desc || '未知错误'}`);
    }
    
    return data.body;
  } catch (error) {
    console.error('获取网站概览数据失败:', error);
    throw error;
  }
}

/**
 * 获取实时访客数据
 */
export async function getRealtimeData(siteId: string) {
  try {
    const accessToken = await getAccessToken();
    
    const params = new URLSearchParams({
      access_token: accessToken,
      site_id: siteId,
      method: 'overview/getCommonTrackRpt'
    });

    const response = await fetch(`${BAIDU_API_BASE_URL}/report/getData?${params}`);
    const data = await response.json();
    
    if (data.header?.status !== 0) {
      throw new Error(`API请求失败: ${data.header?.desc || '未知错误'}`);
    }
    
    return data.body;
  } catch (error) {
    console.error('获取实时访客数据失败:', error);
    throw error;
  }
}

/**
 * 获取热门页面数据
 */
export async function getTopPages(siteId: string, startDate: string, endDate: string) {
  try {
    const accessToken = await getAccessToken();
    
    const params = new URLSearchParams({
      access_token: accessToken,
      site_id: siteId,
      method: 'source/all/a',
      start_date: startDate,
      end_date: endDate,
      metrics: 'pv_count,visitor_count'
    });

    const response = await fetch(`${BAIDU_API_BASE_URL}/report/getData?${params}`);
    const data = await response.json();
    
    if (data.header?.status !== 0) {
      throw new Error(`API请求失败: ${data.header?.desc || '未知错误'}`);
    }
    
    return data.body;
  } catch (error) {
    console.error('获取热门页面数据失败:', error);
    throw error;
  }
}

/**
 * 获取单个页面的访问数据
 */
export async function getPageViews(siteId: string, pageUrl: string, startDate: string, endDate: string) {
  try {
    const accessToken = await getAccessToken();
    
    const params = new URLSearchParams({
      access_token: accessToken,
      site_id: siteId,
      method: 'overview/getDistrictRpt',
      start_date: startDate,
      end_date: endDate,
      metrics: 'pv_count',
      max_results: '1000'
    });

    const response = await fetch(`${BAIDU_API_BASE_URL}/report/getData?${params}`);
    const data = await response.json();
    
    if (data.header?.status !== 0) {
      throw new Error(`API请求失败: ${data.header?.desc || '未知错误'}`);
    }
    
    // 查找匹配的页面URL
    if (data.body?.data) {
      for (const item of data.body.data) {
        if (item[0] && item[0].name && item[0].name.includes(pageUrl)) {
          return item[1] || 0; // 返回PV数
        }
      }
    }
    
    return 0; // 没找到匹配的页面
  } catch (error) {
    console.error('获取页面访问数据失败:', error);
    return 0; // 出错时返回0
  }
}

/**
 * 格式化日期为百度统计API所需格式 (YYYYMMDD)
 */
export function formatDateForAPI(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

/**
 * 获取最近7天的日期范围
 */
export function getLast7DaysRange(): { startDate: string; endDate: string } {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 7);
  
  return {
    startDate: formatDateForAPI(startDate),
    endDate: formatDateForAPI(endDate)
  };
}