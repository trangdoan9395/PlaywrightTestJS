import { faker } from '@faker-js/faker';

/**
 * Creates a random date string with a specified format.
 * @param {string} format The desired date format (e.g., 'yyyy-MM-dd', 'MM/dd/yyyy', 'dd-MM-yyyy').
 * @returns {string} The formatted random date string.
 */
export default function getRandomFormattedDate(format) {
  // Tạo một đối tượng Date ngẫu nhiên trong tương lai (tối đa 2 năm tới)
  const randomDate = faker.date.future({ years: 2 });

  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');

  // Sử dụng replace để thay thế các ký tự định dạng
  let formattedDate = format;
  formattedDate = formattedDate.replace('yyyy', year);
  formattedDate = formattedDate.replace('MM', month);
  formattedDate = formattedDate.replace('dd', day);
  
  return formattedDate;
}
export { getRandomFormattedDate };