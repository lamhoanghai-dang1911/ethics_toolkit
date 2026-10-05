import type { Scenario } from '../types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'scenario-01',
    number: '01',
    title: 'AI làm bài tập thay bạn',
    subtitle: 'Nộp bài đúng hạn hay bảo vệ năng lực tự rèn luyện?',
    situation:
      'Ngày mai bạn phải nộp một bài tiểu luận quan trọng. Do quá bận rộn, bạn dùng AI tạo gần như toàn bộ nội dung bài. Bạn đọc lướt qua khoảng 5 phút, thấy cấu trúc mạch lạc, ý tứ khá tốt và quyết định nộp luôn bài viết đó.',
    question:
      'Bạn đang sử dụng AI để hỗ trợ học tập hay đang thay thế hoàn toàn quá trình tự học?',
    choices: [
      {
        id: 'A',
        text: 'Hoàn toàn chấp nhận — Mục tiêu cao nhất là nộp bài đúng hạn và tối ưu hóa thời gian sinh viên.',
        tendency: 'efficiency',
        analysis: {
          protects: 'Thời gian ngắn hạn, tránh bị trừ điểm trễ hạn và giải phóng áp lực trước mắt.',
          risks: 'Đánh mất hoàn toàn cơ hội rèn luyện tư duy phân tích, hình thành thói quen ỷ lại vào công cụ.',
          responsibility: 'Bạn vẫn là người ký tên trên bài nộp và phải chịu 100% trách nhiệm về tính trung thực học thuật.',
        },
      },
      {
        id: 'B',
        text: 'Chấp nhận nếu tôi đọc lại — Chỉ cần tôi nắm được ý chính để nếu bị hỏi vẫn trả lời được sơ bộ.',
        tendency: 'abdication',
        analysis: {
          protects: 'Cảm giác an tâm giả tạo rằng mình "đã kiểm soát" nội dung được nộp.',
          risks: 'Nhầm lẫn giữa việc "nhận biết mặt chữ" với "thấu hiểu sâu sắc" tri thức được tạo ra.',
          responsibility: 'Trách nhiệm kiểm chứng logic sâu và nguồn gốc thực sự của từng luận điểm.',
        },
      },
      {
        id: 'C',
        text: 'Chỉ nên dùng AI để hỗ trợ — Dùng AI tìm ý tưởng/dàn bài, nhưng tự tay viết lại bằng lập luận của mình.',
        tendency: 'self_cultivation',
        analysis: {
          protects: 'Quá trình tự thân tu dưỡng, rèn luyện kỹ năng viết và tư duy phản biện độc lập.',
          risks: 'Tốn nhiều thời gian và công sức hơn, bài viết có thể không "trau chuốt bóng bẩy" bằng máy.',
          responsibility: 'Duy trì kỷ luật bản thân giữa cám dỗ của việc tạo văn bản tự động tức thì.',
        },
      },
      {
        id: 'D',
        text: 'Không nên sử dụng AI cho bài tập — Bài tập học thuật phải là sản phẩm thuần túy 100% của người học.',
        tendency: 'critical_thinking',
        analysis: {
          protects: 'Sự thuần khiết tuyệt đối của nỗ lực cá nhân và chuẩn mực học thuật truyền thống.',
          risks: 'Bỏ lỡ cơ hội học cách làm việc cùng các công nghệ hiện đại mà tương lai nghề nghiệp yêu cầu.',
          responsibility: 'Tự gánh vác toàn bộ quá trình tìm kiếm tài liệu thủ công mà không có trợ thủ tổng hợp.',
        },
      },
    ],
    tradeOff: {
      left: 'Tính Hiệu suất (Tối ưu thời gian)',
      right: 'Sự Tự tu dưỡng (Năng lực tự thân)',
      description:
        'Sự giằng co giữa việc đạt kết quả nhanh nhất trước mắt với việc gìn giữ quá trình rèn luyện gian khổ để biến tri thức thành năng lực nội tại của chính mình.',
    },
    keyReflection:
      'AI giúp bạn hoàn thành nhiệm vụ. Nhưng quá trình tự suy nghĩ mới tạo ra năng lực của bạn.',
    tags: ['Tự học', 'Liêm chính học thuật', 'Hiệu suất'],
  },
  {
    id: 'scenario-02',
    number: '02',
    title: 'AI trả lời sai nhưng rất thuyết phục',
    subtitle: 'Ảo giác thông tin và cái bẫy của niềm tin mù quáng',
    situation:
      'Bạn hỏi AI một câu hỏi học thuật phức tạp. AI đưa ra một câu trả lời cực kỳ chi tiết, hành văn đanh thép kèm 3 trích dẫn tài liệu hàn lâm (tên tác giả, năm, nhà xuất bản). Bạn tin tưởng không kiểm tra lại nguồn gốc và trích dẫn thẳng vào bài thuyết trình trước lớp.',
    question: 'Nếu thông tin và các trích dẫn đó hoàn toàn là do AI bịa đặt, trách nhiệm thuộc về ai?',
    choices: [
      {
        id: 'A',
        text: 'Trách nhiệm thuộc về AI — Nhà phát triển hệ thống phải chịu trách nhiệm khi mô hình tạo ra ảo giác.',
        tendency: 'abdication',
        analysis: {
          protects: 'Cảm giác vô can và tự ái cá nhân của người học trước sự cố sai sót.',
          risks: 'Tước bỏ tư cách chủ thể đạo đức của chính mình, biến mình thành chiếc loa phát thanh thụ động cho máy.',
          responsibility: 'Thầy cô và người nghe chỉ biết đến bạn — người phát ngôn, chứ không phải con bot.',
        },
      },
      {
        id: 'B',
        text: 'Trách nhiệm thuộc về người sử dụng — AI chỉ là công cụ tính toán xác suất, người dùng mới là người công bố.',
        tendency: 'responsibility',
        analysis: {
          protects: 'Chuẩn mực liêm chính học thuật và tính trung thực của tri thức nhân loại.',
          risks: 'Đòi hỏi sự tỉnh táo và thời gian đối chiếu nguồn sách báo thực tế rất khắt khe.',
          responsibility: 'Mọi phát ngôn học thuật khi đưa ra công chúng đều phải có chữ ký trách nhiệm của người nói.',
        },
      },
      {
        id: 'C',
        text: 'Cả hai cùng chịu trách nhiệm — Nhà phát triển phải cảnh báo, còn người dùng phải kiểm chứng.',
        tendency: 'verification',
        analysis: {
          protects: 'Góc nhìn hệ thống toàn diện về chuỗi giá trị đạo đức công nghệ.',
          risks: 'Có thể bị lợi dụng để đổ lỗi qua lại và phân tán trách nhiệm cá nhân trong bài tập môn học.',
          responsibility: 'Dù công nghệ có lỗi đến đâu, khâu thẩm định cuối cùng trong lớp học vẫn là con người.',
        },
      },
      {
        id: 'D',
        text: 'Không ai chịu trách nhiệm nếu không cố ý — Đây chỉ là tai nạn kỹ thuật ngoài ý muốn.',
        tendency: 'efficiency',
        analysis: {
          protects: 'Tâm lý bao dung trước sai sót công nghệ mới.',
          risks: 'Dung túng cho sự cẩu thả, lan truyền thông tin sai lệch và làm xói mòn lòng tin khoa học.',
          responsibility: 'Sự vô ý trong nghiên cứu học thuật vẫn là một lỗi đạo đức về sự tắc trách.',
        },
      },
    ],
    tradeOff: {
      left: 'Sự Tiện lợi (Thuận tiện trước mắt)',
      right: 'Nghĩa vụ Kiểm chứng (Bảo vệ sự thật)',
      description:
        'Sự xung đột giữa việc tiếp nhận thông tin được dọn sẵn với nghĩa vụ đạo đức phải tra cứu tận gốc nguồn tài liệu trước khi công bố.',
    },
    keyReflection:
      'AI có thể tạo ra thông tin. Nhưng con người quyết định thông tin đó có đáng tin để sử dụng hay không.',
    tags: ['Ảo giác AI', 'Kiểm chứng nguồn', 'Trách nhiệm'],
  },
  {
    id: 'scenario-03',
    number: '03',
    title: 'AI viết tốt hơn tôi',
    subtitle: 'Nghịch lý giữa sản phẩm bóng bẩy và quá trình trưởng thành',
    situation:
      'Bạn tự nhận mình diễn đạt còn vụng về, câu từ khô khan. AI có thể viết một bài nghị luận xã hội văn phong sắc sảo, ngôn từ hoa mỹ và dẫn chứng phong phú hơn khả năng hiện tại của bạn gấp nhiều lần.',
    question: 'Nếu sản phẩm cuối cùng tốt hơn, tại sao bạn vẫn cần tự viết?',
    choices: [
      {
        id: 'A',
        text: 'Tự viết để rèn luyện tiếng nói và tư duy nội tâm — Dù vụng về nhưng đó là suy nghĩ chân thật của chính tôi.',
        tendency: 'self_cultivation',
        analysis: {
          protects: 'Bản sắc cá nhân, khả năng biểu đạt cảm xúc và tư duy độc lập không bị đồng hóa.',
          risks: 'Điểm số ban đầu có thể thấp hơn bạn bè dùng AI, văn phong còn vụng dại.',
          responsibility: 'Kiên trì chấp nhận sự không hoàn hảo trong giai đoạn đầu của việc tự tu dưỡng.',
        },
      },
      {
        id: 'B',
        text: 'Nên để AI viết — Trong xã hội hiện đại, sản phẩm đầu ra hoàn hảo mới là thước đo duy nhất.',
        tendency: 'efficiency',
        analysis: {
          protects: 'Ấn tượng tốt trước mắt với người chấm, thành tích điểm số cao.',
          risks: 'Làm teo tóp năng lực ngôn ngữ tự thân; khi không có máy móc, bạn trở nên câm nín trong tư duy.',
          responsibility: 'Chấp nhận rằng thành tích đó là của thuật toán, không phải của nội lực bản thân.',
        },
      },
      {
        id: 'C',
        text: 'Dùng AI làm bạn đồng hành phản biện — Để AI chỉ ra lỗi diễn đạt, rồi tự mình viết lại câu chữ.',
        tendency: 'critical_thinking',
        analysis: {
          protects: 'Sự thăng tiến năng lực viết thông qua việc học hỏi phản hồi liên tục.',
          risks: 'Đòi hỏi sự khiêm tốn học hỏi và công sức đối chiếu nhiều vòng lặp.',
          responsibility: 'Giữ vai trò tác giả thực thụ, coi AI như một biên tập viên nghiêm khắc.',
        },
      },
      {
        id: 'D',
        text: 'Tùy ngữ cảnh: Môn quan trọng thì tự viết, môn phụ thì để AI làm đẹp câu chữ.',
        tendency: 'efficiency',
        analysis: {
          protects: 'Sự thực dụng trong việc phân bổ tài nguyên năng lượng học tập.',
          risks: 'Hình thành nhân cách phân mảnh, thỏa hiệp đạo đức ở những nơi không bị giám sát chặt chẽ.',
          responsibility: 'Tự tu dưỡng đòi hỏi tính nhất quán, không phải tính cơ hội.',
        },
      },
    ],
    tradeOff: {
      left: 'Chất lượng bề mặt (Sản phẩm bóng bẩy)',
      right: 'Quá trình học tập (Trưởng thành nội tại)',
      description:
        'Sự lựa chọn giữa việc trưng bày một bức tượng đồng do máy in 3D hay tự mình đổ mồ hôi cầm đục để rèn luyện cơ bắp điêu khắc.',
    },
    keyReflection:
      'Nếu AI luôn làm phần khó nhất, năng lực nào của bạn đang được rèn luyện?',
    tags: ['Năng lực tự thân', 'Tiếng nói cá nhân', 'Tu dưỡng'],
  },
  {
    id: 'scenario-04',
    number: '04',
    title: 'AI quyết định thay bạn',
    subtitle: 'Ranh giới mong manh giữa tư vấn dữ liệu và nhượng bộ phán đoán',
    situation:
      'Trong một bài tập phân tích tình huống y đức hoặc chính sách công, AI liệt kê 5 giải pháp và đề xuất dứt khoát: "Phương án 3 là tối ưu nhất với xác suất thành công 94%". Bạn không kiểm tra các giả định đạo đức đằng sau con số 94% mà sao chép ngay làm kết luận của nhóm.',
    question: 'Khi nào AI chuyển từ một công cụ hỗ trợ thành người ra quyết định thực tế?',
    choices: [
      {
        id: 'A',
        text: 'Khi ta ngừng đặt câu hỏi "Tại sao?" và chấp nhận kết luận chỉ vì uy tín của thuật toán.',
        tendency: 'critical_thinking',
        analysis: {
          protects: 'Quyền phán đoán đạo đức và năng lực chất vấn quyền lực thuật toán.',
          risks: 'Mất thời gian bóc tách các ma trận số liệu phức tạp và đặt nghi vấn phản chứng.',
          responsibility: 'Nhận diện rằng thuật toán luôn mang những định kiến ẩn của tập dữ liệu huấn luyện.',
        },
      },
      {
        id: 'B',
        text: 'Khi AI phân tích dữ liệu nhanh và logic hơn con người thì việc làm theo nó là hoàn toàn khoa học.',
        tendency: 'abdication',
        analysis: {
          protects: 'Sự an tâm dựa vào bằng chứng định lượng tưởng chừng khách quan.',
          risks: 'Mù quáng đạo đức khi AI đánh đổi quyền lợi con người vì mục tiêu tối ưu hóa số học.',
          responsibility: 'Đạo đức không phải bài toán tối ưu hóa biến số; đạo đức là sự thấu cảm và trách nhiệm.',
        },
      },
      {
        id: 'C',
        text: 'AI chỉ hỗ trợ khi cung cấp góc nhìn đa chiều; còn khi nó chỉ định 1 phương án duy nhất, nó đã tiếm quyền.',
        tendency: 'judgment',
        analysis: {
          protects: 'Không gian suy ngẫm và cân nhắc cần thiết của con người.',
          risks: 'Phải đối diện với sự bối rối khi có nhiều lựa chọn đạo đức xung đột nhau.',
          responsibility: 'Chủ động yêu cầu AI đóng vai phản biện đa chiều thay vì xin một đáp án đóng đinh.',
        },
      },
      {
        id: 'D',
        text: 'Con người luôn là người quyết định vì ta là người bấm nút gửi bài.',
        tendency: 'efficiency',
        analysis: {
          protects: 'Ảo tưởng về quyền kiểm soát hình thức.',
          risks: 'Bỏ qua bản chất: Một chiếc tem cao su đóng dấu mà không đọc nội dung không phải là người ra quyết định.',
          responsibility: 'Phán đoán đòi hỏi sự thấu hiểu lý do, không đơn thuần là hành động nhấp chuột.',
        },
      },
    ],
    tradeOff: {
      left: 'Tối ưu hóa dữ liệu (Tính toán máy)',
      right: 'Phán đoán nhân văn (Lương tâm con người)',
      description:
        'Sự giằng co giữa việc dựa vào thuật toán tối ưu hóa xác suất với nghĩa vụ con người phải cân nhắc các giá trị nhân văn không thể lượng hóa.',
    },
    keyReflection:
      'Khi bạn ngừng đặt câu hỏi "Tại sao phương án này tốt hơn?", bạn đã vô tình nhượng lại phẩm giá phán đoán cho cỗ máy.',
    tags: ['Phán đoán đạo đức', 'Định kiến thuật toán', 'Tự chủ'],
  },
  {
    id: 'scenario-05',
    number: '05',
    title: 'Bạn có thực sự hiểu bài không?',
    subtitle: 'Nghịch lý giữa việc xong bài tập và sự thiếu hụt tri thức nội tại',
    situation:
      'Bạn dùng AI để giải một bài tập nghiên cứu lý luận rất hóc búa. AI đưa ra đáp án hoàn hảo và bạn đạt điểm 10 tối đa. Nhưng tuần sau, khi giảng viên ngẫu nhiên mời bạn lên bảng giải thích tại sao lại dẫn đến luận điểm đó, bạn hoàn toàn lúng túng và không thể tự giải thích bằng ngôn ngữ của mình.',
    question: 'Trong trường hợp này, bạn đã thực sự hoàn thành bài tập hay chỉ mới hoàn thành thủ tục nộp?',
    choices: [
      {
        id: 'A',
        text: 'Chỉ mới hoàn thành thủ tục hành chính nộp bài — Bản chất việc học là tiếp thu nội lực chưa hề xảy ra.',
        tendency: 'self_cultivation',
        analysis: {
          protects: 'Sự thành thật với chính mình — tiền đề quan trọng nhất của mọi sự tu dưỡng đạo đức.',
          risks: 'Đối diện với cảm giác xấu hổ và nhận ra điểm số trên bảng điểm không phản ánh thực lực.',
          responsibility: 'Chủ động học lại từ đầu để lấp đầy lỗ hổng tri thức trước khi quá muộn.',
        },
      },
      {
        id: 'B',
        text: 'Đã hoàn thành bài tập theo đúng luật chơi — Điểm số đã vào sổ, phần hiểu sâu có thể bổ sung sau khi đi làm.',
        tendency: 'efficiency',
        analysis: {
          protects: 'Lợi ích hồ sơ điểm số và tính thực dụng tức thời.',
          risks: 'Xây dựng sự nghiệp trên một nền móng rỗng ruột; sẽ sụp đổ khi bước vào môi trường thực tế không có AI.',
          responsibility: 'Tự chịu trách nhiệm cho sự bất an lâu dài về trình độ chuyên môn của chính mình.',
        },
      },
      {
        id: 'C',
        text: 'Cần xem đây là tín hiệu cảnh báo khẩn cấp — Phải lập tức dừng việc dùng AI kiểu "hộp đen" khép kín.',
        tendency: 'understanding',
        analysis: {
          protects: 'Sự thức tỉnh kịp thời trước khi thói quen ỷ lại biến thành bản chất tư duy lười biếng.',
          risks: 'Tiến độ học tập có thể chậm lại, cần nỗ lực gấp đôi để tự vấn.',
          responsibility: 'Đặt ra nguyên tắc: Bất kỳ điều gì AI viết ra mà mình không giải thích được thì không nộp.',
        },
      },
      {
        id: 'D',
        text: 'Lỗi do phương pháp kiểm tra của giảng viên chưa kịp thời chuyển đổi sang thời đại trí tuệ nhân tạo.',
        tendency: 'abdication',
        analysis: {
          protects: 'Cơ chế tự vệ tâm lý bằng cách đổ lỗi cho hệ thống giáo dục.',
          risks: 'Tự ru ngủ mình trong sự tiến bộ công nghệ ảo mà quên mất con người là chủ nhân tương lai.',
          responsibility: 'Dù công nghệ có thay đổi thế nào, năng lực tư duy phản biện của cá nhân vẫn không ai thay thế được.',
        },
      },
    ],
    tradeOff: {
      left: 'Hoàn thành bài tập (Thủ tục nộp)',
      right: 'Thấu hiểu tri thức (Năng lực nội tại)',
      description:
        'Sự khác biệt mang tính sống còn giữa một kết quả được đánh dấu "Hoàn thành" trên hệ thống bài tập với một bộ óc thực sự trưởng thành và tự tin làm chủ kiến thức.',
    },
    keyReflection:
      'Điểm số phản ánh sản phẩm nộp, nhưng năng lực thực sự chỉ tồn tại khi bạn có thể tự mình bảo vệ và giải thích lập luận.',
    tags: ['Thấu hiểu', 'Năng lực cốt lõi', 'Liêm chính'],
  },
];
