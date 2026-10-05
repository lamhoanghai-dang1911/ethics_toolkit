export interface AcademicSource {
  id: string;
  category: string;
  title: string;
  organization: string;
  year?: string;
  note: string;
  isPlaceholder?: boolean;
}

export const ACADEMIC_SOURCES: AcademicSource[] = [
  {
    id: 'src-01',
    category: 'Giáo trình cốt lõi',
    title: 'Tài liệu học tập môn HCM202: Tư tưởng Hồ Chí Minh & Đạo đức học đại cương',
    organization: 'Học liệu chính khóa môn học HCM202',
    year: '2024',
    note: 'Nền tảng về chuẩn mực đạo đức cách mạng, tinh thần tự học, tự tu dưỡng suốt đời và trách nhiệm nêu gương của người trí thức.',
  },
  {
    id: 'src-02',
    category: 'Khuyến nghị quốc tế',
    title: 'Khuyến nghị về Đạo đức Trí tuệ Nhân tạo (Recommendation on the Ethics of Artificial Intelligence)',
    organization: 'UNESCO (Tổ chức Giáo dục, Khoa học và Văn hóa Liên Hợp Quốc)',
    year: '2021',
    note: 'Khung chuẩn mực toàn cầu đầu tiên về đạo đức AI, nhấn mạnh trách nhiệm con người (human oversight), tính minh bạch và bảo vệ năng lực con người.',
  },
  {
    id: 'src-03',
    category: 'Nguyên tắc công nghệ',
    title: 'Nguyên tắc AI của OECD (Recommendation of the Council on Artificial Intelligence)',
    organization: 'OECD (Tổ chức Hợp tác và Phát triển Kinh tế)',
    year: '2019 / Cập nhật 2024',
    note: 'Bộ nguyên tắc về AI đáng tin cậy: Tôn trọng nhân quyền, giá trị dân chủ, tính minh bạch và trách nhiệm giải trình của con người.',
  },
  {
    id: 'src-04',
    category: 'Nguồn học thuật bổ sung',
    title: '[BỔ SUNG NGUỒN XÁC THỰC] Nghiên cứu về Liêm chính học thuật trong thời đại Trí tuệ nhân tạo',
    organization: '[TÊN TRƯỜNG ĐẠI HỌC / TẠP CHÍ KHOA HỌC BÌNH DUYỆT]',
    note: 'Dành riêng cho sinh viên và nhóm thuyết trình cập nhật các bài báo khoa học hoặc hướng dẫn chính thức của trường đại học sở tại.',
    isPlaceholder: true,
  },
  {
    id: 'src-05',
    category: 'Văn bản hướng dẫn cơ sở đào tạo',
    title: '[BỔ SUNG NGUỒN XÁC THỰC] Quy định liêm chính học thuật & Hướng dẫn sử dụng AI của Nhà trường',
    organization: '[PHÒNG QUẢN LÝ ĐÀO TẠO / HỘI ĐỒNG KHOA HỌC NHÀ TRƯỜNG]',
    note: 'Dành cho nhóm thuyết trình trích dẫn trực tiếp quyết định hoặc thông báo cụ thể của trường đại học đang theo học.',
    isPlaceholder: true,
  },
];
