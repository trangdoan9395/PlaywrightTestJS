/**
 * Hàm gọi API dùng chung.
 *
 * @param {string} endpoint - Đường dẫn API, ví dụ: '/users' hoặc '/posts/1'.
 * @param {string} method - Phương thức HTTP: 'GET', 'POST', 'PUT', 'DELETE'.
 * @param {object} [data=null] - Dữ liệu gửi đi (chỉ dùng cho POST/PUT).
 * @param {object} [headers={}] - Các headers tùy chỉnh, ví dụ: {'Authorization': 'Bearer ...'}.
 * @returns {Promise<object>} Dữ liệu JSON trả về từ API.
 */
export async function callApi(endpoint, method, data = null, headers = {}) {
  const API_BASE_URL = 'https://api.example.com'; // Thay thế bằng URL cơ sở của API của bạn

  const url = `${API_BASE_URL}${endpoint}`;
  
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers, // Cho phép ghi đè hoặc thêm headers khác
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      // Xử lý lỗi từ server (ví dụ: lỗi 404, 500)
      const errorData = await response.json();
      throw new Error(errorData.message || `Lỗi API: ${response.status}`);
    }

    // Trả về dữ liệu JSON
    return await response.json();

  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
    throw error;
  }
}
export default callApi;
//--- Các hàm dùng chung cho từng phương thức HTTP ---

export const get = (endpoint, headers = {}) => callApi(endpoint, 'GET', null, headers);

export const post = (endpoint, data, headers = {}) => callApi(endpoint, 'POST', data, headers);

export const put = (endpoint, data, headers = {}) => callApi(endpoint, 'PUT', data, headers);

export const del = (endpoint, headers = {}) => callApi(endpoint, 'DELETE', null, headers);