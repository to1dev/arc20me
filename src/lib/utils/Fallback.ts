/**
 * 用于执行带有故障转移的 fetch 请求的函数
 * @param urlPrimary - 主 API 端点 URL
 * @param urlFallback - 备用 API 端点 URL
 * @param options - fetch 请求的选项
 * @param timeout - 请求超时时间（毫秒）
 * @returns Promise<Response>
 */
async function fetchWithFailover(
    urlPrimary: string,
    urlFallback: string,
    options: RequestInit = {},
    timeout: number = 5000
): Promise<Response> {
    try {
        // 尝试从主 API 端点获取数据
        const response = await fetchWithTimeout(urlPrimary, options, timeout);
        if (!response.ok) {
            throw new Error("主端点请求失败");
        }
        return response;
    } catch (error) {
        console.error("主端点请求失败:", error);

        // 尝试从备用 API 端点获取数据
        const fallbackResponse = await fetchWithTimeout(
            urlFallback,
            options,
            timeout
        );
        if (!fallbackResponse.ok) {
            throw new Error("备用端点请求也失败");
        }
        return fallbackResponse;
    }
}

/**
 * 用于执行带有超时控制的 fetch 请求的函数
 * @param url - 请求的 URL
 * @param options - fetch 请求的选项
 * @param timeout - 请求超时时间（毫秒）
 * @returns Promise<Response>
 */
function fetchWithTimeout(
    url: string,
    options: RequestInit = {},
    timeout: number = 5000
): Promise<Response> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error("请求超时")), timeout);

        fetch(url, options)
            .then((response) => {
                clearTimeout(timer);
                resolve(response);
            })
            .catch((error) => {
                clearTimeout(timer);
                reject(error);
            });
    });
}
