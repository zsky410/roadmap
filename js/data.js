const moduleData = [
  {
    id: 1,
    title: "Nhập môn lập trình web",
    description: "Giới thiệu tổng quan về lập trình web và các khái niệm cơ bản",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: `
# Module 01: Nhập môn lập trình web
- Lập trình web là gì? Thiết kế web là gì?
- Lộ trình học lập trình web Fullstack
- Phương pháp học lập trình hiệu quả
- Các công việc liên quan đến lập trình web
- Cơ chế hoạt động của website - trình duyệt (Request - Response)`
  },
  {
    id: 2,
    title: "Ngôn ngữ đánh dấu HTML",
    description: "HTML cơ bản và nâng cao, cấu trúc trang web",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    content: `
# Module 02: Ngôn ngữ đánh dấu HTML
- Giới thiệu về ngôn ngữ HTML
- Cấu trúc trang HTML, cấu trúc thẻ HTML
- Các loại thẻ HTML, các nhóm thẻ HTML
- Các thẻ HTML hay dùng trong nhóm Block/Inline
- Các thẻ HTML5 hay dùng và cấu trúc chuẩn HTML5
- Cách đặt tên class, id trong HTML
- Quy tắc đặt tên class BEM`
  },
  {
    id: 3,
    title: "Ngôn ngữ định dạng CSS",
    description: "CSS từ cơ bản đến nâng cao",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: `
# Module 3: Ngôn ngữ định dạng CSS
### Nhập môn CSS
- Giới thiệu ngôn ngữ định dạng CSS
- Cách học CSS hiệu quả
- 3 cách tích hợp CSS vào trang web
- Bộ chọn CSS (CSS Selector) từ cơ bản đến nâng cao
- Pseudo Elements
- Pseudo Classes
- Các đơn vị thường dùng trong CSS`
  },
  {
    id: 4,
    title: "Ngôn ngữ SCSS",
    description: "SCSS và các tính năng nâng cao",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    content: `
# Module 4: Ngôn ngữ SCSS
- Giới thiệu về ngôn ngữ tiền xử lý
- Các ngôn ngữ tiền xử lý phổ biến hiện nay
- Tại sao nên chọn SCSS cho dự án Front-End?
- Cách làm việc với SCSS
- Cài đặt SCSS và các cách biên dịch SCSS sang CSS`
  },
  {
    id: 5,
    title: "Dự án PSD sang HTML-CSS",
    description: "Thực hành chuyển đổi thiết kế thành code",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: `
# Module 5: Xây dựng dự án Convert PSD sang HTML - CSS
- Bản chất công việc Convert Figma, Photoshop sang HTML CSS
- Phân tích dự án từ bản thiết kế
- Triển khai cấu trúc folder, file
- Xây dựng các thành phần core trong dự án`
  },
  {
    id: 6,
    title: "Ngôn ngữ lập trình Javascript",
    description: "Javascript từ cơ bản đến nâng cao",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    content: `...`
  },
  {
    id: 7,
    title: "Thư viện React JS",
    description: "Làm việc với React và các hooks",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    content: `...`
  },
  {
    id: 8,
    title: "NextJS Framework",
    description: "Phát triển ứng dụng với NextJS",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: `...`
  },
  {
    id: 9,
    title: "NodeJS + ExpressJS",
    description: "Xây dựng backend với NodeJS và ExpressJS",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    content: `...`
  },
  {
    id: 10,
    title: "TypeScript",
    description: "Lập trình TypeScript và ứng dụng",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: `...`
  },
  {
    id: 11,
    title: "Testing",
    description: "Unit Test, Integration Test và E2E Testing",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    content: `...`
  },
  {
    id: 12,
    title: "DevOps và Deployment",
    description: "Docker, CI/CD và Cloud Deployment",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: `...`
  },
  {
    id: 13,
    title: "Database NoSQL",
    description: "Làm việc với MongoDB và Mongoose",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    content: `...`
  },
  {
    id: 14,
    title: "Web Performance và SEO",
    description: "Tối ưu hiệu suất và SEO cho website",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: `...`
  },
  {
    id: 15,
    title: "Microservices",
    description: "Kiến trúc và phát triển Microservices",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    content: `...`
  },
  {
    id: 16,
    title: "Kỹ năng mềm và Công cụ phát triển",
    description: "Các kỹ năng cần thiết cho lập trình viên",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: `...`
  },
  {
    id: 17,
    title: "Portfolio và Dự án thực tế",
    description: "Xây dựng portfolio và thực hành dự án",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890",
    content: `...`
  }
];