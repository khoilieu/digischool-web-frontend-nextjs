import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  TutorialSection,
  LargeFeatureSection,
  CtaSection,
} from "../components/sections";

import {
  header,
  faqs,
  testimonials,
  features,
  tutorials,
  clients,
  footer,
} from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>DigiSchool</title>
      </Head>
      <Header
        logo={header.logo}
        links={header.links}
        buttons={header.buttons}
      />
      <HeroSection
        id="home"
        badge={{
          href: "https://www.facebook.com/profile.php?id=61579005733703",
          icon: "tabler:arrow-right",
          label: "👋 Theo dõi nền tảng Digischool",
        }}
        title="DigiSchool - Hệ thống thay thế sổ đầu bài"
        description="Hệ thống thay thế sổ đầu bài, quản lý hoạt động các tiết học một cách nhanh chóng và dễ dàng."
        buttons={[
          {
            href: "#",
            label: (
              <>
                <FontAwesomeIcon icon={faApple} className="mr-2" />
                Tải phiên bản iOS
              </>
            ),
            color: "dark",
            className: "hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out",
          },
          {
            href: "#",
            label: (
              <>
                <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                Tải phiên bản Android
              </>
            ),
            color: "white",
            className: "bg-white text-[#29375C] hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200",
          },
        ]}
      />
      <FeatureSection
        id="features"
        title="Tính năng chính của DigiSchool"
        description="Ứng dụng thay thế sổ đầu bài truyền thống với các tính năng hiện đại giúp quản lý lớp học hiệu quả."
        features={features}
      />
      
      {/* Role: Học sinh */}
      <LargeFeatureSection
        id="students"
        title="Học sinh - Quản lý học tập thông minh"
        description="Ứng dụng giúp học sinh theo dõi lịch học, nộp đơn từ và giao tiếp với giáo viên một cách dễ dàng."
        list={[
          {
            title: "Quản lý thời khóa biểu",
            description: "Xem lịch học cá nhân theo ngày/tuần/tháng với thông báo real-time"
          },
          {
            title: "Nộp đơn từ online",
            description: "Tạo đơn xin nghỉ học và theo dõi trạng thái duyệt tự động"
          },
          {
            title: "Chat và thông báo",
            description: "Giao tiếp trực tiếp với giáo viên và nhận thông báo lớp học"
          }
        ]}
        image={{
          src: "./student_mockup.png",
          alt: "Ứng dụng cho học sinh",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />

      {/* Role: Giáo viên */}
      <LargeFeatureSection
        id="teachers"
        reverse={true}
        title="Giáo viên - Quản lý lớp học hiệu quả"
        description="Hỗ trợ giáo viên quản lý lớp học, phê duyệt đơn từ và theo dõi tiến độ học tập của học sinh."
        list={[
          {
            title: "Quản lý lớp học",
            description: "Xem danh sách học sinh, quản lý bài giảng và theo dõi tiến độ"
          },
          {
            title: "Phê duyệt đơn từ",
            description: "Xử lý đơn xin nghỉ, yêu cầu đổi tiết, dạy bù và dạy thay"
          },
          {
            title: "Đánh giá và báo cáo",
            description: "Đánh giá học sinh, tạo báo cáo tiến trình và thống kê điểm số"
          }
        ]}
        image={{
          src: "./teacher_mockup.png",
          alt: "Ứng dụng cho giáo viên",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />

      {/* Role: Quản lý */}
      <LargeFeatureSection
        id="managers"
        title="Quản lý - Điều hành toàn trường"
        description="Hệ thống quản lý toàn diện giúp ban giám hiệu điều hành trường học một cách hiệu quả."
        list={[
          {
            title: "Quản lý trường học",
            description: "Phân quyền người dùng, quản lý lớp học và cấu hình hệ thống"
          },
          {
            title: "Tối ưu thời khóa biểu",
            description: "Sử dụng AI để tạo lịch học tối ưu và xử lý xung đột tự động"
          },
          {
            title: "Báo cáo tổng quan",
            description: "Dashboard toàn trường với thống kê chi tiết và phân tích hiệu suất"
          }
        ]}
        image={{
          src: "./manager_mockup.png",
          alt: "Ứng dụng cho quản lý",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />

      {/* Role: Phụ huynh */}
      <LargeFeatureSection
        reverse={true}
        id="parents"
        title="Phụ huynh - Theo dõi con cái 24/7"
        description="Giúp phụ huynh theo dõi quá trình học tập và giao tiếp với nhà trường mọi lúc."
        list={[
          {
            title: "Theo dõi con cái",
            description: "Xem thông tin học tập, điểm số và hoạt động của con mọi lúc"
          },
          {
            title: "Quản lý đơn từ",
            description: "Nhận thông báo và phê duyệt đơn xin nghỉ của con khi cần"
          },
          {
            title: "Giao tiếp nhà trường",
            description: "Chat với giáo viên chủ nhiệm và nhận thông báo real-time"
          }
        ]}
        image={{
          src: "./parent_mockup.png",
          alt: "Ứng dụng cho phụ huynh",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <TutorialSection
        id="tutorials"
        title="Hướng dẫn sử dụng ứng dụng"
        description="Xem các video hướng dẫn chi tiết cách sử dụng ứng dụng DigiSchool cho từng vai trò người dùng."
        badge={{
          leading: true,
          icon: "tabler:video",
          label: "HƯỚNG DẪN",
        }}
        tutorials={tutorials}
      />
      <FaqSection
        id="faqs"
        title="Câu hỏi thường gặp"
        buttons={[
          {
            label: "Liên hệ hỗ trợ",
            href: "https://www.facebook.com/quockie1",
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      />
      <CtaSection
        title="Sẵn sàng sử dụng ứng dụng?"
        description="Tải ứng dụng ngay để bắt đầu sử dụng và trải nghiệm các tính năng đầy đủ."
        buttons={[{ label: "Tải ứng dụng", href: "#home", color: "dark"}]}
      />
      <Footer
        id="footer"
        copyright={footer.copyright}
        logo={footer.logo}
        social={footer.social}
        links={footer.links}
      />
    </>
  );
}
