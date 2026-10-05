import type { FrameworkStep } from '../types';

export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    number: '01',
    keyword: 'HỎI (ASK)',
    title: 'Xác định mục đích',
    question: 'Tôi đang dùng AI để hỗ trợ việc gì?',
    description:
      'Làm rõ ý định trước khi ra lệnh cho AI: Bạn đang tìm kiếm góc nhìn phản biện, tóm tắt tài liệu tham khảo, hay đang âm thầm muốn máy làm thay phần tư duy gian khổ?',
    checklist: [
      'Mục tiêu học tập của bài tập này là kỹ năng gì?',
      'Phần nào là bài tập cơ bắp trí tuệ mà tôi bắt buộc phải tự mình trải qua?',
      'Tôi đang coi AI là một trợ giảng hay một người làm thuê?',
    ],
    actionPrompt: 'Định danh vai trò: "AI chỉ là đối tác thảo luận, không phải tác giả chính."',
  },
  {
    number: '02',
    keyword: 'KIỂM (CHECK)',
    title: 'Kiểm chứng thực tế',
    question: 'Thông tin AI đưa ra có đáng tin không?',
    description:
      'Các mô hình AI không hiểu bản chất chân lý; chúng chỉ dự đoán từ kế tiếp dựa trên xác suất. Mọi số liệu, trích dẫn, và sự kiện lịch sử đều có thể là sản phẩm của ảo giác (thông tin bịa đặt).',
    checklist: [
      'Đã tìm thấy tài liệu gốc hoặc sách in thực tế của trích dẫn này chưa?',
      'Số liệu thống kê có đến từ nguồn nghiên cứu có thẩm quyền không?',
      'Có mâu thuẫn ngầm nào trong logic lập luận của AI không?',
    ],
    actionPrompt: 'Nguyên tắc vàng: "Chưa kiểm chứng nguồn gốc = Tuyệt đối không đưa vào bài nộp."',
  },
  {
    number: '03',
    keyword: 'THẤU (THINK)',
    title: 'Thấu hiểu nội hàm',
    question: 'Tôi có thực sự hiểu điều mình đang sử dụng không?',
    description:
      'Nếu bạn chỉ sao chép một câu văn trau chuốt mà không tự mình diễn giải lại được trước một người khác bằng từ ngữ mộc mạc của chính mình, bạn chưa thực sự sở hữu tri thức đó.',
    checklist: [
      'Tôi có thể tự giải thích lại luận điểm này cho bạn cùng lớp mà không nhìn màn hình không?',
      'Tại sao kết luận này lại hợp lý hơn phương án khác?',
      'Nếu bị chất vấn bất ngờ về khái niệm này, tôi có tự tin bảo vệ không?',
    ],
    actionPrompt: 'Bài kiểm tra tư duy: "Nếu không tự giải thích được tại sao, tuyệt đối không dùng."',
  },
  {
    number: '04',
    keyword: 'NHẬN (OWN)',
    title: 'Gánh vác trách nhiệm',
    question: 'Tôi có sẵn sàng chịu trách nhiệm với kết quả cuối cùng không?',
    description:
      'Khi tên bạn xuất hiện trên trang bìa, mọi vinh quang lẫn sai lầm đều thuộc về tư cách cá nhân của bạn. AI không bao giờ bị kỷ luật hay đánh trượt; chỉ có con người chịu trách nhiệm đạo đức trước cộng đồng.',
    checklist: [
      'Tôi có hoàn toàn minh bạch về cách thức và mức độ tôi đã sử dụng AI không?',
      'Nếu có sai sót học thuật, tôi có dũng cảm nhận lỗi mà không đổ vấy cho cỗ máy không?',
      'Sản phẩm này có phản ánh đúng phẩm giá và sự liêm chính của con người tôi?',
    ],
    actionPrompt: 'Cam kết tối thượng: "Trách nhiệm đạo đức là thứ duy nhất không bao giờ được khoán trắng cho máy."',
  },
];
