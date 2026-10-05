import type { DebateQuestion } from '../types';

export const DEBATE_QUESTIONS: DebateQuestion[] = [
  {
    id: 'debate-01',
    number: '01',
    question: 'Nếu AI giúp sinh viên học nhanh hơn, tại sao không sử dụng AI càng nhiều càng tốt?',
    context:
      'Trong thời đại bùng nổ thông tin và khối lượng bài vở đồ sộ, AI có thể tóm tắt 300 trang sách trong 30 giây, tạo dàn ý, làm bài thuyết trình và code mẫu tức thì.',
    concept:
      'Chủ nghĩa thực dụng (Utilitarianism) vs Thuyết đức hạnh học tập (Virtue Epistemology / Nỗ lực tự tu dưỡng).',
    conflict: {
      sideA:
        'Luận điểm Ủng hộ: Tối đa hóa hiệu suất học tập, tiếp cận nhanh chóng với tinh hoa tri thức nhân loại, chuẩn bị sớm cho môi trường làm việc số hóa nơi năng suất là tiên quyết.',
      sideB:
        'Luận điểm Phản bác: Việc "học nhanh" thông qua tóm tắt máy tính làm mất đi quá trình "vật lộn trí tuệ" (productive struggle) — nơi các liên kết synapse não bộ và tư duy phản biện sâu sắc thực sự được hình thành.',
    },
    keyTakeaway:
      'Tốc độ không đồng nghĩa với độ sâu. Dùng AI để tăng tốc là tốt, nhưng nếu bỏ qua giai đoạn nghiền ngẫm gian khổ, tri thức chỉ là lớp sơn mỏng dễ tróc.',
  },
  {
    id: 'debate-02',
    number: '02',
    question: 'Nếu AI đưa thông tin sai, trách nhiệm thuộc về AI hay người sử dụng?',
    context:
      'Ảo giác AI (Hallucination) là đặc tính cố hữu của các mô hình xác suất thống kê ngôn ngữ lớn (LLM). AI tự tin trích dẫn bài báo khoa học không hề tồn tại.',
    concept:
      'Chủ thể đạo đức (Moral Agency) và Nghĩa vụ thẩm tra (Epistemic Responsibility).',
    conflict: {
      sideA:
        'Luận điểm Đổ lỗi cho Công nghệ: Thuật toán được quảng bá là thông minh, người dùng tin tưởng vào độ uy tín kỹ thuật của các tập đoàn công nghệ lớn; nhà phát triển phải chịu trách nhiệm phân phối thông tin sai.',
      sideB:
        'Luận điểm Trách nhiệm Người dùng: AI không phải là chủ thể pháp lý hay đạo đức; người đứng tên nộp bài hoặc phát ngôn ra xã hội là con người duy nhất nắm giữ trách nhiệm đạo đức thẩm định.',
    },
    keyTakeaway:
      'Máy móc chỉ tính toán xác suất từ tiếp theo; chỉ có con người mới có tư cách đạo đức để cam kết về sự thật.',
  },
  {
    id: 'debate-03',
    number: '03',
    question: 'Nếu sinh viên sử dụng AI nhưng kiểm tra và hiểu toàn bộ nội dung, đó có phải là gian lận không?',
    context:
      'Sinh viên dùng prompt chi tiết để AI viết một bài luận phân tích, sau đó đọc kỹ, tra cứu lại tài liệu gốc, sửa lại 20% câu chữ và có khả năng trả lời vanh vách mọi câu hỏi bảo vệ bài trước hội đồng.',
    concept:
      'Quyền tác giả (Authorship) vs Năng lực tổng hợp (Curatorship) & Tính nguyên bản (Originality).',
    conflict: {
      sideA:
        'Quan điểm "Không gian lận": Mục đích cuối cùng của giáo dục là người học nắm vững tri thức và có thể vận dụng, bảo vệ luận điểm. Việc dùng AI ở đây tương tự như thuê gia sư thông minh phản biện cùng.',
      sideB:
        'Quan điểm "Vẫn vi phạm liêm chính": Thiếu minh bạch về quyền tác giả. Nếu không công khai việc AI là người cấu trúc ban đầu, người học đang nhận công lao (credit) cho một nỗ lực tư duy mà họ không trực tiếp khởi tạo.',
    },
    keyTakeaway:
      'Ranh giới đạo đức nằm ở sự MINH BẠCH (Transparency) và KHẢ NĂNG BẢO VỆ ĐỘC LẬP (Intellectual Ownership). Không che giấu dấu vết của công cụ.',
  },
  {
    id: 'debate-04',
    number: '04',
    question: 'Nếu AI viết tốt hơn con người, tại sao con người vẫn cần tự viết?',
    context:
      'Các mô hình ngôn ngữ thế hệ mới có thể viết tiểu luận với vốn từ phong phú, cấu trúc chặt chẽ và không mắc lỗi chính tả hay ngữ pháp — điều mà nhiều sinh viên đại học vẫn chưa thuần thục.',
    concept:
      'Viết như một hành vi tư duy (Writing as Thinking) vs Viết như một phương tiện truyền đạt thông tin (Writing as Output).',
    conflict: {
      sideA:
        'Luận điểm Ngoại hóa: Tương tự như máy tính bỏ túi thay thế tính nhẩm, con người nên tập trung vào việc ra đề bài (prompting) và quản lý, để phần viết lách cơ bắp cho máy.',
      sideB:
        'Luận điểm Nội tại: Viết không phải là việc ghi chép lại những gì đã nghĩ xong; viết chính là quá trình suy nghĩ diễn ra. Khi bạn từ bỏ việc viết, bạn từ bỏ luôn công cụ tinh chỉnh tư duy sắc bén nhất của não bộ.',
    },
    keyTakeaway:
      'Bạn không viết để nộp một xấp giấy chữ đẹp. Bạn viết để phát hiện ra mình thực sự hiểu vấn đề đến đâu.',
  },
  {
    id: 'debate-05',
    number: '05',
    question: 'Ranh giới giữa AI hỗ trợ (Support) và AI làm thay (Substitution) nằm ở đâu?',
    context:
      'Sinh viên thường tranh luận: "Tôi chỉ nhờ AI sửa ngữ pháp", "Tôi chỉ nhờ AI lên khung bài", "Tôi chỉ nhờ AI tìm luận điểm". Nhưng từng chút một, cả bài viết dần trở thành sản phẩm của AI.',
    concept:
      'Tính tự chủ cá nhân (Autonomy) và Hiện tượng xói mòn năng lực nhận thức (Cognitive Atrophy).',
    conflict: {
      sideA:
        'Góc nhìn Linh hoạt: Ranh giới phụ thuộc vào mục tiêu học tập của từng giai đoạn; không thể có một lằn ranh cứng nhắc áp dụng cho mọi ngành học.',
      sideB:
        'Góc nhìn Cốt lõi: Ranh giới nằm ở "Điểm thắt phán đoán" (Point of Judgment). Bất kỳ khi nào AI đưa ra quyết định chọn lựa thay bạn mà bạn không tự phản biện được lý do, bạn đã bước sang vùng Substitution.',
    },
    keyTakeaway:
      'Nếu bạn có thể tự tin loại bỏ đề xuất của AI và chọn một lối đi riêng có lý lẽ, bạn đang dùng nó như Support. Nếu bạn không dám sửa vì thấy AI viết quá hay, bạn đã bị Substitute.',
  },
  {
    id: 'debate-06',
    number: '06',
    question: 'Nếu nhà trường cho phép tự do sử dụng AI, vấn đề đạo đức có tự động biến mất không?',
    context:
      'Một số trường đại học quốc tế chuyển sang chính sách "Open AI Policy" trong mọi môn học, không cấm sinh viên dùng AI trong bài thi hay đồ án.',
    concept:
      'Quy chuẩn pháp lý/quy chế (Compliance) vs Lương tâm và Phẩm giá cá nhân (Morality & Integrity).',
    conflict: {
      sideA:
        'Góc nhìn Quy chế: Khi luật lệ và quy định môn học cho phép, hành vi đó hoàn toàn hợp pháp và không còn là gian lận học thuật.',
      sideB:
        'Góc nhìn Đạo đức học: Đạo đức vượt trên quy định. Quy chế trường học chỉ đặt ra lằn ranh tối thiểu (Floor), còn việc tu dưỡng nhân cách và tự rèn luyện là chuẩn mực trần (Ceiling) mà mỗi cá nhân tự cam kết với lương tâm.',
    },
    keyTakeaway:
      'Nhà trường có thể cho phép bạn dùng AI để vượt qua môn học, nhưng không quy chế nào có thể bảo đảm cho bạn một nhân cách chính trực nếu bạn tự lừa dối chính mình.',
  },
];
